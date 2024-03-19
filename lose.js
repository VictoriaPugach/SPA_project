function renderWinBlock_1(container){
    const gameTop = document.createElement('div');
    gameTop.classList.add('lobby_top');

    const winTitle = document.createElement('h1');
    winTitle.textContent = "Игра";
    winTitle.classList.add('center');
    winTitle.classList.add('title');
    winTitle.classList.add('result_title');
    
    //const winSubtitle = document.createElement('h3');
    //winSubtitle.textContent = "Вы против СердцеКамень";
    //winSubtitle.classList.add('center');
    //winSubtitle.classList.add('subtitle');
    //winSubtitle.classList.add('result_subtitle');
  
    const winBlock1 = document.createElement('div');
    winBlock1.classList.add('result');
    winBlock1.classList.add('center');
  
    
    container.appendChild(gameTop);
    container.appendChild(winTitle);
    //container.appendChild(winSubtitle);
    container.appendChild(winBlock1);
}

function renderWinBlock_2(container){
    const winImg = document.createElement('div');
    winImg.classList.add('heart-img');
    winImg.classList.add('heart-img_2');
    
    const winSubtitle2 = document.createElement('h3');
    winSubtitle2.textContent = "Вы проиграли!";
    winSubtitle2.classList.add('subtitle');
    winSubtitle2.classList.add('result_subtitle2');
  
    const winBlock2 = document.createElement('div');
    winBlock2.classList.add('result_form-field');  
    
    container.appendChild(winImg);
    container.appendChild(winSubtitle2);
    container.appendChild(winBlock2);
}

function renderWinBlock_3(container){
    const winBlock3 = document.createElement('div');
    winBlock3.classList.add('result_options');
    
    container.appendChild(winBlock3);
}

function renderWinBlock_4(container){
    const winMoreBtn = document.createElement('div');
    winMoreBtn.classList.add('result_radio_btn');
  
    const winLobbyBtn = document.createElement('div');
    winLobbyBtn.classList.add('result_radio_btn');  
    
    container.appendChild(winMoreBtn);
    container.appendChild(winLobbyBtn);

}

function renderWinBlock_5(container){
    const btnContainer = document.createElement('div');
    btnContainer.classList.add('btn_container');
    
    container.appendChild(btnContainer);
}


function renderWinBlock_6(container){
    const lobbyBtn2 = document.createElement('button');
    lobbyBtn2.textContent ="В лобби";
    lobbyBtn2.classList.add('button');
    lobbyBtn2.classList.add('lobby_form_button');

    lobbyBtn2.addEventListener('click', () =>{
      window.application.renderScreen('lobby');
    })
    
    container.appendChild(lobbyBtn2);
}

  
window.application.blocks['lose1'] = renderWinBlock_1;
window.application.blocks['lose2'] = renderWinBlock_2;
window.application.blocks['lose3'] = renderWinBlock_3;
window.application.blocks['lose4'] = renderWinBlock_4;
window.application.blocks['lose5'] = renderWinBlock_5;
window.application.blocks['lose6'] = renderWinBlock_6;


function renderLoseScreen() {
    const authDiv = document.createElement('div');
    document.querySelector('.app').appendChild(authDiv);

    window.application.renderBlock('lose1', authDiv);
    window.application.renderBlock('lose2', document.querySelector('.result'));
    window.application.renderBlock('lose3', document.querySelector('.result_form-field'));
    window.application.renderBlock('lose4', document.querySelector('.result_options'));
    window.application.renderBlock('lose5', document.querySelectorAll('.result_radio_btn')[0]);
    window.application.renderBlock('lose6', document.querySelectorAll('.result_radio_btn')[1]);
    window.application.renderBlock('to_play_button', document.querySelector('.btn_container'));
}

window.application.screens['lose'] = renderLoseScreen;