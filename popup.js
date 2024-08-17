const keys = {
    numbers: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    row1: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    row2: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    row3: ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
    row4: [' '] 
};

let isCapsLock = false;

const keyboardContainer = document.getElementById('keyboardContainer');
const inputArea = document.getElementById('inputArea');
const capsLockButton = document.getElementById('capsLock');
const clearButton = document.getElementById('clearButton');
const backspaceButton = document.getElementById('backspaceButton');

function renderKeys() {
    keyboardContainer.innerHTML = '';

    keys.numbers.forEach(key => {
        const keyButton = document.createElement('div');
        keyButton.className = 'key';
        keyButton.textContent = key;
        keyButton.addEventListener('click', () => handleKeyPress(key));
        keyboardContainer.appendChild(keyButton);
    });

    keys.row1.forEach(key => {
        const keyButton = document.createElement('div');
        keyButton.className = 'key';
        keyButton.textContent = isCapsLock ? key.toUpperCase() : key;
        keyButton.addEventListener('click', () => handleKeyPress(key));
        keyboardContainer.appendChild(keyButton);
    });

    keys.row2.forEach(key => {
        const keyButton = document.createElement('div');
        keyButton.className = 'key';
        keyButton.textContent = isCapsLock ? key.toUpperCase() : key;
        keyButton.addEventListener('click', () => handleKeyPress(key));
        keyboardContainer.appendChild(keyButton);
    });

    keys.row3.forEach(key => {
        const keyButton = document.createElement('div');
        keyButton.className = 'key';
        keyButton.textContent = isCapsLock ? key.toUpperCase() : key;
        keyButton.addEventListener('click', () => handleKeyPress(key));
        keyboardContainer.appendChild(keyButton);
    });

    const spaceButton = document.createElement('div');
    spaceButton.className = 'key space';
    spaceButton.textContent = isCapsLock ? 'SPACEBAR' : 'Spacebar'; // Updated text
    spaceButton.addEventListener('click', () => handleKeyPress(' '));
    keyboardContainer.appendChild(spaceButton);
}

function handleKeyPress(key) {
    if (key === ' ') {
        inputArea.value += ' ';
    } else {
        inputArea.value += isCapsLock ? key.toUpperCase() : key;
    }
}

function handleBackspace() {
    inputArea.value = inputArea.value.slice(0, -1);
}

function toggleCapsLock() {
    isCapsLock = !isCapsLock;
    capsLockButton.textContent = isCapsLock ? 'CAPS LOCK' : 'Caps Lock';
    clearButton.textContent = isCapsLock ? 'CLEAR' : 'Clear';
    backspaceButton.textContent = isCapsLock ? 'BACKSPACE' : 'Backspace';
    renderKeys();
}

capsLockButton.addEventListener('click', toggleCapsLock);

clearButton.addEventListener('click', () => {
    inputArea.value = '';
});

backspaceButton.addEventListener('click', () => {
    handleBackspace();
});


// function copyPassword() {
//     passwordBox.select();
//     document.execCommand("copy");
// }


function copyToClipboard() {
    const text = inputArea.value;
    if (text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    }
}

const copyButton = document.getElementById('copyButton');
copyButton.addEventListener('click', copyToClipboard);


renderKeys();