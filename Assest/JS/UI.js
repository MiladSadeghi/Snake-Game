
function groundDraw() {
  let widthRes = canvas.clientWidth / 32 

  let y = 0
  let rowColor = 0

  while (y <= 544) {
    for (let i = 0; i <= widthRes; i++) {
      if(rowColor % 2 == 0) {
        ctx.fillStyle = (i % 2 == 0)? '#273c75':'#40739e'
        ctx.fillRect(i*32,y, box, box)
      } else {
        ctx.fillStyle = (i % 2 == 0)? '#40739e':'#273c75'
        ctx.fillRect(i*32,y, box, box)
      }
    }
    rowColor += 1 
    y += 1 * 32
    }
  }



document.addEventListener('keydown', (e) => {
  if (e.keyCode === 37 && direction !== 'RIGHT') {
    direction = 'LEFT'
  } else if (e.keyCode === 38 && direction !== 'DOWN') {
    direction = 'UP'
  } else if (e.keyCode === 39 && direction !== 'LEFT') {
    direction = 'RIGHT'
  } else if (e.keyCode === 40 && direction !== 'UP') {
    direction = 'DOWN'
  }
})

function draw() {
  groundDraw()
  ctx.drawImage(snakeHead, snake[0].x, snake[0].y)

  for (let i = 1; i < snake.length; i++) {
    ctx.fillStyle = '#CEDD36'
    ctx.fillRect(snake[i].x, snake[i].y, 32, 32)
  }

  ctx.drawImage(foodImg, food.x, food.y, 32, 32)

  let snakeX = snake[0].x
  let snakeY = snake[0].y

  if(direction === 'LEFT') snakeX -= box
  if(direction === 'UP') snakeY -= box
  if(direction === 'RIGHT') snakeX += box
  if(direction === 'DOWN') snakeY += box

  let newHead = {
    x: snakeX,
    y: snakeY
  }

  if(snakeX === food.x && snakeY === food.y) {
    food = {
      x: Math.floor(Math.random() * 40) * box,
      y: Math.floor(Math.random() * 17) * box,
    }
  } else {
    snake.pop()
  }

  snake.unshift(newHead)
}
const game = setInterval(draw, 250)