// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

function arrFill(a,b) {
    let arr = [];

    for (let i = 0; i < b; i++){
        arr.push(a)
        console.log(a)
    }
    return arr
}

// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.

let isNumberInRange = num => num > 0 && num < 10;

// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

let isEven = num => num % 2 === 0;

// 4) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let isEvenArr = arr => arr.filter(isEven);

// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.

let exponenting = ( num, expon) =>  num ** expon;
console.log(exponenting(3, 3));

// 6) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

let enterAge = age => age > 16 ? 'добро пожаловать' : 'вы еще молоды';

// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

let enterAge2 = num => ( num === undefined || num === '') ? 'Введите возраст' :  num > 16 ? 'добро пожаловать' : 'вы еще молоды';

// function enterAge2(num) {
//     if (num === undefined || num ===''){
//         console.log('Введите возраст')
//     }else if (num > 16){
//         console.log('добро пожаловать')
//     }else {
//         console.log('вы еще молоды')}
// }

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

function usFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1)
}

let srtUc = ( str) => str.split(' ').map(elm =>  usFirst(elm)).join(' ');

function strUC (str) {
    let arr = [];
    str = str.split(' ');

    for (let i = 0; i < str.length; i++){
        arr.push(usFirst(str[i]))
    }
    return arr
}

// 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)

let srt_Uc = str => str.split('_').map((elm, ind) =>  ind !== 0 ? usFirst(elm) : elm).join(' ');

function srt_Uc1( str){
    let arr = [];
    str = str.split('_');
    for (let i = 0; i < str.length; i++){
        arr.push(i !== 0 ? usFirst(str[i]) : str[i] )
    }
    return arr

}

console.log(srt_Uc1('var_text_hello'));

// 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
//     Функция первым параметром должна принимать текст элемента, а вторым - массив,
//     в котором делается поиск. Функция должна возвращать true или false.


function includeText(text, arr) {

    for (let i = 0; i <= arr.length; i++) {
         if (arr[i].includes(text)) {
             return true
         }
    }
    return false
}


