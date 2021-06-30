function Call_Loop() { //Calls a function
    var Digit = "";
    var X = 1;
    while (X < 21) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

var Colors = ["Red", "White", "Blue", "Yellow", "Green", "Black"];
var Content = "";
var C;
function for_loop() {
    for (C = 0; C < Colors.length; C++) {
        Content += Colors[C] + "<br>";
    }
    document.getElementById("List_of_Colors").innerHTML = Content; //Declares a variable
}

function array_Function() {
   var Cars = [];
   Cars[0] = "white";
   Cars[1] = "yellow";
   Cars[2] = "black";
   Cars[3] = "silver";
   document.getElementById("Array").innerHTML = "The color of the car is " + Cars[3] + ".";
}

function constant_function() { //Calls a function
    const Musical_Instrument = {type:"piano", brand:"bechstein", color:"brown"};
    Musical_Instrument.color = "black";
    Musical_Instrument.price = "$2500";
    document.getElementById("Constant").innerHTML ="The color of the " + Musical_Instrument.type + " is " + Musical_Instrument.color + " and it's price is " + Musical_Instrument.price;
}

let car = {
    make: "Acura ",
    model: "Tlx ",
    year: "2021 ",
    color: "White ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }

};
document.getElementById("Let_car").innerHTML = car.description(); //Declares a variable