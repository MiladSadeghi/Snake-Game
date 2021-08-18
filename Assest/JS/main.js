const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let box = 32

const snakeHead = new Image()
snakeHead.src = '/Assest/Images/snakeHead.png'

const foodImg = new Image()
foodImg.src = '/Assest/Images/apple.png'

let food = {
  x: Math.floor(Math.random() * 40) * box,
  y: Math.floor(Math.random() * 17) * box,
}

let snake = []
snake[0] = {
  x:(canvas.clientWidth / 64) * box,
  y:(canvas.clientHeight / 64) * box
}
