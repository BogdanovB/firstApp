const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?',''); // + в начале сделан чтобы было число при выводе

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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


console.log(personalMovieDB);