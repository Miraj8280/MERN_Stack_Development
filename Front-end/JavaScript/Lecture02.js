/*------------------------------------------------------------------------
                    Data Types in JavaScript
--------------------------------------------------------------------------
    => There are 8 data types in JS
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

    => There are some object data type also:
        1. Array :  [2, 4, 6, 8, 10] 
                    ["Mobarak", "Moslema", "Mehanaj", "Miraj"]
        
        2. Object : 
                    {
                        name : "Miraj",
                        roll : 36,
                        dept : CSE
                    }; 
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
*/

/*------------------------------------------------------------------------
                        var
--------------------------------------------------------------------------
    => It is a very old (1995 - 2015) keyword.
    => Use let or const instead of var.
*/

       var a = 20;
       var b = 30;
       var sum = a + b;

    //    console.log( sum );


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

    

    // ================== Non redeclarable =============================
        let firstName = "Miraj";
        // let firstName = "Mahir"; // this will give an error
        firstName = "Mahir"; // this is correct (we can't redeclare the variable, but we can resuse the variable)



    // ================== Block scope =============================
        // global scope
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
            console.log(l); // 💚💚 
        }
        console.log(l); // love (global variable can be accessed)
/*------------------------------------------------------------------------
                        const
--------------------------------------------------------------------------
    => If the value of a variable can not be changed then we use const keyword
*/
