const SCALE = 20;

function createElement(type, className){
    let element = document.createElement(type);
    // = que (className!==undefined)
    if (className) element.className=className
    return element
}

function DOMDisplay (parent, level){
            //el body                           //wrap para el juego
    this.wrap=parent.appendChild(createElement('div', 'game'));
    this.level=level;

    //this.wrap.appendChild();
    this.drawBackgroun = function (){
        let table = createElement('table', 'background');
        table.style.width = this.level.width * SCALE + 'px';
    }
}