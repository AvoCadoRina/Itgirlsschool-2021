function checkSpam() {
    let strings = [];
    const div = document.getElementById('div1');
    let newStr = "";
    let str = document.getElementById("str").value;
    let newstring = str.toString();
    let lowerStr = newstring.toLowerCase();
    x = lowerStr.replace(/viagra/g,  "***");
    y = x.replace(/xxx/g,  "***");
    strings.push(y);
    div.innerHTML += strings + '<br>';
}