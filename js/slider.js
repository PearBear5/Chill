const upbutton = document.querySelector('.up-button')
const downbutton = document.querySelector('.down-button')
const rightside = document.querySelector('.right-side')
const leftside = document.querySelector('.left-side')
const slideslength = rightside.querySelectorAll('div').length

//First Slide
let currentslide = 1
leftside.style.top = `${-(slideslength - currentslide) *100}%`

upbutton.addEventListener('click', () => changeSlide('up'))
downbutton.addEventListener('click', () => changeSlide('down'))


function changeSlide(direction) {
    if (direction == 'up')
    {
        if (currentslide == slideslength)
        {
            currentslide = 0
        }
        currentslide = currentslide + 1
    }
    else if (direction == 'down')
    {
        if (currentslide == 1)
        {
            currentslide = slideslength + 1
        }
        currentslide = currentslide - 1
    }

    leftside.style.top = `${-(slideslength - currentslide) *100}%`
    rightside.style.top = `${-(currentslide -1) * 100}%`
}
