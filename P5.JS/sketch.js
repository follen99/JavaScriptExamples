

function setup() {
  createCanvas(400, 400);     //risoluzione in pixel del canvas
  
  textSize(width/4);          //grandezza testo
  textAlign(CENTER,CENTER);   //il punto di ancoraggio del testo è il centro del testo e non l'inizio
}

function draw() {
  background(220);
  let time = millis();

  //rotateX(time/1000);
  //rotateZ(time/1234);
  text('Folly',width/2,height/2);

}
