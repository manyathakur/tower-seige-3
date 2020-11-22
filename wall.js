class wall{
    constructor(x,y,width){
       var  Liam={
           restitution:0.5,
           frictiion:20
       }
       this.wall = Bodies.rectangle(x,y,width,30,Liam);
       this.w = width;

       this.load = loadImage("square.png");

       this.visibilty =255;

       World.add(world,this.wall);
    }
    block(){
        var pos = this.wall.position;
        var angle = this.wall.angle;
        
        if(this.wall.speed<4){
        push();
        rotate(angle);
        imageMode(CENTER);
        fill("red");
        image(this.load,pos.x,pos.y,this.w,30);
        pop();
        }
        else{
            World.remove(world,this.wall);
            push();
            tint(255,this.visibilty);
            this.visibilty -= 5;
            image(this.load,pos.x,pos.y,this.w,30);
            pop();
            }
        }
    count(){
        if(this.visibilty < 0 && this.visibilty >-20){
            score ++;
        }
    }
}
