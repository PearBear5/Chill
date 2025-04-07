const ball = document.createElement('div')
document.body.appendChild(ball)
const lpadel = document.createElement('div')
document.body.appendChild(lpadel)

let lpadelWidth = 20
let lpadelHeight = 150
let lpadelYposition = windowHeight / 2 - lpadelHeight

const ballRadius = 30
const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

createBall()
createlpadel()

function createBall(){
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "red"
    ball.style.position = "absolute"
    ball.style.top = `${windowHeight / 2 - ballRadius}px`
    ball.style.left = `${ballXPosition}px`
    ball.style.border = "solid"
    ball.style.borderColor = "darkred"
}

setInterval(moveBall, 10)

function moveBall(){
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition > windowWidth - 2*ballRadius || ballXPosition < 0)
    {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition > windowHeight - 2*ballRadius || ballYPosition < 0)
    {
        ballYDirection = ballYDirection * -1
    }
}

function createlpadel() {
    lpadel.style.height = `${lpadelHeight}px`
    lpadel.style.width = `${lpadelWidth}px`
    lpadel.style.backgroundColor = 'red'
    lpadel.style.position = 'absolute'
    lpadel.style.left = '30px'
    lpadel.style.top = `${lpadelYposition}px`
}

document.addEventlistener('keyup', (event)=> {
    if (event.key == 'w')
    {
        //move up
    }
    if (event.key == 's')
    {
        //move down
    }
})
