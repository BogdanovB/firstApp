Иногда можно встретить просто нереальные вещи, построенные только при помощи кода. Но мы с вами займемся базовой фигурой. Сейчас вам необходимо написать код, который при помощи звездочек (*) в консоли нарисует вот такую фигуру:

     *
    ***
   *****
  *******
 *********
***********
(Подсказка: в конце фигуры есть перенос строки \n, который тоже учитывается в тестах. В КОНЦЕ КАЖДОЙ СТРОКИ НЕТ ПРОБЕЛОВ, ТОЛЬКО ПЕРЕНОС)


//вот решение. но если я забыл то вот нижу я чуть больше расписал чтобы понять.

for (let i = 0; i<=lines; i++){

    for (let j = 0; j < lines - i; j++ ){
        result = result + ' ';

    }
    for (let j = 0; j < 2 * i + 1; j++){
        result = result + '*';

    }

    result = result + '\n';
}

console.log(result);



//вот ниже расписанная задача.

const lines = 5;
let result = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 0; i<=lines; i++){

    for (let j = 0; j < lines - i; j++ ){
        result = result + '-';

    }
    for (let j = 0; j < 2 * i + 1; j++){
        result = result + '*';

    }
    for (let j =0 ; j < lines-i; j++){
        result = result + '-';
    }
    result = result + '\n';
}

console.log(result);










/*
*
**
***
****
*****
******
//вот такой треугольник еще*/


let result = '';
const lenght = 7;

for(let i = 1; i<7; i++){
    for (let j = 0; j<i; j++){
        result = result + '*';
    }
    result = result+'\n';
}

console.log(result);