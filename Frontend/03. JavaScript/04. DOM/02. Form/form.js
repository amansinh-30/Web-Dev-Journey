// Get form and message container
const loginForm = document.querySelector('#loginForm');
const userMessages = document.querySelector('#userMessages');

// Handle form submission
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop form from submitting to server

    const username = loginForm.elements['username'].value;
    const password = loginForm.elements['password'].value;

    // Add user login message
    addUserMessage(username);

    // Clear form fields
    loginForm.reset();
});

// Function to add a success message
function addUserMessage(username) {
    const li = document.createElement('li');
    li.textContent = `${username} logged in successfully.`;
    userMessages.appendChild(li);
}


const input = document.querySelector('#inputEve');
const h4 = document.querySelector('h4');

input.addEventListener('input', () => {
    if (input.value === ' ') {
        h4.innerText = 'Enter your name'
    } else {
        h4.innerText = `Welcome, ${input.value}`;
    }
})

const button = document.querySelector('.colorChange');
const hidden = document.querySelector('#hidden');

button.addEventListener('click', (e) => {
    hidden.style.backgroundColor = randomColor();
    e.stopPropagation();    
})
hidden.addEventListener('click', () => {
    hidden.classList.toggle('hide');
})
const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`
    // const makeRandom = 
}