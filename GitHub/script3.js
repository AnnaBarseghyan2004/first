let text = prompt("Enter a string:");

let subtext = text.search("010");

if (text[text.length - 1] === "0" && text[text.length - 2] === "0") {
    text = text.replace("010", ""); 
}

alert(text);

