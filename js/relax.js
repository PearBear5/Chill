const container = document.getElementById('container')
const text = document.getElementById('text')

breathAnimation()
setInterval(breathAnimation, 7500)

function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classList.remove('shrink')
    container.classList.add('grow')

    setTimeout( () => {
        text.innerHTML = 'Hold'
    },3000)

    setTimeout( () => {
        text.innerHTML = 'Breath Out'
        container.classList.remove('grow')
        container.classList.add('shrink')
    }, 4500)
}
