class thread{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var op={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:1.6,
            lenght:100
        }

        this.rope = bind.create(op);

        World.add(world,this.rope);
    }
    const(){
        var pos = this.rope.bodyA.position;
        var posp = this.rope.bodyB.position;

        push();
        stroke("white");
        strokeWeight(3);
        line(pos.x,pos.y-40,posp.x + this.offsetX,posp.y + this.offsetY);
        pop();
    }
}