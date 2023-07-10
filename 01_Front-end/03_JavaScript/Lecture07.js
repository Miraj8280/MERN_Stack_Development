/*--------------------------------------------------
                Date and Time in JS
----------------------------------------------------*/
        
            /* --- 1. CREATING DATE OBJECT --- */

// Date object with the current date and time
const currentDate = new Date();
// console.log(currentDate); // 2023-06-25T05:49:33.438Z - Not a readable format 


            /* --- 2. GET CURRENT DATE AND TIME --- */

const dateObj = new Date();

const year = dateObj.getFullYear();
// console.log(year); // 2023

const month = dateObj.getMonth(); // 0-based indexing (0 - 11)
// console.log(month); // 5 (June)

const day = dateObj.getDate();
// console.log(day); // 25

const hour = dateObj.getHours();
// console.log(hour); // 11

const minute = dateObj.getMinutes();
// console.log(minute); // 28

const second = dateObj.getSeconds();
// console.log(second); // 20


            /* --- 3. FORMATTING DATES AND TIMES --- */

const dateString = dateObj.toDateString();
// console.log(dateString); // Sun Jun 25 2023

const timeString = dateObj.toTimeString();
// console.log(timeString); // 11:49:52 GMT+0530 (India Standard Time)

const localDate = dateObj.toLocaleDateString();
// console.log(localDate); // 6/25/2023

const localTime = dateObj.toLocaleTimeString();
// console.log(localTime); // 11:56:38 AM

const dateTimeString = dateObj.toLocaleString();
// console.log(dateTimeString); // 6/25/2023, 11:52:28 AM


            /* --- 4. FORMAT DATE AND TIME COMPONENTS MANUALLY --- */

// Date and time in YY-MM-DD HH:MM:SS format
const formatedDateTime = `${year}-${month + 1}-${day} ${hour}:${minute}:${second}`;
// console.log(formatedDateTime); // 2023-6-25 12:7:14

// Date in DD-MM-YY format
const dateFormat = `${day}-${month + 1}-${year}`;
// console.log(dateFormat); // 25-6-2023

// Time in HH:MM:SS format
const timeFormat = `${hour}:${minute}:${second}`;
// console.log(timeFormat); // 12:11:13




