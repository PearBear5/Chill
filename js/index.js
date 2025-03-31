const bar = document.querySelector('.bar')
const pop = document.querySelector('.pop')
const hidden = document.querySelector('.hidden')
const links = document.querySelector('.links')

pop.addEventListener('click', () => {
    bar.classList.toggle('active')
    hidden.classList.toggle('active')
    links.classList.toggle('active')

})
