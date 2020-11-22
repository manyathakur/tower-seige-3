class Ground{
    constructor(x,y,width,height){
      var Binod ={
         isStatic:true
      }
      this.lol = Bodies.rectangle(x,y,width,height,Binod);
      this.width = width;
      this.height = height;

      World.add(world,this.lol);
    }
    earth(){
      var pos = this.lol.position;

      push();
      rectMode(CENTER);
      fill("blue");
      rect(pos.x,pos.y,this.width,this.height);
      pop();
    }
}
