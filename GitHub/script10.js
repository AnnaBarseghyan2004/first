let array = [1,1,1,1,1]

let max = Math.max(...array)

for (let i = 0; i < array.length ; i++){
    if (array[i] == max){
        array[i] = 0
    }
}
alert (array)