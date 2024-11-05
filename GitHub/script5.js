text = prompt()

if (!text.includes("ABC")){
    text = text.replaceAll("1", "*")
}

alert(text)