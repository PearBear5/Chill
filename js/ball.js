const ball = document.createElement('div')
document.body.appendChild(ball)
const lpaddle = document.createElement('div')
document.body.appendChild(lpaddle)

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

let lpaddleWidth = 10
let lpaddleHeight = 200
let lpaddleYposition = windowHeight / 2 - lpaddleHeight / 2
let lpaddleSpeed = 30
let lpaddleXposition = 30

const ballRadius = 15

let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

createBall()
createlpaddle()

function createBall() {
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

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ball.style.left = `${ballXPosition}px`
    if (ballXPosition > windowWidth - 2 * ballRadius || ballXPosition < 0) {
        ballXDirection = ballXDirection * -1
    }
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition > windowHeight - 2 * ballRadius || ballYPosition < 0) {
        ballYDirection = ballYDirection * -1
    }
    if (
        (ballBottom >= lpaddleTop) &&
        (ballTop <= lpaddleBottom) &&
        (ballLeft <= lpaddleRight) &&
        (ballXDirection == -1)
    )
    {
        ballXDirection = ballXDirection * -1
    }
}

let ballTop = ballYPosition
let ballBottom = ballYPosition + 2 * ballRadius
let ballLeft = ballXPosition
let lpaddleTop = lpaddleYposition
let lpaddleBottom = lpaddleYposition + lpaddleHeight
let lpaddleRight = lpaddleXposition + lpaddleWidth

function createlpaddle() {
    lpaddle.style.height = `${lpaddleHeight}px`
    lpaddle.style.width = `${lpaddleWidth}px`
    lpaddle.style.backgroundColor = 'red'
    lpaddle.style.position = 'absolute'
    lpaddle.style.left = `${lpaddleXposition}px`
    lpaddle.style.top = `${lpaddleYposition}px`
}

wKey = false
sKey = false

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key = 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function movelpaddle() {
    if ()
}
