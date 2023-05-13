/*------------------------------------------------------------------------
                    Data Types in JavaScript
--------------------------------------------------------------------------
    => There are two types of data types in JS
        1. Primitive 
        2. Non-primitive

        Primitive: 7 types - 1. String, 2. Number, 3. Boolean, 4. null, 5. undefined, 6. Symbol, 7. BigInt
            1. String : "Miraj Asraf"

            2. Number : Javascript numbers are always one type: double (64-bit floating point).
                        20, 36, 2.5, 7e5 (= 700000), 7e-2 (= 0.07)

                        In C++ we have many number types:
                        i) Whole numbers (integers): 
                            -> byte (8-bit)
                            -> short (16-bit)
                            -> int (32-bit)
                            -> long (64-bit)

                        ii) Real numbers (floating-point): 
                            -> float (32-bit)
                            -> double (64-bit)
                    
            3. BigInt : Used to store too big integers 
                        BigInt("123456789012345678901234567890")

            4. Boolean : true, false

    => Non-primitive(reference):
        1. Array :  [2, 4, 6, 8, 10] 
                    ["Mobarak", "Moslema", "Mehanaj", "Miraj"]
        
        2. Object : 
                    {
                        name : "Miraj",
                        roll : 36,
                        dept : CSE
                    };
        
        3. Function: 
                    funtion () {

                    }
*/


/*------------------------------------------------------------------------
                    Variables in JavaScript
--------------------------------------------------------------------------

    => Variables are containers for storing data values.

    => 4 Ways to Declare a JavaScript Variable:
        1. Using var
        2. Using let
        3. Using const
        4. Using nothing    

    => Two steps process:
                    1. Declaration (var, let, const)
                    2. Assignment (assign a value)
*/

var g; // declaration
g = 10; // assignment
/*------------------------------------------------------------------------
                        var
--------------------------------------------------------------------------
    1. It is a very old (1995 - 2015) keyword.
    2. Variables defined with var can be redeclared.
    3. Variables defined with var can be declared after use.
    4. Variables defined with var can't have block scope => Variables declared inside a { } block can be accessed from outside the block. That's why we generally don't use var as if we change one variable inside a block, that change will effect the same variable from outside of the block as it is not block scope.
*/

// ================= Redeclarable ====================
var a = 20;
var b = 30;
var sum = a + b;

var a = 30;
var b = 50;
var sum = a + b;

// console.log(sum);


// ================ Can be declared after use ============
z = 10;
u = 30;
mul = z * u;

var z;
var u;

// console.log(mul);

var mul;


// =============== Not block scope ======================
// global scope
{
    // block scope
    var two = 2;
}
// can be use here
// console.log(two);


{
    var three = 3;
}
three = "Three";
// console.log(three);



/*------------------------------------------------------------------------
                        let
--------------------------------------------------------------------------
    1. If the value of a variable can change then we use let keyword.
    2. Variables defined with let can not be redeclared.
    3. Variables defined with let must be declared before use.
    4. Variables defined with let have block scope => Variables declared inside a { } block cannot be accessed from outside the block
*/

// ================== Resuse =============================
let x = 30;
let y = 35;
let add = x + y;

// console.log( "befor: ", add );

x = 36;
y = 44;
add = x + y;

// console.log( "after: ", add );

// ================== Non-redeclarable =======================
let firstName = "Miraj";
// let firstName = "Mahir"; // this will give an error
firstName = "Mahir"; // this is correct (we can't redeclare the variable, but we can resuse the variable)


// ================ Must be declared before use ===============
d = 30;
// let d; // error (can't access d before initialization)

// console.log(d);


// ================== Block scope =============================
// global scope => global variables can be accessed from every where of the code
{
  // block scope
  let m = "Miraj";
}
// m can't be use here
// console.log(m); // error

let k = "Khusbu"; // declared at global scope
{
  // console.log(k); // can be access from block scope
}

// we can redeclare a global variable inside block scope.
let l = "love";
{
  let l = "💚💚";
//   console.log(l); // 💚💚
}
// console.log(l); // love (global variable accessed)





/*------------------------------------------------------------------------
                        const
--------------------------------------------------------------------------
    1. If the value of a variable can not be changed then we use const keyword
    2. Variables defined with const cannot be Redeclared.
    3. Variables defined with const cannot be Reassigned.
    4. Variables defined with const have Block Scope.
*/

// ================== Non-redeclarable =============================
const five = 5;
// const five = 6;// error
// console.log(five);


// ================= Non-reassignable ==============================
const six = 6;
// six = "Six"; error
// console.log(six);


// ================== Block Scope ===================================
const nine = 9;
{
    const seven = "Seven";
    // console.log(nine); // global variable can be accessed from here
}
// can't be use
// console.log(seven); // error



/*---------------------------------------------------------------------
                    Uses of variable
-----------------------------------------------------------------------*/
let fName = "Miraj";
// alert("My name is: " + fName);

// use propmt to store user's input
// let lastName = prompt("Enter your last name: ");

// use the input given by user
// alert("Your last name is: " + lastName);


/*----------------------------------------------------------------------
                    Swap two given strings
------------------------------------------------------------------------*/
let str1 = "5";
let str2 = "10";

let temp = str1;
str1 = str2;
str2 = temp;

// console.log("str1 = ", str1); // str1 = "10"
// console.log("str2 = ", str2); // str2 = "5"


/*--------------------------------------------------------------------
                    Use of console.table()
----------------------------------------------------------------------*/
const accountId = 123456;
let accountHolder = "Miraj Asraf";
var accountType = "Savings";

// console.table([accountId, accountHolder, accountType]);


/*----------------------------------------------------------------------
                    Check type of a variable
------------------------------------------------------------------------*/
let score = 35;
// console.log(typeof score);
// Or,
// console.log(typeof(score));

score = "60";
// console.log(typeof(score));

/*-----------------
    Special cases
-------------------*/
// console.log(typeof(null)); // object
// console.log(typeof(undefined)); // undefined
// console.log(typeof(NaN)); // number

let myObj = {
    name: "Miraj",
    roll: 36,
    dept: "CSE"
}
// console.log(typeof(myObj)); // object

let myName = function() {

    console.log("Miraj Asraf");
}
// myName();
// console.log(typeof(myName)); // function


/*----------------------------------------------------------------------
                    Data type Conversion
------------------------------------------------------------------------*/
// String to Number
let thirtyFive = "35";
let numThirtyFive = Number(thirtyFive);

// console.log(numThirtyFive);
// console.log(typeof(numThirtyFive));


let thirtySix = "36abcd";
let numThirtySix = Number(thirtySix);

// console.log(numThirtySix);  // NaN => Not a Number
// console.log(typeof(numThirtySix));


// Others to Number
let other1 = null;
let numOther1 = Number(other1);
// console.log(numOther1); // 0

let other2 = undefined;
let numOther2 = Number(other2);
// console.log(numOther2); // NaN

let other3 = true;
let numOther3 = Number(other3);
// console.log(numOther3); // 1


// Something to Boolean
let isTrue = 1;
let boolIsTrue = Boolean(isTrue);
// console.log(boolIsTrue); // true

let isLoggedIn = "Miraj";
let boolIsLoggedIn = Boolean(isLoggedIn);
// console.log(boolIsLoggedIn); // true

let isLoggedOut = "";
let boolIsLoggedOut = Boolean(isLoggedOut);
// console.log(boolIsLoggedOut); // false


// Something to String
let testNum = 35;
let testStr = String(testNum);
// console.log(testStr);
// console.log(typeof(testStr));

/*--------------
    Summerize
---------------*/
/*
To Number:
    1. "35" => 35
    2. "35abc" => NaN
    3. true => 1
    4. false => 0
    5. undefined => NaN
    6. null => 0

To Boolean:
    7. 1 => true
    8. 0 => false
    9. "" => false
    10. "miraj" = true

*/

/*------------------------------------------------------------------------
                        Is JavaScript dynamic language?
---------------------------------------------------------------------------*/
/*
-> Yes, JavaScript is a dynamic language. 
-> It is dynamically typed, meaning that variables do not have a fixed data type and can change their type during runtime. 
-> Additionally, JavaScript allows for dynamic memory allocation, meaning that variables can be created and destroyed on the fly as needed. 
-> JavaScript also supports other features typically associated with dynamic languages, such as higher-order functions and closures.
*/

let aboutMe = "Miraj Asraf"; // string data type
aboutMe = 36; // number data type
// console.log(aboutMe);


/*-------------------------------------------------------------------------
                        Memory - Stack and Heap
---------------------------------------------------------------------------*/
/*
    1. Stack memory used for: Primitive data types
        -> We get a copy of the original value

    2. Heap memory used for => Non-primitive data types
        -> We get the reference of the original value
*/

// Primitive data type => stored in Stack
let currentAddress = "Jalpaiguri";
let permanentAddress = currentAddress; // copy of currentAddress

// it will only change the copy of the copy of the original value
permanentAddress = "Raiganj";

// console.log(`currentAddress: ${currentAddress} \npermanentAddress: ${permanentAddress}`);
// original value will not get effected

// Non-primitive data type => stored in Heap
let userOne = {
    email: "miraj@google.com",
    id: 1234567
}

let userTwo = userOne; // reference of original value (userOne)

// to access items of an object, use dot operator
userTwo.id = 567890;

console.log(`userOne: ${userOne.id} \nuserTwo: ${userTwo.id}`);
// original value effected
// origianl value is also changed
// as userTwo directly referencing to userOne and it is not a copy of that
