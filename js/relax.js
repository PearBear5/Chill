const container = document.getElementById('container')
const text = document.getElementById('text')

setInterval(breathAnimation(), 7500)

function breathAnimation() {
    text.innerHTML = 'Breath In'
    container.classlist.remove(shrink)
    container.classlist.add(grow)

    setTimeout( () => {
        text.innerHTML = 'Hold'
    },3000)

    setTimeout( () => {
        text.innerHTML = 'Breath Out'
        container.classlist.remove(grow)
        container.classlist.add(shrink)
    }, 4500)
}
