const SCALE = 20;

function createElement(type, className){
    let element = document.createElement(type);
    // = que (className!==undefined)
    if (className) element.className=className
    return element
}

//constructor
function DOMDisplay (parent, level){
                                                //cogido en CSS
            //el body                           //wrap para el juego
    this.wrap=parent.appendChild(createElement('div', 'game'));
    //contiene info del nivel
    this.level=level;

    this.wrap.appendChild(this.drawBackground());
}


DOMDisplay.prototype.drawBackground = function (){
                                        //cogido en CSS
     let table = createElement('table', 'background');
     //style permite acceder a diferentes elementos del estilo y modificarlos
     table.style.width = this.level.width * SCALE + 'px';

     this.level.grid.forEach(row =>{
         let rowElement = createElement('tr');
         rowElement.style.height=SCALE+ 'px';
         table.appendChild(rowElement);
         row.forEach(type => rowElement.appendChild(createElement('td',type)))
     })

     return table;
}