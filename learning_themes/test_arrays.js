"use strict";

const arr = [1,2,3,6,8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b){ //ээто алгоритм быстрой сортировки.
    return a-b;
}

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




const str = promt("", "");
const products = str.split(", "); //через какой разделитель будут товары в сттроке 
products.sort();//метод сортировки 
console.log(products.join('; '))//обьединение элементов масива и превращщение в строку
