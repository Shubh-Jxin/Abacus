class Rod{
    constructor(x,y){
        this.body= rect(x,y,15,385)
        this.x=x;
        this.y=y;
        this.width=15;
        this.height=385
    }
    display(){
        fill(0);
        noStroke();
        rect(this.x,this.y,this.width,this.height);
    }
}