var welcome;

var greeting;

var database;

var question;

function preload(){

  img = loadImage("images/Logo.jpeg");

  img2 = loadImage("images/preventions.jpg") 

}

function setup() {
  createCanvas(1350,900);

  database = firebase.database();

  

  img.loadPixels();
  

  welcome = new Welcome();
welcome.display();




}

function draw() {
  background(0,255,0);  

  

  image(img, 38, 42, 160, 160);
  
  //image(img2, 270 , 440 , 360 , 220 );

  //textSize(40);

 //text(mouseX+","+mouseY,mouseX,mouseY);

 

}