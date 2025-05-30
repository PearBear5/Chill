const main = document.querySelector('main')
const voiceSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readbtn = document.getElementById('read')
const togglebtn = document.getElementById('toggle')
const closebtn = document.getElementById('close')


const data = [
    {
        image: '../images/angry.jpg',
        text: "Gurrr!"
    },
    {
        image: '../images/drink.jpg',
        text: "Time to drink water"
    },
    {
        image: '../images/food.jpg',
        text: "Nom nom nom"
    },
    {
        image: '../images/grandma.jpg',
        text: "Are you my grandson?"
    },
    {
        image: '../images/happy.jpg',
        text: "Yipee!"
    },
    {
        image: '../images/home.jpg',
        text: "Are house are house, in the middle of..."
    },
    {
        image: '../images/hurt.jpg',
        text: "Ouch!"
    },
    {
        image: '../images/outside.jpg',
        text: "Touch grass"
    },
    {
        image: '../images/sad.jpg',
        text: "Im sad :("
    },
    {
        image: '../images/scared.jpg',
        text: "Shiver me timbers, i gotta skiddadle"
    },
    {
        image: '../images/school.jpg',
        text: "School time"
    },
    {
        image: '../images/tired.jpg',
        text: "Big yawn"
    },
]


data.forEach(createBox)
function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src ="${item.image}" alt="${item.text}" />
        <p class="info"> ${item.text} </p>
    `
    main.appendChild(box)
}
