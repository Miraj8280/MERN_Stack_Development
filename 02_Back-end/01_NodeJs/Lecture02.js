/*--------------------------------------------------------------------
                                npm 
----------------------------------------------------------------------*/
/*
    -> nmp => Node Package Manager
    -> npm is a package manager for Node.js. 
    -> It is used to manage dependencies (i.e., external libraries and modules) in Node.js projects. 
    -> npm allows developers to easily install, update, and remove packages, as well as manage package versions and dependencies.
    -> When we install Node.js on our computer, npm is also installed automatically.
    -> We can verify that npm is installed by running the following command in our terminal: 
        npm -v
        This command will display the version of npm that we have installed on our computer.
    -> 
*/

/*----------------------------------------------------------------------------
                            Package.json
------------------------------------------------------------------------------*/
/*
    -> To use npm in our Node.js project, we need to create a package.json file. 
    -> This file is used to define our project's dependencies, as well as other metadata about our project.
    -> To create a package.json file, we have to navigate to our project directory in terminal and run: npm init
    -> This command will prompt us to enter information about our project, such as the name, version, description, author, license, and so on. 
    -> Once entered all the information, npm will create a package.json file in our project directory.
    -> To install a package in your project, run: npm install <package-name>
    -> npm will download the package from the npm registry and install it in project's node_modules directory. 
    -> npm will also update your project's package.json file to include the new package as a dependency.
    -> To remove a package from the project, run: npm uninstall <package-name>
    -> npm will remove the package from the project's node_modules directory and update the project's package.json file to remove the package as a dependency.

*/