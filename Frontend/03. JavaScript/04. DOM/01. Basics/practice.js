// const squarPic = document.getElementsByClassName('square')
// for (let img of squarPic) {
//     img.src = "https://i0.wp.com/www.satvai.com/wp-content/uploads/2019/07/McMurrayHatchery-Silkies.jpg?fit=500%2C500&ssl=1"
// }

const links = document.querySelectorAll('p a')
// for (let link of links){
//     console.log(link.href)
// }

for (let link of links) {
    link.style.color = '#274c77'
    link.style.textDecoration = 'underline #f95738'
    link.style.fontWeight = 'bold'
}

const name = document.querySelector('h1');
name.style.color = 'olive'

const newH3 = document.createElement('h3');
newH3.innerText = 'HUSKY';
document.body.appendChild(newH3);
newH3.style.color = '#00b4d8';
newH3.style.fontSize = '2rem';

const pic = document.createElement('img');
pic.src = 'https://imgs.search.brave.com/FMlT7ey_QQ_JsIOYBK1qt0jkwv5zXINwXGaP_MagC4c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTMx/OTExMDQ0L3Bob3Rv/L2h1c2t5LWRvZy5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/ZDk2QmdpM0dHMWl2/X28zOTZtalkta3M5/YjFSVWwzS1p3YS10/M0tndDJVZz0'

document.body.appendChild(pic);
pic.classList.add('square');

const p = document.createElement('p');
const b = document.createElement('b');
// b.innerText = 'Siberian Huskies';
// document.body.append(b);


p.innerText = 'Siberian Huskies are a breed of medium-sized working sled dogs known for their thick double coats and friendly nature. They are originally from Siberia and were developed by the Chukchi people for sled pulling and companionship.Huskies are active and energetic, requiring a lot of exercise and mental stimulation. They are not suitable for sedentary lifestyles and need daily runs, hikes, or long walks.'
document.body.prepend(p);
// document.body.prepend(b);
document.body.prepend(pic);
document.body.prepend(newH3);
p.style.fontSize = '1.2rem'

// const newheading =  document.createElement('h3');
// newheading.innerText = 'SIBERIAN';
// document.body.insertAdjacentElement('afterbegin', newheading);
// newheading.style.color = '#00b4d8';
// newheading.style.fontSize = '2rem';
// newheading.style.display = 'flex';


