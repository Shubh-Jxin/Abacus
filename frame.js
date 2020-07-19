class Frame{
    constructor(x,y,w,h){
        this.body= rect(x,y,w,h);
        this.x=x;
        this.y=y;
        this.width=w;
        this.height=h;
        this.image= loadImage("wood.png");

    }
    display(){
        imageMode(CENTER);
        fill(255);  
        noStroke();
        image(this.image,this.x,this.y,this.width,this.height);
    }
}