//Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
//Пример:
//const someString = 'This is some strange string';
//reverse(someString) => 'gnirts egnarts emos si sihT'
//функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"
//Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, 
//посмотреть как он думает. 
//Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.
//Может показать сложной с первого взгляда, но это совсем не так 🙂


const someString = 'This is some strange string';

function reverse(str) {
    let totalstr = '';

    if (typeof(str)!== 'string'){
        return 'Ошибка!'
    }else{
    for (let i = str.length-1; i>= 0; i--){
        totalstr += str[i];
    }
    return totalstr;
    }
}

console.log(reverse(someString))



///////////////////3




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {

    let totalArr =
}


