'use strict'    

let makeFibonacciFunction = [0, 1]; 
for (let fibonacci = 2; fibonacci <= 10; fibonacci++) {
 
 makeFibonacciFunction[fibonacci] = makeFibonacciFunction[fibonacci - 2] + makeFibonacciFunction[fibonacci - 1];
 console.log(makeFibonacciFunction[fibonacci]);
}


