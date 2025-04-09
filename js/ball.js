const ball = document.createElement('div')
document.body.appendChild(ball)
const lpaddle = document.createElement('div')
document.body.appendChild(lpaddle)
const tracker = document.createElement('div')
document.body.appendChild(tracker)
const menuBack = document.createElement('div')
document.body.appendChild(menuBack)
const menu = document.createElement('btn')
document.body.appendChild(menu)

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth


let score = 0 //display score and increase score by 1 every time the ball hits the paddle
let level = 1
let mult = 0
// display level and increase level by 1 everytime score increases by 10
//increase ball speed or decrease paddle height
//end game when miss ball

// Paddle
let lpaddleWidth = 10
let lpaddleHeight = 250
let lpaddleYposition = windowHeight / 2 - lpaddleHeight / 2
let lpaddleSpeed = 10
let lpaddleXposition = 30

// Ball
const ballRadius = 15
let ballXPosition = windowWidth / 2 - ballRadius
let ballSpeed = 5
let ballXDirection = 1
let ballYPosition = windowHeight / 2 - ballRadius
let ballYDirection = 1

// Menu Varibles
let menuVis = true

// functions
createTracker()
createBall()
createlpaddle()
createMenu()

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
    if (ballXPosition <= 0)
    {
        endGame()
    }


    // Bounce varibles
    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let lpaddleTop = lpaddleYposition
    let lpaddleBottom = lpaddleYposition + lpaddleHeight
    let lpaddleRight = lpaddleXposition + lpaddleWidth


    if (
        (ballBottom >= lpaddleTop) &&
        (ballTop <= lpaddleBottom) &&
        (ballLeft <= lpaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        updateTracker(1)
    }
}



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

document.addEventListener('keydown', (event) => {
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
    if (wKey == true && lpaddleYposition > 0) {
        lpaddleYposition = lpaddleYposition - lpaddleSpeed
    }
    if (sKey == true && lpaddleYposition < windowHeight - lpaddleHeight) {
        lpaddleYposition = lpaddleYposition + lpaddleSpeed
    }
    lpaddle.style.top = `${lpaddleYposition}px`
}

function createTracker() {
    tracker.style.position = 'absolute'
    tracker.style.height = '100px'
    tracker.style.width = '200px'
    tracker.style.backgroundColor = ''
    tracker.style.top = '0px'
    tracker.style.right = '0px'
    tracker.style.fontSize = '24px'
    tracker.innerHTML = `Score: ${score} <br> Level: ${level}`
}

function createMenu() {
    menuBack.style.margin = '0'
    menuBack.style.position = 'absolute'
    menu.style.position = 'absolute'
    menu.style.height = '40px'
    menu.style.width = '150px'
    menu.innerHTML = 'Start Game'
    menu.style.backgroundColor = 'green'
    menu.style.fontSize = '30px'
    menu.style.top = `${windowHeight / 2 - 40 / 2}px`
    menu.style.left = `${windowWidth / 2 - 150 / 2}px`
    menuBack.style.height = `100vh`
    menuBack.style.width = `100vw`
    menuBack.style.boxSizing = 'borderBox'
    menuBack.style.backgroundColor = 'black'
    menuBack.style.opacity = '0.1'
    menuBack.style.left = '0px'
    menuBack.style.top = '0px'
    menu.style.zIndex = '2'
    menuBack.style.zIndex = '0'
    menu.style.hover = 'pointer'
}

function endGame()
{
    ballXDirection = 0
    ballYDirection = 0
}

function updateTracker(value) {
    if (value == 1) {
        score = score + 1
    }
    if (level = Math.floor(score / 10) + 1 != level)
    {
        // dificulty increase
        ballSpeed = ballSpeed + 3
        lpaddleHeight = lpaddleHeight - 10
    }
    level = Math.floor(score / 10) + 1

    tracker.innerHTML = `Score: ${score} <br> Level: ${level}`
}

function animate() {
    moveBall()
    movelpaddle()
    requestAnimationFrame(animate)
}

animate()
