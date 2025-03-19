const duck = document.querySelector('.duck')
const count = document.querySelector('.count')
const bread = document.querySelector('.bread')

let amount = 0
let bram = 0

duck.addEventListener('click', ()=>{
    amount = amount + 1
    count.innerText = `Ducks:${amount}`
})

bread.addEventListener('click', ()=>{
    if (amount > 9)
    {
        amount = amount - 10
        bram = bram + 1
        bread.innerText = `Costs 10 Ducks: ${bram}`
        count.innerText = `Ducks:${amount}`
    }
})

let int = setInterval(add, 3000)

function add() {
    amount = amount + bram
    count.innerText = `Ducks:${amount}`
}


