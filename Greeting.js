class Greeting {

constructor(){

    this.greeting = createElement("h2");

    this.link = createA("Test1.html" , "Click here to view the image");

    this.button1 = createButton('PROCEED');


}

hide(){

    this.greeting.hide();
    this.button1.hide();

}

display(){
    

    this.greeting.html("Hello " + name + " . <p>Welcome to Go Corona Go App. </p><p> I wish that you stay safe , fit and healthy... Have a nice experience... </p><p> Enjoy your journey </p>");
    this.greeting.position(315,245); 

    this.link.position(350,680);

    this.button1.position(600,825);

    this.button1.mousePressed(()=>{

        this.greeting.hide();
        this.button1.hide();
        

       question = new Questionnaire();
       question.display();

        
    
        })


}







}