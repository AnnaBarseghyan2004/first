let array = [1,1,1,1,2,1,-1,3,4,5,1,6,1]

let min = Math.min(...array)

for (let i = array.length - 1 ; i >= 0 ; i-- ){
    if (array[i] == min ){
        array.splice(i,1)
    }
}
alert (array)