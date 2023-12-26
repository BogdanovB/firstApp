const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}
//Общаяплощадь=(Длина1×Ширина1)+(Длина2×Ширина2)+(Длина3×Ширина3)+(Длина4×Ширина4)
//Общийобъем=(Длина1×Ширина1×Высота1)+(Длина2×Ширина2×Высота2)+(Длина3×Ширина3×Высота3)+(Длина4×Ширина4×Высота4)
function isBudgetEnough(data) {
    let ploshad = 0;
    let obyem =0;

    data.shops.forEach(i => {
        ploshad += i.width*i.length
    })

    obyem = ploshad * data.height

    if (obyem*data.moneyPer1m3 > data.budget){
        return 'Бюджета недостаточно'
    } else {
        return 'Бюджета достаточно'
    }

}

console.log(isBudgetEnough(shoppingMallData))


//////////////////////////////////////////////////////////2////////////////////////////////////////////////////

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    
    arr.sort();
    let a = [], b=[], c = [], rest = [];

    arr.forEach((student, i) => {
        if (i<3){
            a.push(student);
        }else if(i<6){
            b.push(student)
        }else if(i<9){
            c.push(student)
        }else{
            rest.push(student)
        }
    })

    return [a,b,c, `Оставшиеся студенты: ${rest.length == 0 ? '-' : rest.join(', ')}`]
}

console.log(sortStudentsByGroups(students))