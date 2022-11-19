// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');
//         i++;
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
// }

// let i = 0;
// do {
//     const a = prompt('Один и последних просмотренных фильмов', ''),
//      b = prompt('На сколько оцените его', '');
//      i++;
//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//          personalMovieDB.movies[a] = b;
//          console.log('done');
//     } else {
//      console.log('error');
//      i--;
//     }
// } while (i < 2);





// console.log(personalMovieDB);


// function sayHello() {
//     console.log('Антон');
// }

// console.log(sayHello);



// function SHF(text) {
//     console.log(text);
//     let num = 20;
// }

// SHF();


// function sayHello(a, b) {
//     return(a + b);
// }

// console.log(sayHello('Привет', 'Антон'));



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);
// console.log(returnNeighboringNumbers);



// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// returnNeighboringNumbers(5);

// returnNeighboringNumbers();












// function getMathResult(num, times) {
//     if (typeof(times) !== 'number' || times <= 0) {
//         return num;
//     }
//     let str = '';
//     for (let i = 1; i <= times; i++) {
//         if (i === times) {
//             str += `${num * i}`;
//                                                             // Тут без черточек в конце
//         } else {
//             str += `${num * i}---`;
//                                                                         // Это тоже самое, что и
//                                                                         // str = str + num * i + "---"
//         }
//     }
//     console.log(str);
//     return str;
// }

// getMathResult(10, 5);


// function gtr(e, r) {
//     if (typeof(r) !== 'number' || r <= 0) {
//         return e;
//     }

//     let q = '';

//     for(let p = 1; p <= r; p++) {
//         if (p === r) {
//             q += `${e * p}`;
//         } else {
//             q += `${e * p}.`;
//         }
//     }

//     console.log(q);
//     return q;
// }

// gtr(1, 5);


// function rty(num, time) {
//     if (typeof(time) != 'number' ||time <= 0) {
//         return num;
//     }
//     let str = '';

//     for(let i = 20; i >= time; i--) {
//         if(i === num) {
//             str += `${num - i}`;
//         } else {
//             str += `${num - i}.`;
//         }
//     }
//     console.log(str);
//     return str;
// }

// rty(101, 1);


// Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.




// newFunction();

// function newFunction() {

// }

// const userName = prompt('Ваше Имя?');
// const userSurname = prompt('Ваша фамилия?');
// alert(`Приветствую ${userName} ${userSurname}`);
// alert(`You link - google${userName}${userSurname}.com`);
// const userUrl = `copy you link - google${userName}${userSurname}.com`;
// console.log(userUrl, userName, userSurname);
// document.write(userUrl);

// let incr = 10,
//      decr =10;

// // incr++;
// // decr--;



// console.log(incr++);
// console.log(decr--);

// console.log(5%2);

// console.log(2*4 == 8);

// // && 
// // ||

//     const is = true,
//             isc = false;

//     console.log(is || isc);

// 1212121

// for (let i = 20; i >= 10; i--) {
//     if ( i === 13) break;
//     console.log(i);
// }

// for (let l = 20; l >= 10; l--) {
//     if (l === 13) break;
//     console.log(l);
// }

// for (let t = 10; t >= -10; t--) {
//     if (t === -3) break;
//        console.log(t);
// }

// for (let c = 2; c > 10; i++) {
//     if (10%2) break;
//     console.log(c);
// }


// (num === 50) ? console.log('true') : console.log('false');

    // if (num < 18) {
    //     document.write('вам не доступен контент 18+');
    //     console.log('false');
    // } else if (num >= 18) {
    //     document.write('вам доступен контент 18+');
    //     console.log('true')
    // }

    // const num = 50;

    // switch (num) {
    // }

    // const num = prompt('irg');

    // while (num < 18) {
    //     document.write('111');
    //     console.log('no');
    //     break;
    // }


    // while (num >= 18) {
    //     document.write('222');
    //     console.log('yea');
    //     break;
    // }

    // for (
    //     let i = 2; i <= 10; i++) {
    //     if (i % 2 === 0) {

    //         console.log(i);
    //     }
    // }


    // for (let i = 2; i <= 16; i++) {
    //     if (i % 2 === 0) {
    //         continue;
    //     } else {
    //         console.log(i);
    //     }
    // }   

    // let q = 2;

    // while (q <= 16) {
    //     while (q <= 16) {
    //         if (q % 2 === 0) {
    //             q++;
    //             continue;
    //         } else {
    //             console.log(q);
    //         }
    //         q++;
    //     }
    // }

    // const arrayOfNumbers = [];
    
    // for (let i = 5; i <= 10; i++) {
    //     arrayOfNumbers[i - 5] = i;
    // }

    // console.log(arrayOfNumbers);

    // return arrayOfNumbers;



    // const tyu = {
    //     product:[],
    //     genres:[]
    // };

   
    // for (let i = 1; i <= 1; i++) {
    //     const u = 1;

    //     tyu.genres[i - 1] = `t`;
    //     console.log(i);
    // }

    // for (let i = 1; i <= 1; i++) {
    //     const q = 1;

    //     tyu.product[i - 1] = `t`;
    //     console.log(i);
    // }

    // console.log(tyu);

    // const arr = [3, 5, 8, 16, 20, 23, 50];
    // const result = [];
    // for (let i = 0; i < arr.length; i++)  {
    //     result[i] = arr[i];
    // }
    // console.log(result);


    // function secondTask() {
    //     const data = [5, 10, 'Shopping', 20, 'Homework'];
    
    //     for (let i = 0; i < data.length; i++) {
    //         if (typeof(data[i]) === 'number') {
    //             data[i] = data[i] * 2;
    //         } else if (typeof(data[i]) === 'string') {
    //             data[i] = `${data[i]} - done`;
    //         }
    //     }
    
    //     console.log(data);
    //     return data;
    // }

    // secondTask();


    // const db = [5, 50, 1000, 'defe', 10, 'ewre', 1];
    // for(let i = 0; i < db.length; i++) {
    //     if (typeof(db[i]) === 'number') {
    //         db[i] = db[i] * 2;

    //     } else if (typeof(db[i]) === 'string') {
    //         db[i] = `${db[i]}-qq`;
    //     }
    // }
    
    // console.log(db);


    const data = [5, 10, 'Shopping', 20, 'Homework'];
    const result = [];
    for (let i  = 1; i < data.length; i++ ) {
        result[i - 1] = data[data.length - i];
    }

    console.log(result);