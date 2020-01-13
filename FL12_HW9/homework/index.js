//Task 1
console.log('Task 1');

const _1 = 1;
const _2 = 2;
const _3 = 3;
const _5 = 5;
const _7 = 7;
const _8 = 8;
const _10 = 10;
const _14 = 14;
const _29 = 29;
const _30 = 30;
const _31 = 31;
const _48 = 48;
const _58 = 58;
const _365 = 365;
const _2019 = 2019;

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

function getArrayOfKeys(arr, key) {
    let newActors = [];
    executeforEach(arr, function (el) {
        newActors.push(el[key]);
    })
    console.log(newActors);
}

getArrayOfKeys(actors, 'name');

//Task 8
console.log('Task 8');

function substitute(arr) {
    let newArr = [];
    mapArray(arr, function (el) {
        if (el < _30) {
            newArr.push('*')
        } else {
            newArr.push(el);
        }
    })
    console.log(newArr);
}

substitute([_58, _14, _48, _2, _31, _29]);

//Task 9
console.log('Task 9');

const date = new Date(_2019, 0, _2);

function getPastDay(date, xDays) {
    let dayOfMonth = new Date();
    dayOfMonth.setDate(date.getDate() - xDays);
    console.log(dayOfMonth.getDate());
}

getPastDay(date, _1); // 1, (1 Jan 2019)
getPastDay(date, _2); // 31, (31 Dec 2018)
getPastDay(date, _365); // 2, (2 Jan 2018)

//Task 10
console.log('Task 10');

function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + _1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < _10) {
        hours = '0' + hours;
    }
    if (minutes < _10) {
        minutes = '0' + minutes;
    }
    console.log(`${year}/${month}/${day} ${hours}:${minutes}`);
}

formatDate(new Date('6/15/2018 09:15:00')) // "2018/6/15 09:15"
formatDate(new Date()) // "2020/1/7 12:56" // gets current local time
