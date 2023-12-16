"use strict";

const arr = [1,2,3,6,8];

arr.forEach(function (item, i, arr) { //имя аргументов придумываю как хочу, номер по порядку, ссылка на масив который перебираем. 
    console.log(`${i}: ${i} внутри массива ${arr}`);
})

arr.pop(); //удаляет последний элемент

arr.push(10); // добавляют элемент

for (let i = 0; i <arr.length; i++){//выврдит колличество значений из массива
    console.log(arr[i]);
}

for (let value of arr){///выврдит колличество значений из массива просто другой вариант
    console.log(value);
}