let input = document.querySelector("textarea");
let ilustration = document.getElementById("ilustration-info");

const btnEncrypt = document.getElementById("encrypt-btn");
const btnDecrypt = document.getElementById("decrypt-btn");
const showDisplay = document.getElementById('display-text');
const textToShow = document.getElementById('displayed-text');
input.value = '';

btnEncrypt.onclick = encrypt;
btnDecrypt.onclick = decrypt;

let flag1 = false;
let flag2 = false;

function encrypt() {
    if (input.value != '') {
        if (flag2 || flag1) {
            cleanScreen();
        }
        let string = input.value;
        ilustration.style.display = 'none';
        let array = string.split('');
        let arrayCopy= [...array];
        const replacements = ['imes', 'ai', 'enter', 'ober', 'ufat'];
        const vowels = ['i', 'a', 'e', 'o', 'u'];
        for (let i=0; i < vowels.length; i++) {
            for (let j=0; j < array.length; j++) {
                if (vowels[i] === array[j]) {
                    arrayCopy.splice(j, 1, replacements[i]);
                }
            }
        }
        encryptedMessage = arrayCopy.join('');
        showDisplay.style.display = 'initial';
        writeOnScreen(encryptedMessage);
        input.value ='';
        flag2 = true;
    }
}

function decrypt() {
    if (input.value != '') {
        if (flag1 || flag2) {
            cleanScreen();
        }
        ilustration.style.display = 'none';
        let string = input.value;
        const replacements = ['imes', 'ai', 'enter', 'ober', 'ufat'];
        const keyLetters = [/imes/g, /ai/g, /enter/g, /ober/g, /ufat/g];
        const vowels = ['i', 'a', 'e', 'o', 'u'];
        for (let i = 0; i < replacements.length; i++) {
            if(string.includes(replacements[i])) {
                string = string.replace(keyLetters[i], vowels[i]);
            }
        }
        showDisplay.style.display = 'initial';
        writeOnScreen(string);
        input.value ='';
        flag1 = true;
    }
}

function writeOnScreen(string) {
    const paragraph = document.createElement('textarea');
    const node = document.createTextNode(string);
    paragraph.id = 'text-on-screen';
    paragraph.readOnly = 'true';
    paragraph.appendChild(node);
    textToShow.appendChild(paragraph);
}

function cleanScreen() {
    const element = document.getElementById('text-on-screen');
    element.remove();
}

showDisplay.style.display = 'none';

function textCopy() {
    let textToCopy = document.querySelector("#text-on-screen");
    textToCopy.select();
    document.execCommand('copy');
}

document.querySelector("#copy-btn").addEventListener("click", textCopy);