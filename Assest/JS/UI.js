
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

groundDraw()

function draw() {
  ctx.drawImage(snakeHead, snake[0].x, snake[0].y, 32, 32)

  ctx.drawImage(foodImg, food.x, food.y, 32, 32)

  let snakeX = snake[0].x
  let snakeY = snake[0].y

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

  if(direction === 'LEFT') snakeX -= box
  if(direction === 'UP') snakeY -= box
  if(direction === 'RIGHT') snakeX += box
  if(direction === 'DOWN') snakeY += box

  let newHead = {
    x: snakeX,
    y: snakeY
  }
}

const game = setInterval(draw, 1000)