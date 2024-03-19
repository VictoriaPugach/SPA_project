const radioButtons = document.querySelectorAll('.rating_round');

radioButtons.forEach(radio => {

    radio.addEventListener('change', function(e){
  
      const checkedNumber = document.querySelector('.rating_round:checked').value || undefined;
  
      radioButtons.forEach(item => {
        
        const currentLabel = item.previousElementSibling;
  
        if (item.value <= checkedNumber){
          currentLabel.classList.add('check');
        
        }else{
          currentLabel.classList.remove('check');
  
        }
    });
  })
});


function renderGameBlock_1(container){
  const gameTop = document.createElement('div');
  gameTop.classList.add('lobby_top');

  const gameBlock1 = document.createElement('div');
  gameBlock1.classList.add('lobby');
  gameBlock1.classList.add('center');

  
  container.appendChild(gameTop);
  container.appendChild(gameBlock1);
}

function renderGameBlock_2(container){
  const gameTitle = document.createElement('h1');
  gameTitle.textContent = 'Игра';
  gameTitle.classList.add('title');
  gameTitle.classList.add('game_title');

  //const gameSubtitle = document.createElement('h3');
  //gameSubtitle.textContent = "Вы против СердцеКамень";
  //gameSubtitle.classList.add('subtitle');
  //gameSubtitle.classList.add('game_subtitle');


  const gameBlock2 = document.createElement('div');
  gameBlock2.classList.add('game_form-field');
  
  container.appendChild(gameTitle);
  //container.appendChild(gameSubtitle);
  container.appendChild(gameBlock2);
}

function renderGameBlock_3(container){
  const gameBlock3 = document.createElement('div');
  gameBlock3.classList.add('game_options');

  container.appendChild(gameBlock3);
}

function renderGameBlock_4(container){
  const rock = document.createElement('div');
  rock.classList.add('game_radio_btn');
  
  const scissors = document.createElement('div');
  scissors.classList.add('game_radio_btn');
  scissors.classList.add('game_radio_btn2');

  const paper = document.createElement('div');
  paper.classList.add('game_radio_btn');
  
  container.appendChild(rock);
  container.appendChild(scissors);
  container.appendChild(paper);
}


function renderGameBlock_5(container){ //камень
  const rockImg = document.createElement('div');
  rockImg.classList.add('game_img');
  rockImg.classList.add('game_img_1');
  
  const rockInput = document.createElement('input');
  rockInput.setAttribute('type', 'radio');
  rockInput.setAttribute('name', 'radio');
  rockInput.setAttribute('id', 'radio_1');
  rockInput.setAttribute('value', '1');
  rockInput.classList.add('rating_round');
  
  const rockLabel = document.createElement('label');
  rockLabel.setAttribute('for', 'radio-1');
  rockLabel.setAttribute('name', 'radio');
  rockLabel.textContent = "Камень"; 

  rockLabel.addEventListener('click', () =>{
    request({
      url: `${window.application.host}/play`,
      params: {
        token: window.application.token,
        id: window.application.gameId,
        move: 'rock',
      },
      onSuccess: (response) => {
        if(response.status === 'ok'){
          const status = response['game-status'].status;

          switch(status){

            case 'waiting-for-enemy-move':
              window.application.renderScreen('waiting-enemy');
              break;
            case  'lose':
              window.application.renderScreen('lose');
              break;
            case 'win':   
            window.application.renderScreen('win');
            break;
            default:
              console.log("Ничья, сделайте еще один ход");
              break;
          }
        }
        else{
          console.warn(response.message);
        }
      }
    })
  })
  
  container.appendChild(rockImg);
  container.appendChild(rockInput);
  container.appendChild(rockLabel);
}


function renderGameBlock_6(container){ //Ножницы
  const sciImg = document.createElement('div');
  sciImg.classList.add('game_img');
  sciImg.classList.add('game_img_2');
  
  const sciInput = document.createElement('input');
  sciInput.setAttribute('type', 'radio');
  sciInput.setAttribute('name', 'radio');
  sciInput.setAttribute('id', 'radio_2');
  sciInput.setAttribute('value', '2');
  sciInput.classList.add('rating_round');
  
  const sciLabel = document.createElement('label');
  sciLabel.setAttribute('for', 'radio-2');
  sciLabel.setAttribute('name', 'radio');
  sciLabel.textContent = "Ножницы"; 

  sciLabel.addEventListener('click', () =>{
    request({
      url: `${window.application.host}/play`,
      params: {
        token: window.application.token,
        id: window.application.gameId,
        move: 'scissors',
      },
      onSuccess: (response) => {
        if(response.status === 'ok'){
          const status = response['game-status'].status;

          switch(status){

            case 'waiting-for-enemy-move':
              window.application.renderScreen('waiting-enemy');
              break;
            case  'lose':
              window.application.renderScreen('lose');
              break;
            case 'win':   
            window.application.renderScreen('win');
            break;
            default:
              console.log("Ничья, сделайте еще один ход");
              break;
          }
        }
        else{
          console.warn(response.message);
        }
      }
    })
  });
  
  container.appendChild(sciImg);
  container.appendChild(sciInput);
  container.appendChild(sciLabel);

}


function renderGameBlock_7(container){ //Бумага
  const paperImg = document.createElement('div');
  paperImg.classList.add('game_img');
  paperImg.classList.add('game_img_3');
  
  const paperInput = document.createElement('input');
  paperInput.setAttribute('type', 'radio');
  paperInput.setAttribute('name', 'radio');
  paperInput.setAttribute('id', 'radio_3');
  paperInput.setAttribute('value', '3');
  paperInput.classList.add('rating_round');
  
  const paperLabel = document.createElement('label');
  paperLabel.setAttribute('for', 'radio-3');
  paperLabel.setAttribute('name', 'radio');
  paperLabel.textContent = "Бумага"; 

  paperLabel.addEventListener('click', () =>{
    request({
      url: `${window.application.host}/play`,
      params: {
        token: window.application.token,
        id: window.application.gameId,
        move: 'paper',
      },
      onSuccess: (response) => {
        if(response.status === 'ok'){
          const status = response['game-status'].status;

          switch(status){

            case 'waiting-for-enemy-move':
              window.application.renderScreen('waiting-enemy');
              break;
            case 'lose':
              window.application.renderScreen('lose');
              break;
            case 'win':   
            window.application.renderScreen('win');
            break;
            default:
              console.log("Ничья, сделайте еще один ход");
              break;
          }
        }
        else{
          console.warn(response.message);
        }
      }
    })
  })
  
  container.appendChild(paperImg);
  container.appendChild(paperInput);
  container.appendChild(paperLabel);

}




window.application.blocks['game1'] = renderGameBlock_1;
window.application.blocks['game2'] = renderGameBlock_2;
window.application.blocks['game3'] = renderGameBlock_3;
window.application.blocks['game4'] = renderGameBlock_4;
window.application.blocks['game5'] = renderGameBlock_5;
window.application.blocks['game6'] = renderGameBlock_6;
window.application.blocks['game7'] = renderGameBlock_7;


function renderGameScreen() {
    const authDiv = document.createElement('div');
    document.querySelector('.app').appendChild(authDiv);

    window.application.renderBlock('game1', authDiv);
    window.application.renderBlock('game2', document.querySelector('.lobby'));
    window.application.renderBlock('game3', document.querySelector('.game_form-field'));
    window.application.renderBlock('game4', document.querySelector('.game_options'));
    window.application.renderBlock('game5', document.querySelectorAll('.game_radio_btn')[0]);
    window.application.renderBlock('game6', document.querySelectorAll('.game_radio_btn')[1]);
    window.application.renderBlock('game7', document.querySelectorAll('.game_radio_btn')[2]);

}

window.application.screens['game'] = renderGameScreen;