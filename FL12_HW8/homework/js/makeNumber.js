const makeNumber = (str) => {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (parseInt(str[i]) || parseInt(str[i]) === 0) {
            result = result + str[i];
        }
    }
    console.log(result);
}

makeNumber('erer384jjjfd123');
makeNumber('123098h76gfdd');
makeNumber('ijifjgdj');