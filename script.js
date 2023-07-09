console.log('Hello world!');

let x;
console.log (x);
 
x = 7;
console.log (x);

x = 'bye';
console.log (x);

const pi = 3.1415;
//pi = 3.14; пример ошибки

let y =x;
console.log(y);

console.log('pi =' + pi);

const exp = pi;
console.log(`exp = ${exp} or ${pi}`);

x = true;
console.log(x);// true

x = null;
console.log(x);

 let res = 7 % 2 // остаток от деления
 console.log(res);// 1

 //неявное приведение типа:

  res = 'true ' + 5;
  console.log(res); // true 5

  res = true + 5; //true = 1, false = 0
  console.log(res);// 6

  res = true + true;// 1+1
  console.log(res);//2

  x = '2' == 2;
  console.log(x);// true

  x = '2' === 2;
  console.log(x);// false

  res = 5 + '';
  console.log(res);

  res = +'5';// результат число 5, а не строка

  res = +true; //1

switch (res) {
    case 5: //если равно 5
        console.log('number: $(res)');// то выдай это 
        break;
    case '5'://если равно  строке 5
        console.log('string: $(res)'); // то выдай это 
        break;
    default:// остальные случаи
        console.log('Not a 5');;
}

let age =17;
let vol = age > 17 ? 42 : 1.5;// 1.5 
console.log(vol);

console.log(pi.toFixed(2));//отображай только 2 знака после запятой

++age;// вначале прибавляем 1, а потом используем значение
age++;//вначале используем значение, в потом прибавляем 1

x = 10;
res = x++ + ++x;// 10 // 12 = 22
console.log(res);

res = sumDigits(1234);
console.log('res = $(res)');//10

function sumDigits(x) {
    
}

res = luckyNumber(123871);// 1+2+3 == 8+7+1
console.log( res? 'lucky' : 'unLucky');

function luckyNumber(x) {
    
}
function banana() {
    let a = 'a';
    let b = 'b';
}//должно вывести bananassss