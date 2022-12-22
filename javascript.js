let text = prompt("Text u want to put in")
let line = ""
let times = parseInt(prompt("Amount of times?"));

for(let i=0; i < times; i++){

    line += "<br>" +""+ text;
}
document.getElementById("temes").innerHTML = line;