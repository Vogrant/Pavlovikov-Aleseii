/*// 1 - Создать переменную каждого типа данных.
let str = 'str';
let number = 5;
let bigInt = BigInt(10);
let symbol = Symbol('gfg');
let under;
let isBool = true;
let nul = null;
let obj = {
    Pety: 'Zalupkin'
};*/

// // 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).
// var varVariable = 3;
// varVariable = 'kukumber';
// let letVariable = 'kukumber';
// letVariable = 7;

/*// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).

parseFloat(str);
parseInt(str);
Boolean(str)

number.toString();
Boolean(number)

let a = Number(bigInt);
let b = parseInt(bigInt)
Boolean(bigInt);


symbol.toString(); Boolean(symbol);

under.toString(); Number(under); Boolean(under);

Number(isBool); isBool.toString();

Number(nul); BigInt(nul); Boolean(nul);

obj.toString(); Boolean(obj); Number(obj);*/

/*// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.

let strPlusNum = str + number;
let strPlusBigint = str + bigInt;
let strPlusSym = str + symbol;
let strPlusUnder = str + under;
let strPlusBool = str + isBool;
let strPlusNull = str + nul;
let strPlusObj = str + obj;

let NumPlusBigint = number+bigInt;
let NumPlusSym = number + symbol;
let NumPlusUnder = number + under;
let NumPlusBool = number + isBool;
let NumPlusNull = number + nul;
let NumPlusObj = number + obj;*/

/*// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.
let strMinusNum = str - number;
let strMinusBigint = str - bigInt;
let strMinusSym = str - symbol;
let strMinusUnder = str - under;
let strMinusBool = str - isBool;
let strMinusNull = str - nul;
let strMinusObj = str - obj;

let NumMinusStr = number - str;
let NumMinusBigint = number - bigInt;
let NumMinusSym = number - symbol;
let NumMinusUnder = number - under;
let NumMinusBool = number - isBool;
let NumMinusNull = number - nul;
let NumMinusObj = number - obj;*/

/*// 6 - Задача (Условный оператор)
// Пользователь вводит логин и пароль.
//     Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
// то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».

const login = prompt('Enter login');
const password =  prompt('Enter password');

if (login === 'kykold' && password === '1234asdQQ'){
    alert('Добро пожаловать')
}else {
    alert('Ошибка входа')
}*/

/*// 7 - Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «Ошибка входа»,
// если нет – «вход воспрещен».

let minAge = 16;
let age = +prompt('Enter your age');
if (age >= minAge){
    alert('Ошибка входа')
}else (alert('вход воспрещен'));*/

/*// 8 - Задача (Условный оператор)
// Создайте программу, которая выводит надбавку за стаж.
//     Пользователь вводит стаж работы, а программа пишет ему надбавку.

let experience = +prompt('Enter your experience by number')

if (experience < 3){
    alert('У Вас нет надббавки, вы только начинаете свой путь!')
}else if (experience <= 5){
    alert('Ваша надбавка к з/п составляет 3%')
}else if (experience <= 10 ){
    alert('Ваша надбавка к з/п составляет 7%')
}else {alert('Ваша надбавка к з/п составляет 15%')}*/

/*// 9 - Задача (Условный оператор и свитч кейс)
// Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
// 9.1 Решить на иф елсах
// 9.2 Решить на свитч кейсе
// 9.3 Решить на тернарном операторе

let numberOfWeekDay = +prompt('Enter number of weekDay');

switch (numberOfWeekDay) {
    case 1 : alert('Monday');
        break;
    case 2 : alert('Tuesday');
        break;
    case 3 : alert('Wednesday');
        break;
    case 4 : alert('Thursday');
        break;
    case 5 : alert('Friday');
        break;
    case 6 : alert('Saturday');
        break;
    case 7 : alert('Sunday');
        break;
    default : alert('Your number is not correct');
        break;
}

if (numberOfWeekDay === 1){
    alert('Monday')
}else if (numberOfWeekDay === 2){
    alert('Tuesday')
}else if (numberOfWeekDay === 3){
    alert('Wednesday')
}else if (numberOfWeekDay === 4){
    alert('Thursday')
}else if (numberOfWeekDay === 5){
    alert('Friday')
}else if (numberOfWeekDay === 6){
    alert('Saturday')
}else if (numberOfWeekDay === 7){
    alert('Sunday')
}else {alert('Your number is not correct') }

numberOfWeekDay === 1 ? alert('Monday') :
    numberOfWeekDay === 2 ? alert('Tuesday'):
    numberOfWeekDay === 3 ? alert('Wednesday'):
        numberOfWeekDay === 4 ? alert('Thursday'):
            numberOfWeekDay === 5 ? alert('Friday'):
                numberOfWeekDay === 6 ?  alert('Saturday'):
                    numberOfWeekDay === 7 ?  alert('Sunday') : alert('Your number is not correct');*/

/*// 10 - Задача (Условный оператор)
// Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//     1, если значение больше нуля,
//     -1, если значение меньше нуля,
//     0, если значение равно нулю.

let numberFoTan = +prompt('enter number');

if (numberFoTan === 0){
    alert('0')
}else if (numberFoTan < 0){
    alert('-1')
}else {alert('1') }*/

/*
// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.
//
//     let message;
//
// if (login == 'Сотрудник') {
//     message = 'Привет';
// } else if (login == 'Директор') {
//     message = 'Здравствуйте';
// } else if (login == '') {
//     message = 'Нет логина';
// } else {
//     message = '';
// }

let message;
let login = prompt();

login === 'Сотрудник' ? message = 'Привет' :
    login === 'Директор' ? message = 'Здравствуйте':
        login === '' ?  message = 'Нет логина':  message = '';
*/

/*// 12 - Задача (Условный оператор)
// В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
// Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.

let roomNumber = +prompt("Enter room number");
if (roomNumber >= 0 || roomNumber <= 20){
    alert('you need 1 entrance')
}else if (roomNumber <= 48){
    alert('you need 2 entrance')
}else if (roomNumber <= 90){
    alert('you need 3 entrance')
}else {alert('your number is not correct')}*/

/*// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
//     switch (browser) {
//         case 'Edge':
//             alert( "You've got the Edge!" );
//             break;
//
//         case 'Chrome':
//         case 'Firefox':
//         case 'Safari':
//         case 'Opera':
//             alert( 'Okay we support these browsers too' );
//             break;
//
//         default:
//             alert( 'We hope that this page looks ok!' );
//     }

let browser = prompt();

if (browser === 'Edge'){
    alert( "You've got the Edge!" )
}else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera'){
    alert( 'Okay we support these browsers too' )
}else {alert( 'We hope that this page looks ok!' )}*/

/*//     14 - Задача (свитч кейс)
//     Переписать условия "if" на "switch"
//     важность: 4
//     Перепишите код с использованием одной конструкции switch:
//
//         const number = +prompt('Введите число между 0 и 3', '');
//
//         if (number === 0) {
//             alert('Вы ввели число 0');
//         }
//
//         if (number === 1) {
//             alert('Вы ввели число 1');
//         }
//
//         if (number === 2 || number === 3) {
//             alert('Вы ввели число 2, а может и 3');
//         }

const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0 :  alert('Вы ввели число 0');
        break;
    case 1 :  alert('Вы ввели число 1');
        break;
    case 2 :
    case 3 :  alert('Вы ввели число 2, а может и 3');
        break;
}*/



