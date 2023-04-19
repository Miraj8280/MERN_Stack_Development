/*---------------------------------------------------------------------
                      Arrays in JavaScript  
-----------------------------------------------------------------------
=> Create an Array - there are three methods
=> Array methods
        1. length => returns the length of the array (no. of array elements)

        2. push() => Adds one or more elements to the end of an array and returns the new length of the array.

        3. pop() => Removes the last element from an array and returns that element.

        4. shift() => Removes the first element from an array and returns that element.

        5. unshift() => Adds one or more elements to the beginning of an array and returns the new length of the array.

        6. concat() => Returns a new array that combines two or more arrays.

        7. slice() => Returns a shallow copy of a portion of an array into a new array.

        8. reverse() => Returns the array in reverse order

        9. includes() => Tests if an array includes a certain element, and returns true or false.

        10. splice() => i) Removes a portion of the array.
                        ii) Replaces elements of the array.
                        iii) Adds new elements to the array
        
        11. sort() => Sorts the array in alphabetical order if the array contains string type of elements. It sorts elements as strings.


        


*/
// ===================== Create an Array ===================

// Approach - 1
let students = ["Miraj", "Mahir", "Mehanaj", "Khusbu"];
// console.log(students);
// console.log(students[0]);
// console.log(students[3]);

// Approach - 2
let teachers = [];
teachers[0] = "DKK sir";
teachers[1] = "Dhiman sir";
teachers[2] = "Swarup sir";
teachers[3] = "Subhas sir";
// console.log(teachers);

// Approach - 3
let marks = new Array(100, 60, 40, 80, 20, 10, 50);
// console.log(subjects);




// ========================== Array methods ==================

// 1. length
// console.log(students.length); // length of students array (4)
// console.log(teachers.length); // length of teachers array (4)
// console.log(marks.length); // length of marks array (4)


// 2. push()
teachers.push("Jhuma ma'am"); // added this at the end of the array
// console.log(teachers);

teachers.push("Swalpo sir", "Gopa ma'am"); // adding two elements at the end of the array
// console.log(teachers);


// 3. pop()
let lastElement = students.pop(); // removes the last element from the array
// console.log(lastElement); // returns the last element
// console.log(students); // returns the updated array


// 4. shift()
let firstElement = marks.shift(); // removes the first element from the array
// console.log(firstElement); // returns the first element
// console.log(marks); // returns the updated array


// 5. unshift()
students.unshift("Jishu"); // added to the beginning of the array
// console.log(students);

students.unshift("Khusbu", "Liza"); // added more than one element to the beginning of the array
// console.log(students);


// 6. concat()
let studentsNteachers = students.concat(teachers); // combined teachers array after students array
// console.log(studentsNteachers);


// 7. slice()
// console.log(students); // ['Khusbu', 'Liza', 'Jishu', 'Miraj', 'Mahir', 'Mehanaj']
let slicedStudents = students.slice(1, 3); // ['Liza', 'Jishu']
// includes the start-index but excludes the end-index
// console.log(slicedStudents);


// 8. reverse()
// console.log(students); // ['Khusbu', 'Liza', 'Jishu', 'Miraj', 'Mahir', 'Mehanaj']
students.reverse();
// console.log(students);


// 9. includes()
// console.log(teachers);
let isDhimanSir = teachers.includes("Dhiman sir");
// console.log(isDhimanSir); // true


// 10. splice()
// console.log(students); // ['Mehanaj', 'Mahir', 'Miraj', 'Jishu', 'Liza', 'Khusbu']
students.splice(0, 1); // Removed the 0th index element
// console.log(students); // ['Mahir', 'Miraj', 'Jishu', 'Liza', 'Khusbu']

let lenStd = students.length;
students.splice(lenStd - 1, lenStd); // removed the (lenStd - 1)th index element (last element)
// console.log(students); //  ['Mahir', 'Miraj', 'Jishu', 'Liza']


students.splice(0, 1, "Khusbu"); // 0th index element is replaced with "Khusbu"
// console.log(students); //  ['Khusbu', 'Miraj', 'Jishu', 'Liza']


students.splice(0, 0, "Mahir", "Mehanaj"); // adding new elements from 0the index
// console.log(students); // ['Mahir', 'Mehanaj', 'Khusbu', 'Miraj', 'Jishu', 'Liza']

students.splice(5, 0, "Gulsan"); // adding new element to the 5th index
// console.log(students);


// 11. sort()
// console.log(students); // before sorting
students.sort();
// console.log(students); // after sorting


// sort an integer array in ascending order
let numbers = [100, 20, 10, 40, 60, 50, 80];
// numbers.sort();
// console.log(numbers); // [10, 100, 20, 40, 50, 60, 80] but it's not sorted properly
/*
To sort an integer array properly  we need to use a comparison function.
*/
numbers.sort(function(a, b) {
    return a - b;
} )
// console.log(numbers); // after sorting

/*
    Q. Why do we need to use a comparison function when sorting an array of numbers in JavaScript, but not when sorting an array of strings?

    => The reason for using a comparison function as an argument in the sort() method for sorting arrays of numbers is that the default behavior of sort() is to sort elements as strings, which may not produce the desired result for numeric values.

    When sorting an array of strings, JavaScript uses the lexicographic (dictionary) order to determine the sort order. However, when sorting an array of numbers as strings, the lexicographic order may not correspond to the numeric order. To correctly sort an array of numbers in ascending order, a comparison function needs to be provided to sort() that compares the numeric values of the elements.

    The comparison function (a, b) => a - b compares each pair of elements a and b in the array. If the result is negative, it means a should be sorted before b, and if the result is positive, it means b should be sorted before a. By subtracting b from a, we achieve ascending order sorting.
*/






