function Coin(initialPosition){
    this.basePosition=this.pos=initialPosition.plus(new Vector(0.2, 0.1));
    this.size=new Vector (0.6, 0.6);
    //hace que el movimiento/temblor sea random
    this.wobble=Math.PI*2*Math.random();
}

Coin.prototype.type='coin';