/*------------------------------------------------------------------------
                    Strings in JavaScript
--------------------------------------------------------------------------
    1. Multi-line string => ``

    2. Length of a string => length

    3. Extract string part => 
        i) slice(start, end): extracts a part of a string and returns the extracted part in a new string and end not included
        ii) substring(start, end): similar to slice()
        iii) substr(start, length): similar to slice(), but the second parameter 'length' specifies the length of the extracted part

    4. Replace the string content => replace(part1, part2) method replaces part1 with part2 in a string

    5. Convert to Upper and Lower case => 
        i) toUpperCase()
        ii) toLowerCase()

    6. Remove white spaces => trim() method removes whitespace from both sides of a string, but not removes the in b/w whitespaces.

    7. Extract characters from string => charAt() method returns the character at a specified index (position) in a string.
*/

// ======================== Multi-line string =================
let singleLine = "This is single line string";

/* 
let multiLine = "This is
multi-line string"; // this will give error
*/

let multiLine = `This is 
a multi-line 
string`;

// console.log(singleLine);
// console.log(multiLine);


// ======================== length ============================
let myFirstName = "Miraj";
// console.log(myName.length);

let len = myFirstName.length;
// console.log(len);


// ======================= slice(start, end) ==================
let fruit = "Banana";
// console.log(fruit.slice(0, 2)); // Ba ( char at index 2 will not be considered )

let subFruit = fruit.slice(0, 3);
// console.log(subFruit); // Ban

// if we don't give the second parameter which is 'end' index, then it will slice out the rest of the string
let homeTown = "Raiganj";
// console.log(homeTown.slice(3)); // ganj

// substring(start, end) is similar to slice(start, end)


// ====================== substr(start, length) ===================
let collegeTown = "Jalpaiguri";
// console.log(collegeTown.substr(0, 3));  // guri (3 is length of the part)

let browser = "Chrome";
let subBrowser = browser.substr(2); 
// console.log(subBrowser); // rome (prints the rest of the string)


// ===================== replace() ===============================
let college = "Jalpaiguri Government Engineering College";
let modifiedCollege = college.replace("Engineering", "Theory");
// console.log(modifiedCollege); // returns the whole string by replacing the particular word.


// ==================== toUpperCase() ============================
let Intro = "My name is Miraj Asraf";
// console.log(Intro.toUpperCase()); // MY NAME IS MIRAJ ASRAF

let Input = "I am from Raiganj";
let Output = Input.toUpperCase();
// console.log(Output); // I AM FROM RAIGANJ


// ==================== toLowerCase() ============================
let Gmail = "MirajAsraf786@Gmail.com";
let correctedGmail = Gmail.toLowerCase();
// console.log(correctedGmail);


// ==================== trim() ==================================
let department = "     Computer Science & Engineeering  ";
// console.log(department); // without trim

// console.log(department.trim()); // using trim


// ===================== charAt() ===============================
let mother = "Moslema Khatun";
// console.log(mother.charAt(0));
// console.log(mother.charAt(2));
