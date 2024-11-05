let array = []

let max = Math.max(...array)

for (let i = 0; i <= array.length ; i++){
    if (array[i] == max ){
        array.splice(i,5)
    }
}
alert(array)