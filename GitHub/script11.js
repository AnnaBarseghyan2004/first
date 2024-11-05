let array = [4,3,5,1,2,4]

let min = Math.max(...array)

for (let i = 0; i < array.length ; i++){
    if (array[i] == min )
        array.splice(i,0,-1,0,1)
}
alert(array)