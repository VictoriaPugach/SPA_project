/*1 Функция - шаблонизатор
Нужна для создания в документе нужных полей(тегов) 
в соответствии с той информацией, 
которую мы добавим в объект - карточку
*/

function templateEngine(block) {
    if (block === undefined || block === null || block === false) {
        return document.createTextNode('');
    }
    if (typeof block === 'string' || typeof block === 'number' || block === true) {
        return document.createTextNode(block);
    }
    if (Array.isArray(block)) {
        const fragment = document.createDocumentFragment();
  
        block.forEach(element => {
            fragment.appendChild(templateEngine(element));
        });
  
        return fragment;
    }
  
    const result = document.createElement(block.tag);
  
    if (block.cls) {
        const classes = [].concat(block.cls);
        classes.forEach(cls => {
            result.classList.add(cls);
        });
    }
  
    if (block.attrs) {
        const keys = Object.keys(block.attrs);
  
        keys.forEach(key => {
            result.setAttribute(key, block.attrs[key]);
        });
    }
  
    result.appendChild(templateEngine(block.content));
  
    return result;
  }

  /*2 Функция - для создания объекта-карточки 
каждого отдельного продукта*/
function beerEngineTemplate (beer){
  return{
    tag: 'div',
    cls: 'players_card',
    content:[{
      tag: 'h3',
      cls: 'players_name',
      content: "name",
    }]
    };
}
  