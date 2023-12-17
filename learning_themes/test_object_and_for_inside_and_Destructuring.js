const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');// тут я создал метод. и теперь я могу написать options.makeTest(); и мне выведит только Test.
    }
};

//как делать деструктуризацию обьекта. 
const {border, bg} = options.colors;
console.log(border);

console.log(Object.keys(options).length);//метод Object.keys берет все ключи из Обьекта OPTIONS, и выписывает отдельно как массив. 
//теперь так как это массив я могу истользовать функцию length. и подсчитать сколько уменя ключей в OPTIONS.
//Это удобно потому что length не работает на прямую к обьектам. приходится делать так. 

//как перебрать все свойства внутри обьекта по ключам и внутри влоденного обьекта.
for (let key in options){
    if (typeof(options[key])==='object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);

    }
}