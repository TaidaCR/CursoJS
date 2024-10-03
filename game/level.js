const ACTORS = {
    'o': Coin
};

//constructor
//permite crear niveles y metodos para trabajar con ellos
function Level (plan){
    this.width = plan[0].length;
    this.height = plan.length;

    //cuando creemos un nivel aquí se almacena la base y la lava...
    this.grid=[];
    //...y aquí se almacena las monedas, jugadores, lavas que se mueven
    this.actors=[];

    for(let y=0; y<this.height; y++){
        let line = plan[y];
        let gridLine = [];
        for (let x=0; x<this.width; x++){
            let character = line[x];
            let characterType=null;

            let actor = ACTORS[character];
            if (actor) this.actors.push(new actor(new Vector(x,y),character));
            if (character==='x') characterType ='wall';
            else if (character=== '!') characterType='lava';
            //else if (character==='o') characterType='coin';

            gridLine.push(characterType);
        }
        this.grid.push(gridLine);
    }

    console.log(this.grid);
}