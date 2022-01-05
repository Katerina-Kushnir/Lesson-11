//task 1
/*
function camelize(str) {
    let arr = str.split('-');

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

alert(camelize("background-color"));
alert(camelize("list-style-image"));
alert(camelize("-webkit-transition"));
*/

//task 2
/*
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

alert(filtered);
alert(arr);
*/

//task 3
/*
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 8, 1]; 
filterRangeInPlace(arr, 1, 4); 
alert(arr); 
*/

//task 4
/*
let arr = [5, 2, 1, -10, 8]; 
arr.sort(function(a, b) {return b - a});
alert(arr); 
*/

//task 5
/*
function  copySorted(arr) {
    return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"]; 
let sorted = copySorted(arr); 
alert(sorted); 
alert(arr); 
*/

//task 6
/*
function Calculator() {
    let a = +prompt('Введите первое значение');
    let option = prompt('Введите операцию');
    let b = +prompt('Введите второе значение');

    switch(option) {
        case '*':
            return(mul(a, b));
            break;
        case '/':
            return(sub(a, b));
            break;
        case '+':
            return(plus(a, b));
            break;
        case '-':
            return(minus(a, b));
            break;
        default:
            return 'Calc error';
    }
}

function mul(a, b) {
    return a * b;
}

function sub(a, b) {
    return a / b;
}

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

alert(Calculator());
*/

//task 7
/*
let vasya = { name: "Вася", age: 25 }; 
let petya = { name: "Петя", age: 30 }; 
let masha = { name: "Маша", age: 28 }; 
let users = [ vasya, petya, masha ]; 
let names = users.map(item => item.name);
alert(names); 
*/

//task 8
/*
function  sortByAge(arr) {
    arr.sort((a, b) => a.age > b.age ? 1 : -1);
}

let vasya = { name: "Вася", age: 25 }; 
let petya = { name: "Петя", age: 30 }; 
let masha = { name: "Маша", age: 28 }; 
 
let arr = [ vasya, petya, masha ]; 
 
sortByAge(arr); 
 
alert(arr[0].name);  
alert(arr[1].name); 
alert(arr[2].name);  
*/

//task 9
/*
function getAverageAge(arr) {
    return arr.reduce((prev, user) => prev + user.age, 0) / arr.length;
}

let vasya = { name: "Вася", age: 25 }; 
let petya = { name: "Петя", age: 30 }; 
let masha = { name: "Маша", age: 29 }; 
let arr = [ vasya, petya, masha ]; 
alert( getAverageAge(arr) ); 
*/

//task 10
/*
function unique(arr) {
    let result = [];

    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
  
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
  
alert(unique(strings) );
*/

//task 11
/*
function unique(arr) {  
    return Array.from(new Set(arr));
} 
let values = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O" ]; 
alert(unique(values));
*/

//task 12
/*
let map = new Map(); 
map.set("name", "John"); 
let keys = Array.from(map.keys()); //Ошибка была потому что map.keys() – возвращает итерируемый объект по ключам, а не массив
keys.push("more"); 
alert(keys);
*/

//task 13
/*
function makeCounter() {   
    let count = 0;   
    return function() {     
        return count++;   
    }; 
} 
let counter = makeCounter(); 
let counter2 = makeCounter(); 
alert( counter() ); // 0 
alert( counter() ); // 1 
alert( counter2() ); // ? - 0
alert( counter2() ); // ? - 1
//Данные два счетчика независимы, так как для каждого вызова makeCounter() создаётся новое лексическое окружение функции, со своим собственным count
*/

//task 14
/*
function Counter() {   
    let count = 0;   
    this.up = function() {     
        return ++count;   
    };   
    this.down = function() {     
        return --count; 
    }; 
} 
let counter = new Counter(); 
alert(counter.up()); // ? - 1
alert(counter.up()); // ? - 2
alert(counter.down()); // ? - 1 
//Функция будет работать и покажет сначала 1, потом 2 и потом 1.
*/

//task 15
/*
function factorial(n) {
    return (n != 1) ? n * factorial (n - 1) : 1;
}

alert(factorial(5));
*/