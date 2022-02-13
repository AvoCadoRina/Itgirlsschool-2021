function checkSpam() {
    let strings = [];
    let newStr = "";
    let str = document.getElementById("str").value;
    let newstring = str.toString();
    let lowerStr = newstring.toLowerCase();
    x = lowerStr.replace(/viagra/g,  "***");
    y = x.replace(/xxx/g,  "***");
    strings.push(y);
    document.getElementById('div1').innerHTML = strings.join('\n');
}