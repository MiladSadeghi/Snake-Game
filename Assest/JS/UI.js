
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
}

const game = setInterval(draw, 1000)