class cradle{
    constructor(x){
       var rest={
        frictionAir:0.00,
        friction:0.4,
        density:10
       }
       this.newton = Bodies.circle(x,370,40);

       World.add(world,this.newton);
    }
    show(){
        var pos = this.newton.position;
        
        push();
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,40,40);
        pop();
    }
}