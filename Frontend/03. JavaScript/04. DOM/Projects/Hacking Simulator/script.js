const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item;
    document.body.append(div);
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve()
        }, timeout * 1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.body.getElementsByTagName('div');
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 4);
        }
        else {
            last.innerHTML = last.innerHTML + ".";
        }
    }, 200);

    const text = ["Initialized hacking now reading your data",
        "Reading your files",
        "Password files detedcted",
        "Sending all the passwords and personal files to server",
        "Cleaning up"
    ]

    for (const item of text) {
        await addItem(item);
    }

    await randomDelay();
    clearInterval(t);
}

main();

// _________________________________________________

//                  Another way
// _________________________________________________


const messages = [
    "Initializing Hacking",
    "Reading your Files",
    "Password files Detected",
    "Sending all the passwords and personal files to server"
];

const terminal = document.getElementById('terminal')
let index = 0;

function showMessage() {
    if (index >= messages.length) return;

    const messageText = messages[index];
    const messageElement = document.createElement('div');
    messageElement.textContent = messageText;

    const dots = document.createElement('span');
    dots.className = 'blinking';
    dots.textContent = '....';

    messageElement.appendChild(dots);
    terminal.appendChild(messageElement);

    const delay = Math.floor(Math.random() * 2000) + 1000;

    setTimeout(() => {
        dots.classList.remove();
        index++;
        showMessage()
    }, delay);
}

showMessage();