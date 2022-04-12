// Task 1 Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
const a = 7;
const b = 9;
console.log(a * b)

// Task 2 Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
// const c  = 7;
// const d = 9;
// console.log(c / d)

const c = 7;
const d = 9;
let n = c / d
console.log(n.toFixed(2))

// Task 3 Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
const e = 3;
const f = 5;
console.log(e + f);

// Task 4 Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
const e1 = '3';
const f1 = 5;
// let  v = e1 + f1;
// console.log(typeof v);
console.log(e1 + f1);

// Task 5 Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
const e2 = 3;
const f2 = 0;
console.log(e2 / f2); // Обьяснить!!!

//Task 6 Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
const e3 = 3;
const f3 = 'Hello';
console.log(e3 + f3);

// Task 7 Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
const e4 = 3;
const f4 = 'Hello';
console.log(e4 * f4);

// Task 8 По нажатию на кнопку .b-8 выполняется функция, которая выводит в div.out-8 то, что пользователь ввел в input.i-8.
const getTextOne = document.querySelector('.i-8');
const btnOne = document.querySelector('.b-8');
let getDivOne = document.querySelector('.out-8');
btnOne.onclick = function () {
    let setText = getTextOne.value;
    getDivOne.innerHTML = setText;
}
// Task 9 По нажатию на кнопку .b-9 выполняется функция t9, которая выводит в div.out-9 то, что пользователь ввел в input.i-9.
// Добавьте очистку input после нажатия кнопки.
const getTextTwo = document.querySelector('.i-9');
const btnTwo = document.querySelector('.b-9');
let getDivTwo = document.querySelector('.out-9');

btnTwo.onclick = function t9() {
    let setTextTwo = getTextTwo.value;
    getDivTwo.innerHTML = setTextTwo;
    getTextTwo.value = '';
}

// Task 10 По нажатию на кнопку .b-10 выполняется функция t10, которая выводит в div.out-10 то, что пользователь ввел в input.i-10 умноженное на 20.
const getTextThree = document.querySelector('.i-10');
const btnThree = document.querySelector('.b-10');
let getDivThree = document.querySelector('.out-10');

btnThree.onclick = function t10() {
    let setTextThree = getTextThree.value;
    getDivThree.innerHTML = setTextThree * 20;
    getTextThree.value = '';
}

// Task 11 По нажатию на кнопку .b-11 выполняется функция t11, которая выводит на страницу в .out-11 число, которое
// ввел пользователь в i-11 и к нему добавленное число 55. В этой задаче мы не приводим к числу полученное из input.

const getTextFour = document.querySelector('.i-11');
const btnFour = document.querySelector('.b-11');
let getDivFour = document.querySelector('.out-11');

btnFour.onclick = function t11() {
    let setTextFour = +getTextFour.value;
    getDivFour.innerHTML = setTextFour + 55;
    getTextFour.value = '';
}

// Task 12

const getName = document.querySelector('.i-12');
const getFemale = document.querySelector('.i-12-2');
const btnFive = document.querySelector('.b-12');
let getDivFive = document.querySelector('.out-12');

btnFive.onclick = function t12() {
    getDivFive.innerHTML = `Hello ${getName.value} ${getFemale.value}`;
    getName.value = '';
    getFemale.value = '';
}

// TAsk 13 При нажатии кнопки .b-13 выполняется t13. Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b.
// После чего в .out-13 выводит их сумму. Преобразовывайте a, b в числа!!!!

const getNumOne = document.querySelector('.i-13');
const getNumTwo = document.querySelector('.i-13-2');
const btnSix = document.querySelector('.b-13');
let getDivSix = document.querySelector('.out-13');

btnSix.onclick = function t13() {
    let a = +getNumOne.value
    let b = +getNumTwo.value
    getDivSix.innerHTML = a + b;
    getNumOne.value = '';
    getNumTwo.value = '';
}

// Task 14 По нажатию кнопки .b-14 выполняется функция t14. Она заменяет значение value в input.i-14 на строку 'Go'

const getInput = document.querySelector('.i-14');
const btnSeven = document.querySelector('.b-14');

btnSeven.onclick = function t14() {
    getInput.value = 'Go'
}

// Task 15 По нажатию кнопки .b-15 выполняется функция t15. Она присваивает .i-15 свойство style.border = "4px solid red".

const getInputOne = document.querySelector('.i-15');
const btnEight = document.querySelector('.b-15');

btnEight.onclick = function t15() {
    getInputOne.style.border = "4px solid red";
}

// Task 16 По нажатию на кнопку .b-16 выполняется функция t16. Функция получает из .i-16-1 и i-16-2 числа.
// Выведите в .out-16 сумму данных чисел по нажатию кнопки b-16. Не переводите полученное из input в число!!!!

const getNum = document.querySelector('.i-16');
const getNumThree = document.querySelector('.i-16-2');
const btnTask = document.querySelector('.b-16');
let getDivTask = document.querySelector('.out-16');

btnTask.onclick = function t16() {
    let c = getNum.value;
    let s = getNumThree.value;
    getDivTask.innerHTML = c + s;
}

// Task 17 По нажатию на кнопку .b-17 выполняется функция t17. Функция получает из .i-17 число. Изучите работу кода и
// запомните отличия. Попробуйте ввести числа 5, 4zz, zz4, -200, 33.05

const getInputseventeen = document.querySelector('.i-17');
const btnseventeen = document.querySelector('.b-17');

btnseventeen.onclick = function t17() {
    let getNum = +getInputseventeen.value;
    console.log(getNum);
}

// Task 18 По нажатию на кнопку .b-18 выполняется функция t18. Функция получает из .i-18 число в переменную a.
// Выводит в out-18 результат операции parseFloat(a). Попробуйте ввести значения 5, 33.02, 33.9a, -20.01

const getNumEighteen = document.querySelector('.i-18');
const btnEighteen = document.querySelector('.b-18');
let getDivEighteen = document.querySelector('.out-18');

btnEighteen.onclick = function t18() {

    let a = getNumEighteen.value
    getDivEighteen.innerHTML = parseFloat(a);
    getNumEighteen.value = '';
}

// Task 19 По нажатию кнопки .b-19 функция t19 дожна в out-19 вывести сумму двух отрицательных чисел из input .i-19-1 и .i-19-2.

const getNumNineteen = document.querySelector('.i-19');
const getNineteen = document.querySelector('.i-19-2');
const btnNineteen = document.querySelector('.b-19');
let getDivNineteen = document.querySelector('.out-19');

btnNineteen.onclick = function t19() {
    let c = +getNumNineteen.value;
    let s = +getNineteen.value;
    getDivNineteen.innerHTML = c + s;
}

// TAsk 20 При нажатии на кнопку .b-20 в out-20 выводится число - сколько раз была нажата кнопка .b-20.

const btnTwenty = document.querySelector('.b-20');
let getTwenty = document.querySelector('.out-20');

btnTwenty.onclick = function t20() {
    getTwenty.innerHTML++ ;
}
