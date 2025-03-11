const duck = document.querySelector('.duck')
const count = document.querySelector('.count')
const bread = document.querySelector('.bread')

let amount = 0
let bram = 0

duck.addEventListener('click', ()=>{
    amount = amount + 1
    count.innerText = `Ducks:${amount}`
})

duck.addEventListener('click', ()=>{
    if (amount > 9)
    {
        amount = amount - 10
        bram = bram + 1
        bread.innerText = `Costs 10 Ducks: ${bram}`
    }
})

let int = setInterval(add, 3)

function add() {
    amount = amount + bram
}


