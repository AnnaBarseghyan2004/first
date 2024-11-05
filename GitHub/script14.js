let str = prompt("enter your string")
let array = str.split(" ")
alert ("array = " +array)

let array1 = array.map(x => +x )
alert("array1 = " +array1)

let result = array1.filter(function(x){return x > 9 && x < 100}) 

// kam el (x => (x>9 && x<100))

alert ("result = " +result)

let result1 = result.reduce(function(sum,x){if (x % 2 == 0 && x % 5 == 0) sum += x; return sum},0)

// kam el ((sum,x) => {if (x % 2 == 0 && x % 5 == 0) sum += x; return sum},0)

    alert ("result1 = " +result1)

// anjatel erknish tveri entazangvac, zuyg ev hingin patik tveri gumary tpel