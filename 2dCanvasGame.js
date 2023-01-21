const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

let player = {
    positionX: 0,
    positionY: 0,
    height: 20,
    width: 20,
    speed: 0
}


const direction = { up: true, down: false, left: true, right: false }
let moving = { up: false, down: false, left: false, right: false }


let update = (call) => {
    setInterval(() => {
        canvas.width = canvas.width
        if (moving.up) player.positionY = player.positionY - player.speed
        if (moving.down) player.positionY = player.positionY + player.speed
        if (moving.left) player.positionX = player.positionX + player.speed
        if (moving.right) player.positionX = player.positionX - player.speed
        call()
    }, 1000 / 50)
}

const gravity = (g) => {
    player.positionY = player.positionY + g / 1.9
}

const backgroundImage = (background, w, h) => {
    ctx.drawImage(background, 0, 0, w, h)
}

const backgroundColor = (color) => {
    ctx.fillStyle = color
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}
const sprite = (x, y, w, h, color) => {
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h)
}

const keydown = (callbak) => window.addEventListener('keydown', (e) => callbak(e))
const keyup = (callback) => window.addEventListener('keyup', (e) => callback(e))

const start = (start) => start()

const moveY = (direction) => {
    if (direction) {
        moving.up = true
    } else {
        moving.down = true
    }
}
const moveX = (direction) => {
    if (direction) {
        moving.left = true
    } else {
        moving.right = true

    }
}

const stopX = (direction) => {
    if (direction) {
        moving.left = false
    } else {
        moving.right = false
    }
}
const stopY = (direction) => {
    if (direction) {
        moving.up = false
    } else {
        moving.down = false
    }
}

const keypress = ()=>{}