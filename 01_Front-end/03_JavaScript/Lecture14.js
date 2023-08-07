/* -----------------------------------------------------
            Higher Order Loops
--------------------------------------------------------*/

/* ======== forof loop =========== */
// Array
const nums = [10, 30, 50, 20, 40];
for(const num of nums) {
    // console.log(num);
}

const heros = ["Capt. America", "Iron Man", "Spider Man"];
for(const hero of heros) {
    // console.log(hero);
}

// Map
const map = new Map();
// add name and roll as a key-value pair
map.set("Miraj", 36);
map.set("Khusbu", 96);
map.set("Mahir", 1);

// console.log(map);
for(const [key, value] of map) {
    // console.log(key);
    // console.log(value);
    // console.log(key + " : " + value);
}

// Object
const languages = {
    cpp: "C++",
    java: "Java",
    py: "Python"
};
/* we can't iterate an object using forof loop */
// for(const language of languages) {
//     // console.log(language);
// }


/* ======== forin loop ===========*/
// Object
for(const language in languages) {
    // it will print only keys
    // console.log(language);

    // prints values
    // console.log(languages[language]);

    // console.log(language + " : " + languages[language]);
}

// Array
for (const hero in heros) {
    // it prints indices
    // console.log(hero);

    // prints the elements
    // console.log(heros[hero]);
}

// Map
// for (const key in map) {
//     console.log(key);
// }
// we can't iterate map using forin loop

/* =========== forEach loop ========= */
// Array
// heros.forEach( (hero) => console.log(hero));
heros.forEach( (hero) => {
    // console.log(hero);
})

nums.forEach( (num) => {
    // console.log(num);
})

// pass reference of a function to print elements
function print(item) {
    console.log(item);
}
// nums.forEach(print);
// heros.forEach(print);

// pass multiple parameters in forEach loop
// passing value, index and array
heros.forEach( (hero, index, heros) => {
    // console.log(hero, index, heros);
})


// Array of Objects
const programmingLanguages = [
    {
        languageName: "JavaScript",
        extention: "js"
    },
    {
        languageName: "C++",
        extention: "cpp"
    },
    {
        languageName: "Java",
        extention: "java"
    }
];

programmingLanguages.forEach( (item) => {
    // using dot operator, we can get value
    // console.log(item.languageName);
    // console.log(item.extention);
    console.log(item.languageName + " : " + item.extention);
})

// forEach loop only prints elements, it do not returns anything.
