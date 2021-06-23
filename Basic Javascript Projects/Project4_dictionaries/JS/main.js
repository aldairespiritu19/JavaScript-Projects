function my_Dictionary() { //Calling a function
    var car= {
        color:"black",
        make:"acura",
        model:"ilx",
        odometer:"23,000",
        year:"2019"
    };
    delete car.make;
    document.getElementById("Dictionary").innerHTML= car.make; //Declares a variable
    
}