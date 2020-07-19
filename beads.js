class Beads{
    constructor(x,y){
        ellipse(x,y,30,15);
        this.x=x;
        this.y=y;
        this.r1=30;
        this.r2=15;
    }
    display(){
        ellipseMode(RADIUS);
        fill("orangeRed")
        stroke(0)
        strokeWeight(2)
        ellipse(this.x,this.y,this.r1,this.r2)
    }
}