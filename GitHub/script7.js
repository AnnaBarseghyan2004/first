let array = [1,2,2,2,1]

let array1 = [...array]

if (array.join("") === array1.reverse().join("")){
    alert ("your array is palindrome!");
}
else{
    array[0]= array[array.length - 1]
    array[array.length - 1]= array[0]
    alert(array)
}

