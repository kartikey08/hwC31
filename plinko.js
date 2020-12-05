class Plinko {
    constructor(x,y){
        var options={
            restitution: 0.7,
            density: 1.2,
            friction: 0.5,
            isStatic: true
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x =x;
        this.y =y;
        World.add(world, this.body);
    }

    display(){
        var lpos= this.body.position;
        fill("white");
        ellipseMode(CENTER);
        ellipse(lpos.x, lpos.y, 19);
    }
}