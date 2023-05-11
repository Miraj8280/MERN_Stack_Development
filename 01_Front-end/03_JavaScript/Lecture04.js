/*----------------------------------------------------------------------
                            Operators in JavaScript
------------------------------------------------------------------------
    => Arithmetic Operators
        1. Addition: +
        2. Subtraction: -
        3. Multiplication: *
        4. Exponential: **
        5. Division: /
        6. Modulus: %
        7. Increment: ++
        8. Decrement: --
        
    => Assignment Operator
    => Comparison Operators
*/

// ====================== Arithmetic Operators ========================
let forty = 40;
let thirty = 30;

let Addition = forty + thirty;
let Subtraction = forty - thirty;
let Multiplication = forty * thirty;
let Exponential = thirty ** 2;
let Modulus = forty % 3;
let Increment = forty++;
let Decrement = thirty--;

// console.log("Addition = ", Addition);
// console.log("Subtraction = ", Subtraction);
// console.log("Multiplication =", Multiplication);
// console.log("Exponential =", Exponential);
// console.log("Modulus = ", Modulus);
// console.log("Increment = ", Increment);
// console.log("Decrement = ", Decrement);


// ================== Increment & Decrement Operator ===============
// post increment
// let i = 5;
// console.log(i++); // no change (5)

// i++; 
// console.log(i); // 6

// pre increment
// console.log(++i); // 6
// ++i;
// console.log(i); // 6

// post decrement
// let j = 5;
// console.log(j--); // 5 (No changes)

// j--;
// console.log(j); // 4

// pre decrement
// console.log(--j); // 4

// --j;
// console.log(j);


/*------------------------------------------------------------------------
                Problems on Increment & Decrement operators
--------------------------------------------------------------------------*/
// Q.1) What will be the value of z ?
    let p = 5, q = 10, r;
    r = p++ + ++q; // here, p = 5, q = 11, so r = 16
    console.log(r); // 16


// Q.2) What will be the output of the following code ?
    let s = 1, t = 1, w = 1;
    console.log(++s + ++s+s++, s++ + ++t, ++w + w++ + s++);
    //           2  +  3 + 3    4 + 2      2 + 2 + 5  => 8 6 9

// Q.3) What will be the value of 
    let n1 = 10;
    let n2, n3;

    n2 = ++n1; // n2 = 11
    n3 = n1++; // n3 = 10

    n2--; // 11
    --n3; // 11
    n2 -= n3; // n2 = n2 - n3 => 11 - 11 = 0

    console.log(n2); // 0


// Q.4) What will be the output of the following program ?
    let m1 = 3;
    // console.log((++m1)++); // compilation error


/*------------------------------------------------------------------
                Swap two numbers without using extra variable
------------------------------------------------------------------*/
    let x = 20;
    let y = 30;

    x = x + y; // 20 + 30 = 50
    y = x - y; // 50 - 30 = 20
    x = x - y; // 50 - 20 = 30

    console.log(`x: ${x}, y: ${y}`);


/*-----------------------------------------------------------------
                       = vs == vs ===
------------------------------------------------------------------
    1. "=" is used for assigning values to a variable. => Assignment Operator

    2.  "==" is used for comparing two variables, but it ignores the datatype of the variables.
            => Returns true/fale
            => Comparison operator

    3. "===" is used for comparing two variables, but it also checks the datatype of the variables. 
        => Returns true/false
        => Comparison operator
*/

// Assignment operator
let p1 = 20;
let p2 = "20";
 
// Comparison operator (==)
console.log(p1 == p2); // true (checks only the values, not the datatype)

// // Comparison operator (===)
console.log(p1 === p2); // false (checks the values as well as the datatypes also)

/*----------------------------------------------------------------------
                            Some Special Cases
-----------------------------------------------------------------------*/
// console.log("Some special cases for null : ");
// console.log(null > 0); // false
// console.log(null < 0); // false
// console.log(null >= 0); // true
// console.log(null <= 0); // true
// console.log(null == 0); // false
// console.log(null === 0); // false

// console.log("Some special cases for undefined : ");
// console.log(undefined > 0); // false
// console.log(undefined < 0); // false
// console.log(undefined >= 0); // false
// console.log(undefined <= 0); // false
// console.log(undefined == 0); // false
// console.log(undefined === 0); // false

// console.log("Some special cases for NaN : ");
// console.log(NaN > 0); // false
// console.log(NaN < 0); // false
// console.log(NaN >= 0); // false
// console.log(NaN <= 0); // false
// console.log(NaN == 0); // false
// console.log(NaN === 0); // false


/*-----------------------------------------------------------------------
                        Conversion in Operators
-------------------------------------------------------------------------*/
// console.log(1 + 2); // 3
// console.log("1" + 2); // 12 (String concatenation)
// console.log(1 + "2"); // 12 (String concatenation)
// console.log("1" + "2"); // 12 (String concatenation)
// console.log("1" + 2 + 3); // 123 (String concatenation)
// console.log(1 + 2 + "3"); // 33 (first two values added and then concatenated)
// console.log("1" + 2 + "3"); // 123 (String concatenation)
// console.log(1 + "2" + 3); // 123 (String concatenation)