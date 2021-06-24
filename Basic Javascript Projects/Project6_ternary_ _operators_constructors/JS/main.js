function Ride_Function() { //Calls a function
    var Height, Can_ride;
    Height= document.getElementById("Height").value;
    Can_ride= (Height<52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML= Can_ride + " to ride."; //Declares a variable
}

function New_Keyword() {
    document.getElementById("New_and_This").innerHTML = !(66>24); //Declares a variable
}

function count_Function() { //Calls a function
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 3;
        function Plus_one() {Starting_point += 2;}
        Plus_one(); //This is the nested function
        return Starting_point;
    }
    
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Dan = new Vehicle("Honda", "Accord", 2021, "Silver");
var Ben = new Vehicle("Acura", "Tlx", 2020, "White");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Dan drives a " + Dan.Vehicle_Color + "-colored " + Dan.Vehicle_Model + " manufactured in " + Dan.Vehicle_Year;
}