const duck = document.querySelector('.duck')
const count = document.querySelector('count')

let amount = 0

duck.addEventListener('click', ()=>{
    amount = amount + 1
    count.innerText = `Ducks:${amount}`
})
