const todoForm = document.querySelector('#todoForm');
const usrList = document.querySelector('#task');
const taskList = document.querySelector('#taskList');

todoForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const task = usrList.value.trim();

    if (task === '')
        return;

    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);

    usrList.value = '';
});

taskList.addEventListener('click', function(e) {
    e.target.nodeName === 'LI' && e.target.remove();
})