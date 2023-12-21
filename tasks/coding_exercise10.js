const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;

        let result = `Мне ${age} и я владею языками: `

        languages.forEach(function (lang){
            result+= `${lang.toUpperCase()} `
        });
    
        return result;
    }
    
    
};
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter))


//3) Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. 
//При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.
//Пример:
//personalPlanPeter.showAgeAndLangs(personalPlanPeter)
//=> 'Мне 29 и я владею языками: RU ENG'
//Заметьте, что возраст и языки подставляются автоматически из объекта,
// а языки всегда в верхнем регистре (большими буквами).
// Если данные в объекте поменяются, то и сообщение тоже изменится.





//2) Напишите функцию showProgrammingLangs, которая будет принимать в себя
// объект со всеми данными и возвращать строку в нужном виде.
//Пример:
//showProgrammingLangs(personalPlanPeter)  =>
//"Язык js изучен на 20% Язык php изучен на 10%"
//Причем функция должна работать вне зависимости от количества языков. 
//Если ни один не указан, то возвращается пустая строка.
//P.S. Для переноса строки используется \n в конце строки.

function showProgrammingLangs(plan) {
    const {programmingLangs} = plan.skills

    let result = '';

    for (let i in programmingLangs){
        result += `Язык ${i} изучен на ${programmingLangs[i]}\n`
    }
    return result;
}
console.log(showProgrammingLangs(personalPlanPeter))




//1) Напишите функцию showExperience, которая будет принимать в себя объект
// со всеми данными и возвращать строку с опытом.
//Пример: //showExperience(personalPlanPeter) => '1 month'
//P.S. желательно использовать деструктуризацию, но не обязательно

function showExperience(plan) {
    const {languages, exp} = plan.skills
    const {js, php} = plan.skills.programmingLangs

    return exp;
}

console.log(showExperience(personalPlanPeter));








///1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
//showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'
//Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let result = arr.join(' ');

    if (arr.length ===0 ){
        return 'Семья пуста'
    } else{

    return 'Семья состоит из: ' + result;
    }
}

console.log(showFamily(family))


///2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк
// и будет выводить в консоль эти строки в нижнем регистре.
//Пример:
//standardizeStrings(favoriteCities)  выведет в консоль
//lisbon
//rome
//milan
//dublin
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i ++){
        result.push(arr[i].toLowerCase());
    }
    return result.join('\n');
}

console.log(standardizeStrings(favoriteCities))
//////



