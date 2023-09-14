// JavaScript source code
let cont = 0;
let i = 97;
let f = 1;
let x = (i-f)/42;

function add(id) {
    if (document.getElementById(id).checked) i -= x;
    else i += x;

    document.getElementById('title').style.backgroundPositionX = '-' + i + 'vw'; // -97 a -1
}