// Lerik

let a = [
    [1,2,3],
    [4,5],
    [6]
]
a[2].push(7,8,9,10);

let out = '';
for (let i = 0; i < a.length; i++) {

    for (let k = 0; k < a[i].length; k++) {

        out += [i] + ':' + a[i][k] + ' '
    }
    out += '<br>';
}

document.querySelector('.out').innerHTML = out;

const
let a = fun
// let outTwo = '';
// let b = a.map((item, index) => {
//     outTwo += `${index} : ${item}`
//     outTwo += '<br>'
// })
//
// document.querySelector('.out').innerHTML = outTwo;


// Olga
//
// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//
// let b = a.map((item, index) => {
//     if (index <= 4) {
//        return item * 5;
//     }else if (index > 4) {
//         return item
//     }
// })
// console.log(b)

// Oleg

// let a = ['white', 'pink', 'red','сhocolate','scarlet', 'black','sand', 'orange','purple', 'green', 'blue', 'yellow','plum', 'gray'];
//
// let b = [];
// let outOne = '';
//
//  a.forEach((item) => {
//    if (item === 'red' || item === 'yellow' || item === 'green') {
//        b.push(item)
//    }
// });
//
// document.querySelector('.one').onclick = () => {
//     document.querySelector('.one').style.background = b[0]
// };
//
// document.querySelector('.two').onclick = () => {
//     document.querySelector('.two').style.background = b[2]
// };
//
//
// document.querySelector('.tree').onclick = () => {
//     document.querySelector('.tree').style.background = b[1]
// };


// Maksim

// let str = 'Привет Я Максим ЗЕ Депутат Юный Мамкин Хакер';
//
// let arr = str.split(' ');
//
// function f2() {
//     let out  = document.querySelector('.out-3');
//
//     out.innerHTML = arr[Math.floor(Math.random() * arr.length)]
//
// }
//
// document.querySelector('.btn-1').onclick = f2;
// console.log(arr);


// Evgen

// let date =  '2022/12/31'
//  let arr = date.split('')
//
// arr.splice(4,1)
// arr.splice(6,1)
//
// let sum = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     sum += Number(arr[i]);
// }
//
// console.log(sum);







