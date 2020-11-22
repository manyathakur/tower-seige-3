class stone{
    constructor(x,y){
        var prop={
            restitution:0.3,
            friction:0.4
        }
        this.rock = Bodies.circle(x,y,10,prop);
        World.add(world,this.rock);
    }
    show(){
        var pos = this.rock.position;
        var angle = this.rock.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill("green");
        ellipse(0,0,30);
        pop();
    }
}