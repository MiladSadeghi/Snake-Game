const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let box = 32

const foodImg = new Image()
foodImg.src = '/Assest/Images/apple.png'

let food = {
  x: Math.floor(Math.random() * 40) * box,
  y: Math.floor(Math.random() * 17) * box,
}