function addition_function() { //Calls a function
    var addition= 15+5;
    document.getElementById("Math").innerHTML ="15 + 5 = " + addition;
}

function subtraction_function() { 
    var subtraction = 25-10;
    document.getElementById("Htam").innerHTML ="25 - 10 = " + subtraction; //Declares a variable
}

function multiplication() {
    var simple_math = 5*5;
    document.getElementById("Multi").innerHTML ="5*5 = " + simple_math;
}

function division() { //Calls a function
    var simple_division = 45/5;
    document.getElementById("sion").innerHTML ="45/5= " + simple_division; //Declares a variable
}

function more_math() { //Calls a function
    var simple_math= (5+5) * 2 / 2 - 5;
    document.getElementById("mor").innerHTML ="5+5*2/2-5= " + simple_math;
}

function modulus_operator() {
    var simple_math = 50 % 7;
    document.getElementById("rator").innerHTML ="50%7= " + simple_math; //Declares a variable
}

function negation_operator() { //Calls a function
    var z = 7;
    document.getElementById("tor").innerHTML = -z;
}

var x = 10;
x++;
document.write(x);

var y = 20;
y--;
document.write(y);

window.alert(Math.random());

function round_math() {
document.getElementById("demo").innerHTML= Math.round(5.6); //Declares a variable
}