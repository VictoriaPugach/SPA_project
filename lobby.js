
  function renderPlayersListBlock(container) {

    const ul = document.createElement('div');
    ul.classList.add('lobby_players');
    container.appendChild(ul);

    const idIntervar = setInterval(() =>{ 
    request({
      url: `${window.application.host}/player-list`,
      params: {
        token:window.application.token
      },
      onSuccess: (response) => {
        if(response.status === 'ok'){
          ul.replaceChildren(); // Заменить на "ничто"

          response.list.forEach(item =>{
            console.log('item', item);
            const li = document.createElement('h3');
            li.classList.add('players_card');
            li.textContent = item.login;
            ul.appendChild(li);
          })
        }
        else{
          console.warn('Не удалось получить список игроков');
        }
      }
    })
  }, 1000);

  window.application.timers.push(idIntervar);
}


function renderLobbyBlock_1(container){
  const lobbyTop = document.createElement('div');
  lobbyTop.classList.add('lobby_top');

  const lobbyBlok2 = document.createElement('div');
  lobbyBlok2.classList.add('lobby');
  lobbyBlok2.classList.add('center');

  const lobbyFooter = document.createElement('div');
  lobbyFooter.classList.add('lobby_footer');

  container.appendChild(lobbyTop);
  container.appendChild(lobbyBlok2);  
  container.appendChild(lobbyFooter);
}

function renderLobbyBlock_2(container){
  const lobbyTitle = document.createElement('h1');
  lobbyTitle.textContent = "Лобби";
  lobbyTitle.classList.add('title');
  lobbyTitle.classList.add('lobby_title');

  const lobbyBlok3 = document.createElement('div');
  lobbyBlok3.classList.add('author_form-field');

  container.appendChild(lobbyTitle);
  container.appendChild(lobbyBlok3);  
}

function renderLobbyBlock_3(container){
  const lobbyBlok4 = document.createElement('div');
  lobbyBlok4.classList.add('lobby_playersss');
  lobbyBlok4.classList.add('lobby_players');

  container.appendChild(lobbyBlok4);
}

function renderGameButton(container){
  const lobbyBtn = document.createElement('button');
  lobbyBtn.textContent ="Играть!";
  lobbyBtn.classList.add('button');
  lobbyBtn.classList.add('lobby_form_button');

  lobbyBtn.addEventListener('click', () =>{  
    request({
      url: `${window.application.host}/start`,
      params: {
        token: window.application.token
      },
      onSuccess: (response) => {
        if(response.status === 'ok'){
          window.application.gameId = response['player-status'].game.id;
          window.application.renderScreen('waiting');
        }
        else{
          console.warn(response.message);
        }
      }
    });
  });
  container.appendChild(lobbyBtn);  

}

window.application.blocks['lobby1'] = renderLobbyBlock_1;
window.application.blocks['lobby2'] = renderLobbyBlock_2;
window.application.blocks['lobby3'] = renderLobbyBlock_3;
window.application.blocks['lobby444'] = renderPlayersListBlock; 
window.application.blocks['to_play_button'] = renderGameButton;

function renderLobbyScreen() {
    const lobbyDiv = document.createElement('div');
    document.querySelector('.app').appendChild(lobbyDiv);

    window.application.renderBlock('lobby1', lobbyDiv);
    window.application.renderBlock('lobby2', document.querySelector('.lobby'));
    window.application.renderBlock('lobby3', document.querySelector('.author_form-field'));
    window.application.renderBlock('lobby444', document.querySelector('.lobby_playersss'));
    window.application.renderBlock('to_play_button', document.querySelector('.lobby_playersss'));
    }

window.application.screens['lobby'] = renderLobbyScreen;



