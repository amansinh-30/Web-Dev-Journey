document.querySelector('.btn').addEventListener('click', (evt) => {
    console.log(evt)
})

const input = document.querySelector('input');
// input.addEventListener('keyup', () => {
//     console.log('KEY UP')
// })

// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// })

window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log('UP!');
            break;  
        case 'ArrowDown':
            console.log('DOWN!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        case 'ArrowLefty':
            console.log('Left!');
            break;
        default:
            console.log('IGNORED!');
    }
})