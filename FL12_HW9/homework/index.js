//Task 1
console.log('Task 1');

const _1 = 1;
const _2 = 2;
const _3 = 3;
const _5 = 5;
const _7 = 7;
const _8 = 8;

let oldArgs = ['1', _2, _3, '4'];
let newArgs = [];

function convert(oldArgs) {
    for (let i = 0; i < oldArgs.length; i++) {
        if (typeof oldArgs[i] === 'string') {
            newArgs.push(parseInt(oldArgs[i]));
        } else {
            newArgs.push(oldArgs[i] + '');
        }
    }
    return newArgs;
}
convert(oldArgs);

console.log(oldArgs);
console.log(newArgs);


//Task 2
console.log('Task 2');

function executeforEach(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

executeforEach([_1, _2, _3], function (el) {
    console.log(el * _2);
});


//Task 3
console.log('Task 3');

function mapArray(arr, callback) {
    let mappedArray = [];
    executeforEach(arr, function (el) {
        mappedArray.push(callback(parseInt(el)));
    });
    console.log(mappedArray);
}
mapArray([_2, '5', _8], function (el) {
    return el + _3;
});

//Task 4
console.log('Task 4');

function filterArray(arr, func) {
    let filteredArray = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            filteredArray.push(el);
        }
    })
    console.log(filteredArray);
}

filterArray([_2, _5, _8], function (el) {
    return el % _2 === 0;
})

//Task 5
console.log('Task 5');

function flipOver(str) {
    let flippedStr = '';
    for (let i = 0; i < str.length; i++) {
        flippedStr = str[i] + flippedStr;
    }
    console.log(flippedStr);
}

flipOver('hey world');

//Task 6
console.log('Task 6');

function makeListFromRange(arr) {
    let arrFromRange = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        arrFromRange.push(i);
    }
    console.log(arrFromRange);
}

makeListFromRange([_2, _7]);

//Task 7
console.log('Task 7');

const actors = [
    { name: 'tommy', age: 36 },
    { name: 'lee', age: 28 }
  ];

 function getArrayOfKeys (actors, name){
     console.log(actors);
 }
   
  getArrayOfKeys(actors, 'name'); // [‘tommy’, ‘lee’]
  









