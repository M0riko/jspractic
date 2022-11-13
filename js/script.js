'use strict';
   
   
   let numberOfFilms;

    function start() {
        numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели ?', '');
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели ?', '');
        }
    }
    start();


  const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false
  };


function remembermyfilms () {
    for (let i = 0; i <= 1; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
            personalMovieDB.movies[a] = b;
    }
    
}
remembermyfilms ();

function detectperslvl() {
    if (personalMovieDB.count < 10) {
        console.log ('1');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log ('2');
    } else if (personalMovieDB.count >= 30) {
        console.log('3');
    } else {
        console.log('error');
    }
}
detectperslvl();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);

    }
}

showMyDB();
 

    function writeugeneres() {
        for(let i = 1; i <= 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            personalMovieDB.genres[i - 1] = genre;
        }
    }

    writeugeneres();
console.log(personalMovieDB.privat);
