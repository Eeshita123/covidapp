class Welcome {

constructor(){

    this.input = createInput("");
    this.button = createButton('PROCEED');

    this.link = createA("Test.html" , "Click here to view the image");

    //this.image = loadImage("images/preventions.jpg");
    

}

hide(){

    this.title.hide();
    this.title1.hide();
    this.title2.hide();
    this.input.hide();
    this.button.hide();
    

}

    update(name){

        
        database.ref("username/user").set({

            name:name

        })

    }

display(){

    image(img2, 270,440,360,220);
    
    
    var title = createElement('h1');
    title.html("Welcome to Go Corona Go App .Login with your valid details");
    title.position(280,150);

    var title1 = createElement('h2');
    title1.html("Username");
    title1.position(450,340);

    var title2 = createElement('h2');
    title2.html("#Stay Safe #Fight Corona");
    title2.position(870,550);



    
    this.input.position(580,365);
    this.button.position(600,825);

    this.link.position(380,670);

    this.button.mousePressed(()=>{

        title.hide();
        title1.hide();
        title2.hide();
        this.input.hide();
       this.button.hide();
        this.link.hide();
        

        var name = this.input.value();

       greeting = new Greeting();
       greeting.display();

        


        
        welcome.update(name);
    
        })


}


}