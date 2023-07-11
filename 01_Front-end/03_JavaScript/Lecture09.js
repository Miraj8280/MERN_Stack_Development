/* ------------------------------------------------------------------
                    Objects in JavaScript - II
---------------------------------------------------------------------*/
// Nested Object
const userDetails = {
    name: {
        firstName: "Miraj",
        lastName: "Asraf"
    },
    address: {
        permanent: {
            city: "Raiganj",
            dist: "U/D",
            state: "WB"
        },
        current: {
            city: "Jalpaiguri",
            dist: "Jalpaiguri",
            state: "WB"
        }
    }
};

// console.log(userDetails.name);
// console.log(userDetails.name.firstName);
// console.log(userDetails.address.permanent);
// console.log(userDetails.address.permanent.city);
// console.log(userDetails.address.current);
// console.log(userDetails.address.current.city);

// Combining multiple objects into a single object
// 1. Object.assign() method 
const obj1 = {1: "a", 3: "b", 5: "c", 7: "d", 9: "e"};
const obj2 = {2: "f", 4: "g", 6: "h", 8: "i", 10: "j"};

const combinedObj = Object.assign({}, obj1, obj2);
// The first argument {} is the target object, followed by the source objects to be merged.
// console.log(combinedObj);

// 2. Spread operator(...) 
const combinedObj2 = {...obj1, ...obj2};
// console.log(combinedObj2);

const friend1 = {name1: "Jishu", age1: 19, city1: "Raiganj"};
const friend2 = {name2: "Gulsan", age2: 16, city2: "Hemtabad"};
const friend3 = {name3: "Miraj", age3: 21, city3: "Jalpaiguri"};

const friends = {...friend1, ...friend2, ...friend3};
// console.log(friends);



