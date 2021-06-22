function My_First_Function() { //Giving the function a name
    var str="This text is blue!";
    var result= str.fontcolor("blue"); //I am making the text color blue
    document.getElementById("Blue_Text").innerHTML= result;
}

function myFunction() {
    var sentence="I want to go"; //One of the strings
    sentence +=" to the park! "; //Another string
    document.getElementById("Concatenate").innerHTML = sentence; 
}