// function createCard(title, channel, views, uploaded, duration, thumbnail) {

//     let viewStr
//     if (views < 1000) {
//         viewStr = views;
//     }
//     else if (views > 100000) {
//         viewStr = views / 1000000 + 'M';
//     }
//     else {
//         viewStr = views / 1000 + 'K';
//     }
//     let html = `<div class="card">
//             <div class="image">
//                 <img src="${thumbnail}">
//                     <div class="capsule">${duration}</div>
//             </div>
//             <div class="text">
//                 <h1>${title}</h1>
//                 <p>${channel} . ${viewsNumber} views. ${uploaded} months ago</p>
//             </div>
//         </div>`
// }

// document.querySelector('.container').innerHTML = document.querySelector('container').innerHTML + html

// createCard('Introduction to Backed | Sigma Web Dev Video', 'Code With Apex', 700000, 9, '32:09', 'https://images.unsplash.com/photo-1747767763480-a5b4c7a82aef?q=80&w=1204&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')



function createCard(title, channel, views, upload, duration, thumbnail) {

    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + 'M';
    }
    else {
        viewStr = views / 1000 + 'K';
    }
    let html = `<div class="card">
            <div class="image">
                <img src="${thumbnail}"
                     alt="">
                    <div class="capsule">${duration}</div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${channel} . ${viewStr} views . ${upload} months ago</p>
            </div>
        </div>`

    document.querySelector('.container').innerHTML = document.querySelector('.container').innerHTML + html;
}

createCard("Welcome to Fitness Journey", "FitwithAmax", 760000, 4, "30:03", "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
createCard("30 Days Coding Challange", "Apex Royal", 200, 14, "30:03", "https://plus.unsplash.com/premium_photo-1694743671394-60034a1b2f65?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
createCard("30 Days Challange", "Apex Royal", 570000, 14, "30:03", "https://images.unsplash.com/photo-1605514449459-5a9cfa0b9955?q=80&w=1209&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")




