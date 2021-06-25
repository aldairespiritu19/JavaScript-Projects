var x = 20;
function Add_numbers_1() { //Calls a function
    document.write(5 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 50);
}
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 20;
    document.write(5 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 25);
    }
Add_numbers_1();
Add_numbers_2();

function Add_numbers_1() {
    var X = 20;
    console.log(10 + X);
}
function Add_numbers_2() {
    console.log(X + 15);
}
Add_numbers_1();
Add_numbers_2();

function my_Date() {
    if (new Date().getHours() < 18) { 
    document.getElementById("Date_hours").innerHTML = "How are you doing?";
    }
}

function Age_Function() { //Calls a function
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote; //Declares a variable
}

function Time_function() { //Calls a function
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply; //Declares a variable
}