/**
 *
 * initiate an npm package.json into this project's folder.
 * Install the npm library chalk into this project and require it in this file, read the documentation online for Chalk
 *
 * Iterate the colorsArray and for each color in the array, console.log "Hello World" in that color using Chalk.
 */
import chalk from "chalk";

let colorsArray = [
    'green',
    'blue',
    'red',
];

// your code goes here
colorsArray.forEach((element) => {
    switch (element){
        case 'green':
            console.log(chalk.green('Hello world'));
            break;
        case 'blue':
            console.log(chalk.blue('Hello world'));
            break;
        case 'red':
            console.log(chalk.red('Hello world'));
            break;
    }
})
