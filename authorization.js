function renderAuthBlock_1(container){
    const authTop = document.createElement('div');
    authTop.classList.add('author_top');

    const authBlock2 = document.createElement('div');
    authBlock2.classList.add('author');
    authBlock2.classList.add('center');

    container.appendChild(authTop);
    container.appendChild(authBlock2);
}

function renderAuthBlock_2(container){
    const authTitle = document.createElement('h1');
    authTitle.textContent = 'Камень, ножницы, бумага';
    authTitle.classList.add('title');
    authTitle.classList.add('author_title');

    const authBlock3 = document.createElement('div');
    authBlock3.classList.add('author_form-field');

    container.appendChild(authTitle);
    container.appendChild(authBlock3);
}

function renderAuthBlock_3(container){
    const authInput = document.createElement('input');
    authInput.setAttribute('type', 'text');
    authInput.setAttribute('name', 'login');
    authInput.setAttribute('placeholder', 'Введите никнейм');
    authInput.classList.add('author_input');

    const authSubtitle = document.createElement('h3');
    authSubtitle.textContent = 'Никнейм';
    authSubtitle.classList.add('author_nickname');

    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn_container');

    container.appendChild(authSubtitle);
    container.appendChild(authInput);
    container.appendChild(btnContainer);
}

function renderStartButton(container){
    const authBtn = document.createElement('button');
    authBtn.textContent = 'Играть';
    authBtn.classList.add('button');
    authBtn.classList.add('author_form_button');
    
    authBtn.addEventListener('click', () =>{
        request({
            url: `${window.application.host}/login`,
            params: {
                login: document.querySelector('.author_input').value, // Получаем никнейм, введенный игроком
            },

            onSuccess: (response) =>{
                if (response.status === 'ok') {
                    const token = response.token;
                    window.application.token = token;

                    //Проверяем статус игрока
                    request({
                        url: `${window.application.host}/player-status`,
                        params: {
                            token: token
                        },
                        onSuccess: (response) =>{
                            if(response.status === 'ok'){ // Определяем, какой экран рисовать
                                if(response['player-status'].status === 'lobby'){
                                    window.application.renderScreen('lobby');
                                }
                                else{
                                    window.application.gameId = response['player-status'].game.id;
                                    window.application.renderScreen('game');
                                }
                            }
                            else{
                                console.log('Не удалось получить статус игрока');
                            }
                        }

                    });
                }
                else{
                    console.warn('Не удалось авторизоваться! auth 89'); // 
                }
            }
        })
        });
        container.appendChild(authBtn);

}


window.application.blocks['auth1'] = renderAuthBlock_1;
window.application.blocks['auth2'] = renderAuthBlock_2;
window.application.blocks['auth3'] = renderAuthBlock_3;
window.application.blocks['start-button'] = renderStartButton;



function renderAuthScreen() {
    const authDiv = document.createElement('div');
    document.querySelector('.app').appendChild(authDiv);

    window.application.renderBlock('auth1', authDiv);
    window.application.renderBlock('auth2', document.querySelector('.author'));
    window.application.renderBlock('auth3', document.querySelector('.author_form-field'));
    window.application.renderBlock('start-button', document.querySelector('.btn_container'));
}

window.application.screens['authorization'] = renderAuthScreen();

