const isLeapYear = (fullDate) => {
    let date = new Date(fullDate);
    let year = date.getFullYear();

    if (year) {
        if (!((year % 4) || (!(year % 100) && (year % 400)))) {
            console.log(year + ' is a leap year');
        } else {
            console.log(year + ' is not a leap year');
        }
    } else {
        console.log('Invalide date');
    }
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);
