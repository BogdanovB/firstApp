// Место для первой задачи
// 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба.
// Эта функция принимает в себя целое число со значением длины ребра куба. 
// Ответ выведите в формате строки, который изображен в примерах.

// Если в функцию попал неправильный аргумент или вычислить значения невозможно - вернуть строку "При вычислении произошла ошибка"

function calculateVolumeAndArea(lengthSide) {
    
    let vCube = lengthSide * lengthSide* lengthSide;
    let sCube = 6 * (lengthSide * lengthSide);

    while (lengthSide <=0 || isNaN(lengthSide) || !Number.isInteger(lengthSide)) {
        return 'При вычислении произошла ошибка';
    }

    return `Объем куба: ${vCube}, площадь всей поверхности: ${sCube}`;
 
}

console.log(calculateVolumeAndArea('15.5'))





// Место для второй задачи
// 2) Постепенно переходим к более реалистичным задачам :) Вы обнаружите, что там используется все тоже самое.
// Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно:
// Функция принимает только целое число от 1 до 36.
// Если переданный аргумент не число, отрицательное или дробное - возвращается сообщение:
// "Ошибка. Проверьте правильность введенного номера места"
// Если число 0 или больше 36, то сообщение: "Таких мест в вагоне не существует"

function getCoupeNumber(placeNummber) {
    
    

    if (placeNummber==0 || placeNummber >36 ){
        return "Таких мест в вагоне не существует";
    }

    if (isNaN(placeNummber)|| !Number.isInteger(placeNummber)||placeNummber < 0){
        return "Ошибка. Проверьте правильность введенного номера места";
    }
    
    return Math.ceil(placeNummber/4);
}
console.log(getCoupeNumber(7.7))

//math.ceil(number)





function getTimeFromMinutes(minutesGet) {
    
    let hoursGet = Math.floor(minutesGet/60);
    let minutesLeft= minutesGet%60;
    
    if (minutesGet < 0 || !Number.isInteger(minutesGet)){
        return "Ошибка, проверьте данные";
    }

    if (minutesGet <=59){
        return `Это ${hoursGet} часов и ${minutesLeft} минут`;
    }

    if (minutesGet >=60 && minutesGet <=119){
        return `Это ${hoursGet} час и ${minutesLeft} минут`;
    }
    if (minutesGet >= 120){
        return `Это ${hoursGet} часа и ${minutesLeft} минут`;
    }

};
console.log(getTimeFromMinutes(150))



let minutesGet = 150;
let minutesLeft;
hoursGet = Math.floor(minutesGet/60);
minutesLeft = minutesGet%60;
console.log(hoursGet)
console.log(minutesLeft)


//1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки. (Смотри пример).
// Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры.
// Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку "Ошибка, проверьте данные"
function getTimeFromMinutes(minutesGet) {

    if (minutesGet < 0 || !Number.isInteger(minutesGet) || typeof(minutesGet) !== 'number'){
        return "Ошибка, проверьте данные";
    }

    let hoursGet = Math.floor(minutesGet/60);
    let minutesLeft = minutesGet%60;
    let hoursStr;

    switch (hoursGet){
        case 0:
            hoursStr = 'часов'
            break;
        case 1:
            hoursStr = 'час'
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа'
            break;
        default:
            hoursStr = 'часов'

    
    }

    return `Это ${hoursGet} ${hoursStr} и ${minutesLeft} минут`;

}

console.log(getTimeFromMinutes(20))



function findMaxNumber(num1, num2, num3, num4) {

    if(typeof(num1) !== 'number' ||
       typeof(num2) !== 'number' ||
       typeof(num3) !== 'number' ||
       typeof(num4) !== 'number'){
            return 0;
       }
    
    return Math.max(num1, num2, num3, num4);
}


console.log(findMaxNumber(1,2,3))




// // числа фибоначи

// function fib(numb) {
 
//     let fibResult='';
//     let num1= 0;
//     let num2= 1;

//     if (typeof(numb)!=='number' || numb <=0 || !Number.isInteger(numb)){
//         return '';
//     }
//     if (numb === 0){
//         return '';
//     }

//     for (let i = 0; i < numb; i++){
//         if (i+1 === numb){
//             fibResult += `${num1}`;
//         } else {
//             fibResult += `${num1} `;
//         }
//         let num3= num1+num2;
//         num1=num2;
//         num2=num3;
//     }

//     return fibResult;
// }
// console.log(fib(0))

