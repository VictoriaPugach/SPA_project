window.application = {
    blocks: {},
    screens: {},
    timers: [],
    host: 'https://skypro-rock-scissors-paper.herokuapp.com',
     
    renderScreen: function(screenName) {
        
        window.application.timers.forEach(id => {
            clearInterval(id);
        });

        if (window.application.screens[screenName]) {
            document.querySelector('.app').innerHTML = '';
            window.application.screens[screenName]();
        }
        else{
            console.warn(`"Экрана" ${screenName} не существует!`)
        }
    },

    renderBlock: function(blockName, container) {
        if(window.application.blocks[blockName]){
            if (container) {
                window.application.blocks[blockName](container);
            }
            else{
                console.warn(`Не найден контейнер ${container}.`);
            }
        }
        else{
            console.warn(`Блока ${blockName} не существует!`)
        }
    },
}
