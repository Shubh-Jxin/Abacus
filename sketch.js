var rods=[];
var beads=[];
var bead1,bead2


function setup(){
    createCanvas(1450,800);
    frame1= new Frame(width/2,150,width/2+600,30);
    frame2= new Frame(50,335,30,height/2);
    frame3= new Frame(1400,335,30,height/2);
    frame4= new Frame(width/2,535,width/2+655,30);
    frame5= new Frame(width/2,250,width/2+600,30)

    for(var i=150; i<=1320; i=i+95){
        rod= new Rod(i,140)
        rods.push(rod)
    }
    //console.log(rods.length)
    spawnBeads();

    //frame1.mousePressed(change)
    
}
function draw(){
    background("dimGray")
    //console.log(mouseX,mouseY);

    for(var k=0;k<rods.length;k++){
        rods[k].display();
    }
    for(var s=0;s<beads.length;s++){
        beads[s].display();
    }
    
    frame1.display();
    frame2.display();
    frame3.display();
    frame4.display();
    frame5.display();

    for(var x=155;x<=1350;x=x+285){
        fill(255)
        ellipseMode(RADIUS); 
        ellipse(x,250,10,10)
        }

    if(mouseIsPressed){
       bead1.y=bead1.y+20
    }

}


function spawnBeads(){
    for(var a=155; a<=1300;a=a+95){
        for(var b=505;b>=410;b=b-30){
            bead1= new Beads(a,180)
            beads.push(bead1)
            bead2= new Beads(a,b)
            beads.push(bead2);
        }
   }   
        
}
