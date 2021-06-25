var hr, mn, sc;

function setup() {
  //Calculation time using predifined func from p5.js
  createCanvas(800,400);


  angleMode(DEGREES);
  
}

function draw() {
  background(0,0,0);  
  translate(200,200);
  rotate(-90);
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12 , 0, 360);

  //drawing second hand  
  push();  
  rotate(scAngle); //rotate the hand based on angle calculated
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,30,0);
  pop();

  //drawing minute hand
  push();
  rotate(mnAngle);
  stroke(0,255,0);
  strokeWeight(7);
  line(0,0, 40, 40);
  pop();

  //drawing hour hand
  push();
  rotate(hrAngle);
  stroke(0,0,255);
  strokeWeight(7);
  line(0,0,50,50);
  pop();

  //drawing the arcs
  stroke(255,0,255);
  point(0,0);

  
  strokeWeight(10);
  //seconds
  stroke(255,0,0);
  noFill();
  arc (0,0,320,320,0,scAngle);

  //minute
  stroke(0,255,0);
  noFill();
  arc (0,0,300,300,0,mnAngle);

  //hour
  stroke(0,0,255);
  noFill();
  arc (0,0,280,280,0,hrAngle);


  drawSprites();
}