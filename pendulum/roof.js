class roof{
    constructor(){
        var rest ={
            isStatic:true,
            density:0.4
        }
        this.body = Bodies.rectangle(310,100,400,30,rest);

        World.add(world,this.body);
    }
    dest(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("red");
        rect(0,0,400,30);
        pop();
    }
}