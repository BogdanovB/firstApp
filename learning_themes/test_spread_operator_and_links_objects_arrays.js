let a = 5,
    b = a;
b= b +5;

console.log(b);
console.log(a);


/// тут я создаю копию обьекта. но обрати внимание что copy.a =10 менятся и в обьекте obj. то есть это ссылка а не создание нового обьекта
const obj1 = {
    a:5,
    b:1
};

const copy = obj1; // ЭТО ВСЕ ТАКИ ССЫЛКА А НЕ КОПИЯ ОБЬЕКТА.

copy.a = 10;

console.log(copy);
console.log(obj1);
///// до сюда.


/////////////////////как создать ПОВЕРХНУСТНУЮ копию

const obj = {
    a:5,
    b:1
};

function copy(mainObj){
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key]; //внутри нового обьекта создаем свойство . внутри пробегаем по обьекту который мы кажем уже далее.
    }

    return objCopy;
}

const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};

const newNumbers = copy(numbers); //создаю переменную потом вызываю функцию COPY которую создал выше и вводу numbers oject.

newNumbers.a = 10// добавляю 10 чтобы видеть разницу с новым от оригинала.

console.log(newNumbers);
console.log(numbers);

/////////////////////////

////////////////////////////////// метод Object.assign() вписывает один обьект в другой 


const add = {
    d:17,
    e:20
};

//console.log(Object.assign(numbers, add)); //соединякм обьект add с numbers.

const clone = Object.assign({}, add); // создаю клон обьекта ADD;
clone.d=20;

console.log(add);
console.log(clone);



////////////копирование МАССИВОВ



const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice(); // method slice копирует массив.

//////////////////////////////////////// копирование массива .

//первый вариант 
const videos = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress','livejournal','blogger'],
      internet = [...videos, ...blogs, 'vk', 'facebook']; //это троеточие открывает массив и записывает данные в новый массив.

console.log(internet);

//второй вариант 
function log (a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2,5,7];

log(...num);



//////////////////////////////////


const array = ['a', 'b'];

const newAarray = [...array] //так же копирует все из array в new Aarray



const q = {
    one:1,
    two:2
}

const newObj = {...q}; //// так же можно и с обьектами