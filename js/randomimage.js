const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    image.src = "images/" + images[randomIndex];
}