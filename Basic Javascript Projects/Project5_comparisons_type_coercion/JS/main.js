document.write("20"+10);
document.write(typeof 3);
document.write(typeof "word");
function my_function() { //Calling a function
    document.getElementById("test").innerHTML = 0/0;
    document.getElementById("test2").innerHTML = isNaN('This is true');
    document.getElementById("test3").innerHTML = isNaN('19');
}

document.write(5E555);
document.write(-5E555);

document.write(10>1); 
document.write(17<11); 

console.log(7+7);
console.log(21>23);

document.write(9==9);
document.write(11==7);

A= 1; //Gave A the value of 1
B= 1;
document.write(A===B);
C= 2;
D="3";
document.write(C===D);
E= 5; //Gave E the value of 5
F="5";
document.write(E===F);
G= 9;
H= 8;
document.write(G===H);

document.write(10>3 && 15<25);
document.write(17>21 && 11>9);

document.write(33>10 || 55>44);
document.write(16>19 || 19>23);

function not_function() { //Calling a function
    document.getElementById("Ton").innerHTML = !(22>24);
    document.getElementById("Not").innerHTML = !(10>5); //Declares a variable
}