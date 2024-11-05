text = prompt()

if (text.includes("ABC")){
    text.toLocaleUpperCase()
    for (let i = 0; i < text.length; i++){
        if(!isNaN(text[i])){
            text.replaceAll(text[i],"*") 
        }
    }
}
else{
    text.search(",")
    text.replace(text[text.search(",")-1]," ")
    text.replace(text[text.search(",")+1]," ")
}

alert(text) 