function renderWaitBlock_1(container){
    const lobbyTop = document.createElement('div');
    lobbyTop.classList.add('lobby_top');
  
    const waitBlok2 = document.createElement('div');
    waitBlok2.classList.add('waiting');
    waitBlok2.classList.add('center');
  
    container.appendChild(lobbyTop);
    container.appendChild(waitBlok2);  

    const intervalID = setInterval(() => {

    request({
        url: `${window.application.host}/game-status`,
        params: {
            token: window.application.token,
            id: window.application.gameId,
        },
        onSuccess: (response) => {
            if(response.status === "ok"){
                if(response['game-status'] !== 'waiting-for-start'){
                    window.application.renderAuthScreen('waiting');  // отрисовываем ожидание игры
                }
            }
            else{
                console.warn(response.message);
            }
        }
    });
}, 500)

window.application.timers.push(intervalID);
}

function renderWaitBlock_2(container){
    const waitTitle = document.createElement('h1');
    waitTitle.textContent = "Игра";
    waitTitle.classList.add('title');
    waitTitle.classList.add('waiting_title');

    const waitSubtitle = document.createElement('h3');
    waitSubtitle.textContent = "Вы против СердцеКамень";
    waitSubtitle.classList.add('subtitle');
    waitSubtitle.classList.add('waiting_subtitle');
  
    const waitImg = document.createElement('div');
    waitImg.classList.add('hourglass-img');

    const waitBlok3 = document.createElement('div');
    waitBlok3.classList.add('waiting_subtitle_container');
  
    container.appendChild(waitTitle);
    container.appendChild(waitSubtitle);  
    container.appendChild(waitImg);  
    container.appendChild(waitBlok3);  
}

function renderWaitBlock_3(container){
    const waitSub2 = document.createElement('h3');
    waitSub2.textContent = "Ожидаем подключение соперника...";
    waitSub2.classList.add('subtitle');
    waitSub2.classList.add('waiting_subtitle');
  
    container.appendChild(waitSub2);
}

window.application.blocks['wait1'] = renderWaitBlock_1;
window.application.blocks['wait2'] = renderWaitBlock_2;
window.application.blocks['wait3'] = renderWaitBlock_3;


function renderWaitingScreen() {
    const authDiv = document.createElement('div');
    document.querySelector('.app').appendChild(authDiv);

    window.application.renderBlock('wait1', authDiv);
    window.application.renderBlock('wait2', document.querySelector('.waiting'));
    window.application.renderBlock('wait3', document.querySelector('.waiting_subtitle_container'));

}

window.application.screens['waiting'] = renderWaitingScreen;