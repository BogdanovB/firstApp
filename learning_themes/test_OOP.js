"use strict"

let str = "some";
let strObj = new String(str);

// console.log(typeof(str)); // это просто строка так как просто данные внутри
// console.log(typeof(strObj));// а тут уже обьект. это происходит когда используем какойто метод на обьект. 


// console.dir([1,2,3,4])// экземпляр массива.


const solder = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('HELLO');
    }
};
//след 2 строки это новый вариант.
const john = Object.create(solder); //мы создаем новый обьект ДЖОН который будет прототипно наследоваться от СОДАТА.

Object.setPrototypeOf(john, solder); //установили прототип для ДЖОна от СОЛДАТА. тоже самое что и john.__proto__ = solder;//старый вариант

// const john = {
//     health: 100
// };

// john.__proto__ = solder;//старый вариант


console.log(john.armor)// так как мы указали что прототип это solder у john то ДЖОН теперь берет свойства от СОЛДАТА
john,sayHello();//тоже самое. взял из своего прототипа метод


