let newStr = "";
let oldstr = prompt('Type your message', '');

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if (lowerStr.includes('viagra')) {
        newStr = str.replace(/viagra/g,  "***");
    } else if (lowerStr.includes('xxx')) {
        newStr = str.replace(/xxx/g,  "***");
    } else {
        newStr = str;
    }
    return newStr
}
console.log(checkSpam(oldstr));

let strings = [];

function copyText() {
    val = document.getElementById('inp1').value;
    strings.push(val);
    document.getElementById('div1').innerHTML = strings.join('\n');
}