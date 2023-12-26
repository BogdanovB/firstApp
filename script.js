'use strict';

const personalMovieDB = {
    count: 0,//изначально коллво фильмов 0
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    // это была отдельная функция. но теперь мы делаем из нее метод.
    //теперь когда зпускается метод СТАРТ начинаем задавать вопросы пользователю
    start: function(){// это метод СТАРТ и внутри мы прописываем функцию
        personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?',''); // + в начале сделан чтобы было число при выводе(делает числовой тип)
    
        while (personalMovieDB.count == '' || personalMovieDB.count ==null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов вы уже посмотрели?','');
        }
    },
    rememberMyFilms: function(){
        //создаем цикл чтобы проходил по 2 раза по каждому вопросу. 
        for (let i = 0; i <2; i++){
            const a = prompt ('Один из последних просмотренных фильмов?','').trim(),//trim нужен чтобы удалять пробелы. и если например пользоватер введет ответ как просто пробелы. то так же выкинет ошибку в нижний else
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
    },
    detectPersonalLevel: function(){
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
    },
    showMyDB: function(hidden){// этот метод показывает в какой БД он сощдан
        if (!hidden){  //если наша базаданных НЕ! скрыта то мы ее показываем
            console.log(personalMovieDB);
        }
    //у нас personalMovieDB privat: false. значение фолс передается в hidden. так как здесь оператор отрицания то у нас False превращается в True. и получается if (true). а если там сверху у нас personalMovieDB privat: true то тогдп в этом If будет уже false и ничего уже не выйдет 
    },
    toggleVisibleMyDB: function(){// если приватность будет установлина то мы ее выключаем. если не установлена то наоборот включаем
        if (personalMovieDB.privat){
            personalMovieDB.privat = false;
        }else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function(){
        /*for(let i= 1; i<=3; i++){//задаем пользователю 3 раза один  и тот же вопрос. начинаю с 1 потому что это для пользователя. он же не знает что массив с 0 начинается
            let genre = prompt (`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;  //то что ответил пользователь записываем в БД
            }
            
        */
            for(let i= 1; i<=2; i++){ // цикл запускается 1 раз и все. но если что то не так там снизу есть ДЕКРЕмЕНТ . он запускате цикл езе раз
            let genres = prompt (`Введите ваши любимые жанры через запятую`).toLowerCase();

            if(genres === '' || genres == null){
                console.log('вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');// эта строка делает: genres.split(', ') берет эту строчку и разделяет ее на отдельные элементы массивов и помещаем его в personalMovieDB.genres // .split(', ') она берет строку и разделяет строку на отдельные элементы массива через определенный определитль 
                personalMovieDB.genres.sort();// .sort идт по Алфавиту 
            }
        }   //захожу в нашу БД и указываю индекс. ведь массив должен начинаться с 0. и во внутрь мы присваем то что дежит внутри переменной genre
    
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`)
        }); // записываем аргументы с которыми будем взаимодействовать. item это каждый элемент в массиве который мы перебираем. i это номер попрядку


    }

};




// //создаем функц коотрая проверяет свойство privat.
// function 
// showMyDB(personalMovieDB.privat); //как аргумент мы передаем кусочек нашей БД
// //то есть сначала выаолняется showMyDB(personalMovieDB.privat); эта строка. потом он идет и вставляет аргумент из нашей бд в эту функцию. и потом уже идет выполнять условие.



