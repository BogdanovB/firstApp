"use strict"
//методы это вспомогательные функции
//свойства это вспомогательные значения

const str = "test";

console.log(str.toUpperCase()); //метод делающий все upper case
console.log(str.toLowerCase());//метод делающий все lower cases


//метод выводящий индекс 
const fruit = 'some fruit';
console.log(fruit.indexOf('fruit'));//выводит индекс с которого начинается это слово.

//методы вырезающий то что нужно. указываю в свойстве первый индекс и последний. если не укажу последний от будет от первого индекса до конца
const logg = 'hello world';
console.log(logg.slice(6,11));
console.log(logg.substring(6,11));

console.log(logg.substr(3,3)); // второе свойство жто сколько именно символов отчитывать от первого свойства

//методы чисел
//

const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));//этот метод берет строку и превращает ее в число откидывая все ненужное и округляя.
console.log(parseFloat(test));//этот метод берет строку и превращает ее в число откидывая все ненужное и  НЕ округляя.