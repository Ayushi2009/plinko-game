class Particle{
constructor(x,y,r){ 

var options={

    restitution:0.4,


}
this.r=r
this.body=Bodies.circle(x,y,r,options)
this.color=color(random(0,255),random(0, 0,255),random(0,255,255),random(255,215,0))
World.add(world,this.body)

}

display(){
    push();
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke()
    fill(this.color)
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop()
}
















}