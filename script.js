let numberOfFilms;

function start(){
    numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?',''); // + в начале сделан чтобы было число при выводе(делает числовой тип)

    while (numberOfFilms == '' || numberOfFilms ==null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?','');
    }
}

start();


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms(){
        //создаем цикл чтобы проходил по 2 раза по каждому вопросу. 
    for (let i = 0; i <2; i++){
        const a = prompt ('Один из последних просмотренных фильмов?',''),
              b = prompt ('На сколько оцените его?','');
    //если в сплывающем окно нажать кнопку отмена то будет NULL. поэтому лучше пойти от обратного и протись по НЕ.  то есть !=
        if (a != null && b != null && a != '' && b!= '' && a.length <50){ // если ввел не пустую строку. не отменил кнопку. названите меньше 50 символ
            personalMovieDB.movies[a] = b; // a - свойство обьекта. b - значение свойства обьекта. это то что пишут юзеры и потом записывается в БД
            console.log('done');
        } else {
            console.log('error');
            i --;// декримент чтобы если юзер ввел что то не то, то идет на 1 шаг назад
        }
    }
}

rememberMyFilms();




function detectPersonalLevel(){
    // проверяю количество фильмов и пишу какой он пользователь.
    if(personalMovieDB.count < 10){
        console.log('просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count <30){
        console.log('вы классический зритель');
    } else if ( personalMovieDB.count >=30 ){
        console.log('вы киноман');
    } else {
        console.log('ошибка');
    }
}

detectPersonalLevel();


//создаем функц коотрая проверяет свойство privat.
function showMyDB(hidden){
    if (!hidden){  //если наша базаданных НЕ! скрыта то мы ее показываем
        console.log(personalMovieDB);
    }
//у нас personalMovieDB privat: false. значение фолс передается в hidden. так как здесь оператор отрицания то у нас False превращается в True. и получается if (true). а если там сверху у нас personalMovieDB privat: true то тогдп в этом If будет уже false и ничего уже не выйдет 
}
showMyDB(personalMovieDB.privat); //как аргумент мы передаем кусочек нашей БД
//то есть сначала выаолняется showMyDB(personalMovieDB.privat); эта строка. потом он идет и вставляет аргумент из нашей бд в эту функцию. и потом уже идет выполнять условие.



function writeYourGenres(){
    for(let i= 1; i<=3; i++){//задаем пользователю 3 раза один  и тот же вопрос. начинаю с 1 потому что это для пользователя. он же не знает что массив с 0 начинается
        const genre = prompt (`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1] = genre;  //то что ответил пользователь записываем в БД
    }   //захожу в нашу БД и указываю индекс. ведь массив должен начинаться с 0. и во внутрь мы присваем то что дежит внутри переменной genre

}
writeYourGenres();

