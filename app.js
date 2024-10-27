let x = 300;
let y= 100;
let a = 3;

// Addition
let sum = x + y;
document.getElementById("sum").innerHTML += sum;

// subtraction
let subtract = x-y;
document.getElementById("subtract").innerHTML +=subtract;

// multiplication
let multiply = x * y;
document.getElementById("multiply").innerHTML += multiply;

// division
let divide = x/y;
document.getElementById("divide").innerHTML += divide;

// Exponentiation
let exponent = x**a;
document.getElementById("exponent").innerHTML += exponent;

// modulus (reminder)
let modulus = y % a;
document.getElementById("modulus").innerHTML += modulus;
// increment
let increment = x++
document.getElementById("increment").innerHTML += increment ;

// decrement
let decrement = y--
document.getElementById("decrement").innerHTML += decrement ;



// assignment operators
let num1= 9;
let num2= 6;


// assignment = 
let assign = num1=num2;
document.getElementById("assign").innerHTML += assign;

// plusequalTo
num1 += num2;
document.getElementById("plus-equal-to").innerHTML += num1 ;

// minusequalTo
num1 -= num2;
document.getElementById("minus-equal-to").innerHTML += num1 ;

// multiplyequalTo
num1 *= num2;
document.getElementById("multiply-equal-to").innerHTML += num1 ;

// divideequalTo
num1 /= num2;
document.getElementById("divide-equal-to").innerHTML += num1 ;

// modulusequalTo
num1 %= num2;
document.getElementById("modulus-equal-to").innerHTML += num1 ;

// exponentequalTo
num1 **= num2;
document.getElementById("exponent-equal-to").innerHTML += num1 ;


// Comparison Operators
let num3 = 10;
let num4 = 5;

// equal to ==
let result = (num3 == num4) ;
document.getElementById("equal-to").innerHTML += result;

// equal to val ===
result = (num3 === num4);
document.getElementById("equal-val").innerHTML += result;

// not equal !=
result = (num3 != num4);
document.getElementById("not-equal").innerHTML += result;

// not equal val !==
result = (num3 !== num4);
document.getElementById("not-equal-val").innerHTML += result;

// greater than >
result = (num3 > num4);
document.getElementById("greater-than").innerHTML += result;

// less than <
result = (num3 < num4);
document.getElementById("less-than").innerHTML += result ;

// >=
result = (num3 >= num4);
document.getElementById("greater-equal").innerHTML += result ;

// <=
result = (num3 <= num4);
document.getElementById("less-equal").innerHTML += result ;


// logical operators
let val1 = 15;
let val2 = 7;

// logical And &&
 result = (val1 < 20 && val2 > 3);
 document.getElementById("l-and").innerHTML += result;

// logical or ||
result = (val1 < 20 || val2 > 8);
document.getElementById("l-or").innerHTML += result;

// logical not
let check = !(val1 == val2);
document.getElementById("l-not").innerHTML += check;





