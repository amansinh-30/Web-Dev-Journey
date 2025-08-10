const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement('div');
    div.innerHTML = item
    document.body.append(div)
}

const randomDelay = () => {
    return new Promise((resolve, reject) => {
        timeout = 1 + 6 * Math.random();
        setTimeout(() => {
            resolve();
        }, timeout * 1000);
    })
}

async function main() {

    let t = setInterval(() => {
        let last = document.getElementsByTagName('div');
        last = last[last.length - 1];
        if (last.innerHTML.endsWith("....")) {
            last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 2);
        }
        else {
            last.innerHTML = last.innerHTML + '.';
        }
    }, 200);

    const messages = [
        "Initialized hacking now reading your data",
        "Reading your files",
        "Password files detedcted",
        "Sending all the passwords and personal files to server",
        "Cleaning up"
    ]

    for (const item of messages) {
        await addItem(item);
    }

    await randomDelay();
    setInterval(t);
}

main();