const isBigger = (a, b) => {
    return a > b;
}

const isSmaller = (a, b) => {
    console.log(!isBigger(a, b));
}

isSmaller(5, -1);
