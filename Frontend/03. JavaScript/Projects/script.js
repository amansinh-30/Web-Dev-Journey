// let input = prompt("What you want to do with your To-Do List: ");
// let todos = [];

// while (input !== 'quit' && input !== 'q') {
//     if (input === 'list') {
//         console.log('*********');
//         for (let i = 1; i < todos.length; i++) {
//             console.log(`${i}: ${todos[i]}`);
//         }
//         console.log("*********")
//     } else if (input === 'new') {
//         const newTodo = prompt("Enter what do you want to add in your To-Do List: ");
//         todos.push(newTodo);
//         console.log(`${newTodo} added successfully.`);
//     } else if (input === 'delete') {
//         const index = parseInt(prompt("Enter what 'Index' do you want to delete:"));
//         if (!Number.isNaN(index)) {
//             const del = todos.splice(index, 1);
//             console.log(`${del} deleted successfully.`);
//         } else {
//             console.log("Unknown Index");
//         }
//     }

//     input = prompt("What you want to do with your To-Do List: ");
// }

// console.log('Okay, Quit To-Do..!!');



let input = parseInt(prompt("Enter what you want to do with your To-Do?"));
console.log("1. Add New To-Do");
console.log("2. List All To-Do");
console.log("3. Delete Any Task");
console.log("4. Quit");
let todos = [];

while (input !== 4 && input !== 'q') {
    if (input === 2) {
        console.log("-->> xxxx TO-DO LIST xxxx <<--");
        for (let i = 1; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("-->> xxxx TO-DO LIST xxxx <<--");
    } else if (input === 1) {
        const newTodo = prompt("Enter what do you want to add in your To-Do: ");
        todos.push(newTodo);
        console.log(`${newTodo} added successfully.`)
    } else if (input == 3) {
        const index = parseInt(prompt("Enter index of your task, Which you want to delete: "));
        if (!Number.isNaN(index)) {
            const del = todos.splice(index, 1);
            console.log(`${del} deleted successfully.`)
        } else {
            console.log("Unknown Index.")
        }
    }
    input = parseInt(prompt("Enter what you want to do with your To-Do?"));
}

console.log("Okay, Quit To-Do..!!")