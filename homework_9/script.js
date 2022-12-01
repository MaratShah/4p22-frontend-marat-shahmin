'use strict';

function makeFibonacciFunction() {
    let nextIndex = 1
    let lastIndex = 0

    const fibonacci = document.getElementById('button');
    fibonacci.addEventListener('click', () => {
    
        nextIndex = nextIndex + lastIndex
        lastIndex = nextIndex - lastIndex
        console.log(nextIndex)
        document.getElementById('fibonacciNumber').innerText = nextIndex;
    })
};
makeFibonacciFunction()