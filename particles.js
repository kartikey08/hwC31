class Particles {
    constructor(x,y){
        var options={
            restitution: 0.7,
            density: 1.2,
            friction: 0.5,
            isStatic: false
        }
        this.body=Bodies.circle(x,y,10,options);
        this.x =x;
        this.y =y;
        this.color=color(random(0,255), random(0,255), random(0,255));
        World.add(world, this.body);
    }

    display(){
        var lpos= this.body.position;
        fill(this.color);
        ellipseMode(CENTER);
        ellipse(lpos.x, lpos.y, 19);
    }
}