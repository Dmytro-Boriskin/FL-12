let str = 'erer384jj4444666888jfd123';
let str2 = 'jdjjka000466588kkkfs662555';
let str3 = '';

const makeNumber = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) || parseInt(str[i]) === 0) {
            result = result + str[i];
        }
    }
    return result;
}

const countNumbers = (str) => {
    let arr = makeNumber(str).split('');
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            obj[arr[i]]++
        } else {
            obj[arr[i]] = 1;
        }
    }
    console.log(obj);
}

countNumbers(str);
countNumbers(str2);
countNumbers(str3);
