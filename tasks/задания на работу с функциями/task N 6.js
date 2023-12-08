
///1) Создайте функцию, которая будет на вход принимать 1 аргумент с именем человека и возвращать строку.
///Пример: вызов функции sayHello('Антон') возвращает строку "Привет, Антон!". 
///В решении вызывать функцию не нужно, программа сделает это за вас.
///P.S. возвращать - это использовать ключевое слово return.
///P.S.S. Это классическая функция-модификатор, которых мы дальше по курсу будем создавать еще много в разных видах.

function sayHello(nameP) {
    return `Привет, ${nameP}!`;
}
sayHello('Антон')


///2)Создайте функцию, которая принимает в себя 1 аргумент в виде целого числа и возвращает массив из трех чисел: 
///одно на 1 меньше, сам аргумент, и число на 1 больше.
///Пример: вызов функции returnNeighboringNumbers(5) возвращает массив в виде [4, 5, 6].

function returnNeighboringNumbers(numb) {
    return [numb - 1, numb, numb +1]
}
console.log(returnNeighboringNumbers(5));

///3)
function getMathResult(baseN, multN) {
    
    let result='';

    if(typeof multN != 'number' || multN<=0){
        console.log(baseN);
    }else{
        for(let i=1; i<=multN; i++){
            if (i<multN){
                result +=`${baseN*i}---`;
            } else {
                result +=`${baseN*i}`;
            }
        }
        console.log(result);
    }
}

getMathResult(5,3);