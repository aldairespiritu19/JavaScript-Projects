function my_Tacnoc() {
    var part_1 = "I am ";
    var part_2 = "the best ";
    var part_3 = "fifa player!";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("Tacnoc").innerHTML = whole_sentence //Declares a variable
}

function slice_Method() { //Calls a function
    var Sentence ="I had a really long day.";
    var Section = Sentence.slice(7, 14);
    document.getElementById("Ice").innerHTML = Section;
}

function string_Method() {
    var X =199;
    document.getElementById("Numbers_string").innerHTML = X.toString(); //Declares a variable
}

function precision_Method() { //Calls a function
    var Z =344556.657986875644992;
    document.getElementById("Precision").innerHTML = Z.toPrecision(10);
}