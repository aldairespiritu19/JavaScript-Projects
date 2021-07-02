function Car_Function() {
    var Car_Output;
    var Cars = document.getElementById("Car_Input").value;
    var Car_String = " is a great car!";
    switch(Cars) {
        case "Ferrari":
            Car_Output = "Ferrari" + Car_String;
        break;
        case "Honda":
            Car_Output = "Honda" + Car_String;
        break;
        case "Acura":
            Car_Output = "Acura" + Car_String;
        break;
        case "Mercedes":
            Car_Output = "Mercedes" + Car_String;
        break;
        case "Audi":
            Car_Output = "Audi" + Car_String;
        break;
        default:
        Car_Output = "Please enter a car exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Car

}

function Age_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

var c = 
document.getElementById("ID_Name");
var ctx = c.getContext("2d");
ctx.moveTo(0,0);
ctx.lineTo(200,100);
ctx.stroke();

var d =
document.getElementById("my_Gradient");
var ctx = c.getContext("2d");
var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");

ctx.fillStyle = grd;
ctx.fillRect(0, 20, 150, 100);