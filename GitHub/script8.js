let array = [1, 1,1,1,1,1];

let max = Math.max(...array);
let min = Math.min(...array);

if (max === min) {
    alert("Your array is constant!");
} else {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === max) {
            array[i] = min; 
        } else if (array[i] === min) {
            array[i] = max; 
        }
    }
    alert(array); 
}