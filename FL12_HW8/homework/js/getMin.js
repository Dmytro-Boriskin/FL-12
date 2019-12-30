const array = [3, 0, -3];

const getMin = () => {
    let min = array[0];
    for( let i = 0; i < array.length; i++) {
        if(min > array[i]) {
            min = array[i];
        }
    }
    console.log('Min value in array is --> ' + min);
}
getMin(array);
