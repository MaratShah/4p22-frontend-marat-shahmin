'use strict'

let firstArgument = document.querySelector('.form__input1');
let secondArgument = document.querySelector('.form__input3');
const operator = document.querySelector('.form__input2');
let form__result = document.querySelector('.form__result');
const btn = document.querySelector('.form__button');

btn.addEventListener('click', function (e) {
    e.preventDefault();
    const val1_str = String(firstArgument.value);
    const val2_str = String(secondArgument.value);
    if ((val1_str.length === 0) || (val1_str.indexOf(' ') != -1)) {
        form__result.innerHTML = "Первое число не указано";
        return console.log('Первое число не указано');
    }
    if ((val2_str.length === 0) || (val2_str.indexOf(' ') != -1)) {
        form__result.innerHTML = 'Второе число не указано';
        return console.log('Второе число не указано');
    }
    const val1 = Number(firstArgument.value);
    const val2 = Number(secondArgument.value);
    let res;

    if (val1 === '' && val1 !== 0) {
        form__result.innerHTML = 'Первое число не указано';
        return console.log('Первое число не указано');   
    }

    if (val2 === '' && val2 !== 0) {
        form__result.innerHTML = 'Второе число не указано';
        return console.log('Второе число не указано');
    }

    if (isNaN(val1) === true || isNaN(val2) === true) {
        form__result.innerHTML = 'Некорректный ввод чисел';
        return console.log('Некорректный ввод чисел');
    }

    console.log(val1, '.form__input1', secondArgument.value, val2, typeof val2);


if (typeof val1 === 'number' && typeof val2 === 'number') {
    switch (operator.value) {
        case '+':
            res = val1 + val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case '-':
            res = val1 - val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case '/':
            res = val1 / val2;
            console.log(res);
            form__result.innerHTML = res;
            break;
        case '*':
            res = val1 * val2;
            console.log(res);
            form__result.innerHTML = res;
            break;   
        case '':
            console.log('Не введен знак');
            form__result.innerHTML = 'Не введен знак'; 
            break;  
        default: return form__result.innerHTML = 'Программа не поддерживает такую операцию',
        console.log('Программа не поддерживает такую операцию'); 
    }    
} 

if (res === Infinity) {
    form__result.innerHTML = 'Операция некорректна';
    return console.log('Операция некорректна');
}
})
