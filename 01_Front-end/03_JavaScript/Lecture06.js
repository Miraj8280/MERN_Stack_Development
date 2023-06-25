/*---------------------------------------------------------
                    Numbers and Maths in JS
-----------------------------------------------------------*/

                    /*======== Number() method ======*/

let balance = 500;
// console.log(balance); // 500

const balance2 = new Number(50);
// console.log(balance2); // [Number: 50]

/* 
    @ The Number() method converts a value to a number.
    @ If the value cannot be converted, NaN is returned.
*/
// Boolean to Number
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0

// String to Number
// console.log(Number("500")); // 500
const fiveThousand = "5000";
const numFiveThousand = Number(fiveThousand);
// console.log(numFiveThousand); // 5000
// console.log(typeof(numFiveThousand)); // number

const yourName = "Mahir";
// console.log(Number(yourName)); // NaN


                /* ======== toFixed() method ======== */
balance = 2000.3452;
// console.log(balance.toFixed(2)); // 2000.35


                /* ======= toLocalString() method ==== */
const oneMillion = 1000000;
// console.log(oneMillion.toLocaleString()); // 10,00,00

                /* ======= Maths === */
// console.log(Math.abs(-10)); // 10
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.4)); // 4
// console.log(Math.ceil(4.1)); // 5
// console.log(Math.ceil(4.9)); // 5
// console.log(Math.floor(4.1)); // 4
// console.log(Math.floor(4.9)); // 4

// console.log(Math.random()); // gives a random value b/w (0 to 1)
// console.log(Math.random() * 10); // now it will give a random value b/w (0 to 10)
// console.log(Math.floor((Math.random() * 10) + 1)); // 1 to 10 (Natural Numbers)

/* 
    For a Ludo game, the outcomes of dice lies b/w 1 to 6. Now make a Ludo game which give a random outcome.
*/
const min = 1;
const max = 6;
const outcomes = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(outcomes); // 1 to 6


