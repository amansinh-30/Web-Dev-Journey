// const sing = async () => {
//     throw new Error("OH NO, PROBLEM");
// }


// sing()
// .then ((data) => {
//     console.log('PRONISE RESOLVED YAYY!', data);
// }) 
// .catch((err) => {
//     console.log('OH NO, WE HAVE PROBLEM.');
//     console.log(err);
// })


// const login = async (username, password) => {
//     if (!username || !password) throw 'MISSING CREDENTIALS';
//     if (password === 'Great') return 'WELCOME'
//     throw 'Invalid Password'
// }

// login('apex', 'Great')
//     .then(msg => {
//         console.log('Woahh you successfully logging.');
//         console.log(msg);
//     })
//     .catch(err => {
//         console.log('OH NO, You did something wrong.');
//         console.log(err);
//     })

const life = async (username, password) => {
    if (!username || !password) throw 'MISSING CREDENTIALS'
    if (password === 'hustle') return "SUCCESS"
    throw 'Not Useful Path'
}

life("Amax", "hustle")
    .then(msg => {
        console.log('UNLOCK TRUE MEANING OF THE LIFE');
        console.log(msg);
    })
    .catch(err => {
        console.log('YOU NEED TO WORK MORE HARDER.');
        console.log(err);
    })