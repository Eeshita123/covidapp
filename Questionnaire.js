class Questionnaire {

constructor(){

    this.button2 = createButton('PROCEED');

}

hide(){

    this.greeting.hide();
    this.button1.hide();
    this.title3.hide();
    this.title4.hide();
    this.title5.hide();
    this.title.hide();
    this.title1.hide();
    this.title2.hide();

}

display(){

    var title3 = createElement('h1');
    title3.html("Self - Assignment Test");
    title3.position(280,150);

    var title4 = createElement('h2');
    title4.html("d1");
    title4.position(450,340);

    var title5 = createElement('h2');
    title5.html("d2");
    title5.position(450,340);

    var title6 = createElement('h2');
    title6.html("q1");
    title6.position(450,340);

    var title7 = createElement('h2');
    title7.html("q2");
    title7.position(450,340);

    var title8 = createElement('h2');
    title8.html("q3");
    title8.position(450,340);

    var title9 = createElement('h2');
    title9.html("q4");
    title9.position(450,340);

    var title10 = createElement('h2');
    title10.html("q5");
    title10.position(450,340);

    var title11 = createElement('h2');
    title11.html("q6");
    title11.position(450,340);

    var title12 = createElement('h2');
    title12.html("q7");
    title12.position(450,340);

    var title13 = createElement('h2');
    title13.html("q8");
    title13.position(450,340);

    var title14 = createElement('h2');
    title14.html("q9");
    title14.position(450,340);

    

    this.button2.position(600,825);


}



}