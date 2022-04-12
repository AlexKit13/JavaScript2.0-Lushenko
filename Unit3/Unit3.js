// Task 1
document.querySelector('.b-1').onclick = f1;

function f1() {
    const out = document.querySelector('.out-1');
    const val = +document.querySelector('.i-1').value;

    if (val == 4) {
        out.innerHTML = true;
    } else {
        out.innerHTML = false;
    }
}

// Task 2
document.querySelector('.b-2').onclick = f2;

function f2() {
    let a21 = 22;
    let a22 = 5;
    const out = document.querySelector('.out-2');

    if (a21 > a22) {
        out.innerHTML = a21;
    } else {
        out.innerHTML = a22;
    }
}

// Task 3

document.querySelector('.b-3').onclick = f3;

function f3() {
    const out = document.querySelector('.out-3');
    const valOne = +document.querySelector('.i-31').value;
    const valTwo = +document.querySelector('.i-32').value;

    if (valOne > valTwo) {
        out.innerHTML = valOne;
    } else {
        out.innerHTML = valTwo;
    }
}

// Task 4

document.querySelector('.b-4').onclick = f4;

function f4() {
    const out = document.querySelector('.out-4');
    const val = +document.querySelector('.i-4').value;

    if (val >= 18) {
        out.innerHTML = 1;
    } else if (val < 18) {
        out.innerHTML = 0;
    }
}

// Task 5

document.querySelector('.b-5').onclick = f5;

function f5() {
    const out = document.querySelector('.out-5');
    const val = +document.querySelector('.i-5').value;

    switch (val < 0 || val === 0 || val > 0) {
        case val < 0:
            out.innerHTML = 'm';
            break;
        case val === 0:
            out.innerHTML = 0;
            break;
        case val > 0:
            out.innerHTML = 1;
            break;
    }
}

// Task 6

document.querySelector('.b-6').onclick = f6;

function f6() {
    const out = document.querySelector('.out-6');
    const val = +document.querySelector('.i-6').value;

    if (val %2 == 0) {
        out.innerHTML = 'even';
    } else if (val %2 !== 0) {
        out.innerHTML = 'odd';
    }
}

// Task 7

document.querySelector('.b-7').onclick = f7;

function f7() {
    const out = document.querySelector('.out-7');
    const valOne = document.querySelector('.i-71').value;
    const valTwo = document.querySelector('.i-72').value;

    if (valOne && valTwo) {
        out.innerHTML = Math.pow(valOne, valTwo);
    }
}

// Task 8

document.querySelector('.b-8').onclick = f8;

function f8() {
    const selector = document.querySelector('.s-8').value;
    const out = document.querySelector('.out-8');

    switch (selector) {
        case '1':
            out.innerHTML = 'one';
            break;
        case '2':
            out.innerHTML = 'two';
            break;
        case '3':
            out.innerHTML = 'three';
            break;
    }
}

// Task 9

document.querySelector('.b-9').onclick = f9;

function f9() {
    const out = document.querySelector('.out-9');
    const val = +document.querySelector('.i-9').value;


    if (val >= 1 && val <= 32) {
        out.innerHTML ='1';
    }else if (val >= 33 && val <= 43) {
        out.innerHTML = '2';
    }else if (val >= 44 && val <= 64) {
        out.innerHTML = '3';
    }else {
        out.innerHTML = '0';
    }
}

// Task 10

document.querySelector('.b-10').onclick = f10;

function f10() {
    const selector = document.querySelector('.s-100');
    const out = document.querySelector('.out-10');

    out.innerHTML = selector.value;
}

// Task 11

const select = document.querySelector('.s-110');
const out = document.querySelector('.out-11');

select.onchange = function () {
        out.innerHTML = select.value;
}

// Task 12

document.querySelector('.b-12').onclick = f12;
let i120 = document.querySelector('.i-120');

function f12(){
     let v = i120.value;
     document.querySelector('.out-12').innerHTML = (typeof v);
}

// Task 13

document.querySelector('.b-13').onclick = f13;
let i130 = document.querySelector('.i-120');

function f13(){
    let v = i130.value;
    document.querySelector('.out-13').innerHTML = (typeof v);
}

// Task 14

document.querySelector('.b-14').onclick = f14;

function f14() {
    const selector = document.querySelector('.s-143').value;
    const inputOne = +document.querySelector('.i-141').value;
    const inputTwo = +document.querySelector('.i-142').value;
    const out = document.querySelector('.out-14');

    if (selector === '+') {
        out.innerHTML = inputOne + inputTwo;
    }else if (selector === '-') {
        out.innerHTML = inputOne - inputTwo;
    }else if (selector === '*') {
        out.innerHTML = inputOne * inputTwo;
    }else if (selector === '/') {
        out.innerHTML = inputOne / inputTwo;
    }
}

// Task 15

document.querySelector('.b-15').onclick = f15;

function f15(){
    const selectorOne = +document.querySelector('.s-151').value;
    const selectorTwo = +document.querySelector('.s-152').value;
    const selector = document.querySelector('.s-153').value;
    const out = document.querySelector('.out-15');

   if (selector === '&&') {
       out.innerHTML = selectorOne && selectorTwo;
   }else if (selector === '||') {
       out.innerHTML =  selectorOne || selectorTwo;
   }
}



