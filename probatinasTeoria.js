function sum(num1, num2){
    return num1 + num2;
}

console.log(sum(1,2));
console.log(sum("Hola ", "mundo"));

function sum2(a, b){
    return `${a}${b}`;
}

console.log(sum2("Hola ", "mundo"));

let miArray=[1,5,6];

console.log(miArray);

console.log(typeof 1);

console.log(miArray.length);

//añade elemento
function addToArray(item){
    miArray.push(item);
}

//saca elemento
function popFromArray(){
    miArray.pop();
}

addToArray(4);
console.log(miArray);

popFromArray();
console.log(miArray);

//anidamiento estructuras
let miArray2=[1,5,6,["hello", "world"]];

function restParameters(...params){
    miArray2.push(item);
}

console.log(typeof miArray[3]);

function restParameters1(...params){
    console.log(params);
    console.log(params[1]);
    return params;
}
console.log(restParameters1(1,2,3));

for (let i=0; i<miArray2.length; i++){
    console.log(miArray2[i]);
}

let miArray3=[1,3,4,5,6,-3,-9,-4];

function contarPositivos(){
    let counter=0;
    for (let i=0; i<miArray3.length;i++){
        if (miArray3[i]>=0){
            counter++;  
        }
    }
    return counter;
}

console.log(contarPositivos());

let miArray4=[3,4,false,6,-3,-9,-4];
function valorBooleano(){
    for (let i=0; i<miArray4.length;i++){
        if (typeof miArray4[i]==="boolean"){
            return miArray4[i];
        }
    }
}

console.log(valorBooleano())


//clave: valor. Clave no se puede repetir
let diccionario = {
    clave: 1,
    clave_2: 2
};

console.log(diccionario);

//introducir valores
let diccionario2 = {};

diccionario2["clave1"]=1;
diccionario2.clave2=2;
diccionario2.clave3=3;

console.log(diccionario2);

//imprime clave
for (item in diccionario2){
    console.log(item);
}

//imprime valor
for (let key in diccionario2){
    console.log(diccionario2[key]);
}

console.log(Object.keys(diccionario2));

function getKeys (dict) {
    let aux = [];

    for (let key in dict){
        aux.push(key);
    }
    return aux;
}

console.log("MI METODO", getKeys(diccionario2))

Object.keys(diccionario2).forEach(function (item){
    console.log(diccionario2[item]);
});

Object.keys(diccionario2).forEach(item=>console.log(diccionario2))

let diccionario3=[1,2,3,4];
diccionario3.forEach(item => console.log(item*2));


let persona ={
    nombre:"Sergio",
    apellido: "Fernandez",
    direccion:{
        calle:"3",
        numero: "34"
    },
    array: [1,2,3]
}

function saludar (){
    return `Hola ${persona.nombre} ${persona.apellido}, encantado.
    Vivo en ${persona.direccion.calle}.
    Tengo un array ${persona.array[2]}`
}

console.log(saludar());

let dic = {
    nombre: "Sergio",
    apellidos: "Fernandez"
}

function contarPropiedades (dict) {
    let contador = 0;

    for (key in dict){
        contador++;
    }
    return contador;
}

console.log(contarPropiedades(persona));

let dic1={
    nombre:"Sergio"
}

let dic2={
    apellidos:"Fernandez"
}

function unirDiccionarios (dicci1, dicci2){
    let diccionarioFinal={};

    for (let key in dicci1){
        diccionarioFinal[key] = dicci1[key];
    }
    for (let key in dicci2){
        diccionarioFinal[key] = dicci2[key];
    }
    return diccionarioFinal;
}

console.log(unirDiccionarios(dic1, dic2));

//LISTAS: mantienen el orden
//DICCIONARIOS: no mantienen el orden

const play = (player1, player2) => {
    if (player1, player2){
        return "empate"
    }
}

console.log(play("piedra", "piedra"));

const play2 = (player1, player2) => {
    const rules = {piedra: "tijera", papel: "piedra", tijera: "papel"}
    if (player1 === player2){
        return "empate"
    } else if (player2 ===rules[player1]){
        return "Gana Jugador 1"
    }else {
        return "Gana Jugador 2"
    }
}

console.log(play2("papel", "tijera"));

function range1 (star, end, step){
    //parámetro por defecto
    if (step===undefined) step=1;
    let result=[];
    for (let i=star; i<=end; i+=step){
        result.push(i);
    }
    return result;
}

console.log(range1(1,8,2))

function range2 (star, end, step){
    //parámetro por defecto
    if (step===undefined) step=1; //o en el step arriba pone step=1
    let result=[];

    if(step>0){
        for (let i=star; i<=end; i+=step){
            result.push(i);
        }
    }else{
        for (let i=star; i>=end; i+=step){
            result.push(i);
        }
    }
    return result;
}

console.log(range2(10,2,-2))

let array1=[2,3,4,5];

function sumArray(array1){
    let result=0;
    for (let i=0; i<array1.length;i++){
        result += array1[i];
    }
    return result;
}

console.log(sumArray(array1));

console.log(sumArray(range2(1,5)));

function contar (arrayI){
    let diccio = {};

    for (let i=0; i<arrayI.length; i++){
        if (!diccio.hasOwnProperty(arrayI[i])){
            diccio[arrayI[i]]=0;
        }
        diccio[arrayI[i]]++;
    }
    return diccio;
}

let array23=[2,5,6,6,7,2,4]

console.log(contar(array23));

//OBJETOS
let person = {
    nombre: "Sergio",
    apellido: "Fernandez",
    getNombre: function(){
        //this hace referencia al objeto con el que trabajamos
        return `${this.nombre} ${this.apellido}`
    }
}

console.log(person.getNombre())

//Constructor: acuerdo primera mayuscula //Fabrica de objetos 
function ConstructorJavascript(){

}

function Jugador(nombre, posicion){
    this.nombre=nombre;
    this.posicion=posicion;
    this.getInfo=function(){
        return `Mi nombre es ${this.nombre} y juego de ${this.posicion}`;
    }
}

let maria = new Jugador("Maria", "volleyball");
let messi = new Jugador("Messi", "delantero");

console.log(maria.nombre);
console.log(messi);
console.log(messi.getInfo());

function Persona(nombre, apellido, direccion){
    this.nombre=nombre;
    this.apellido=apellido;
    this.direccion=direccion;

    this.getInfo=function(){
        return `Me llamo ${this.nombre} ${this.apellido} y vivo en la calle ${this.direccion}`
    }
    //se le puede pasar parametro a la funcion
    this.getDireccion = function(numero){
        return `Vivo en la calle ${this.direccion} en el numero ${numero}`
    }
}

let Ana = new Persona("Ana", "Mateo","Marqués de Paradas");

console.log(Ana.getDireccion(3))

const game = (player1, player2) => {
    let player1Game=player1.play();
    let player2Game=player2.play();

    
    if (player1Game === player2Game) return "Empate";
    var rules = {piedra: "tijera", papel: "piedra", tijera: "papel"};
    if (player2Game ===rules[player1Game]){
        return `${player1.nombre} gana`;
    }else {
        return `${player2.nombre} gana`;
    }
};


function Player(nombre){
    let actions = ["piedra", "papel", "tijera"];
    this.nombre=nombre;
    this.play=function(){
        return actions[Math.floor(Math.random() * actions.length)];
    }
}

let player1=new Player("Jugador 1");
let player2=new Player("Jugador 2");

console.log(player1.play("jug1"));

for (let i=0; i<10; i++){
    console.log(game(player1, player2))
}