function setup() {
  createCanvas(1085,985);

}

function draw() {
  background(100,255,255);  
  createBoard()
}
function createBoard(){
  for(var col=0;col<12;col++){
    for(var row=0;row<12;row++){
      strokeWeight(2)
      fill("yellow")
      rect(col*90,row*80,90,100)
    }
  }
}                            