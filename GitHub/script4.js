let text = prompt("Enter a string:");

let subtext = text.search("010");

if (text.startsWith("00")){
    text = text.replace("010", ""); 
}
else {
    text = text + "AAA";
}

alert(text)