
const background = document.getElementById("background")
canvas.id = "myCanvas"
canvas.height = "300"
canvas.width = "400"

start(() => {

    player.positionX = canvas.width/2 - 10
    player.positionY = canvas.height/2 - 10 
    player.speed = 1

    update(() => {

        //gravity(9)
        //backgroundColor("green")
        //backgroundImage(background,canvas.width,canvas.height)
        sprite(player.positionX, player.positionY, 20, 20, "orange")
        keydown(({ key }) => {
            
            if (key == "w") moveY(direction.up)
            if (key == "d") moveX(direction.left)
            if (key == "s") moveY(direction.down)
            if (key == "a") moveX(direction.right)
        })
        keyup(({ key }) => {
            if (key == "w") stopY(direction.up)
            if (key == "s") stopY(direction.down)
            if (key == "d") stopX(direction.left)
            if (key == "a") stopX(direction.right)
        })

        keypress(({key}) =>{

        })
    })
})













/* 
canvas.addEventListener("mousemove", (e) => {
    ctx.fillStyle = "#ffffff";
    console.log(window.wi)
    mouseX = e.clientX
    mouseY = e.clientY
    gradosDeg = ((mouseY / canvas.height * 1.5)) - ((canvas.width / mouseX) * 1.5)
    grados.innerHTML = gradosDeg
    ctx.fillRect(mouseX, mouseY, 4, 4);
    mouseMove.innerHTML = `<div> mouseX: ${e.clientX} - mouseY: ${e.clientY}</div>`
})



window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") moveX(1)
    if (e.key == "ArrowLeft") moveX(-1)
    if (e.key == "ArrowDown") moveY(1)
    if (e.key == "ArrowUp") moveY(-1)
})

window.addEventListener("keyup", (e) => {
    if (e.key == "ArrowRight") stopX()
    if (e.key == "ArrowLeft") stopX()
    if (e.key == "ArrowDown") stopY()
    if (e.key == "ArrowUp") stopY()
})


setInterval(() => {
    canvas.width = canvas.width
    ctx.fillStyle = "red"
    ctx.fillRect(0, 50, window.innerWidth - canvas.width, 20)
    gradosDeg = mouseY / canvas.height * 1.5
    grados.innerHTML = gradosDeg
    ctx.save();
    ctx.rotate(gradosDeg, 0.9);
    ctx.fillRect(0, 0, 200, 30)
    ctx.restore()
}, 100)

const outsideX1 = () => {
    if (x > canvas.width - 20 || x < 0) {
        return true
    } else {
        return false
    }
}
const outsideX2 = () => {
    if (x > canvas.width - 20 || x < 0) {
        return true
    } else {
        return false
    }
}

const outsideY = () => {
    return false
}

const displayBackground = () => {
    ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
}

const update = () => {
    const intervalo = setInterval(() => {
        playerMove.innerHTML = `<div> playerX: ${x} - playerY: ${y}</div>`
        canvas.width = canvas.width
        displayBackground()
        x = x + speedX
        y = y + speedY
        printPlayer(x, y, w, h, playerRotation)
    }, 1000 / 30)
    return intervalo
}

const stopX = () => {
    speedX = 0
}
const stopY = () => {
    speedY = 0
}

const moveX = (speed) => {
    speedX = speed * speedInput.value
    move = true
}

const moveY = (speed) => {
    speedY = speed * speedInput.value
    move = true
}

window.addEventListener('load', () => {
    onStart()
})

const printPlayer = (x, y, w, h) => {
    let rotation = (x - mouseX + y - mouseY) / 100
    console.log(rotation)
    ctx.save();
    ctx.rotate(rotation);
    // draw your object
    ctx.drawImage(playerImg, x, y, w, h)
    ctx.fillStyle = 'red'
    ctx.fillRect(x, y, w, h)
    ctx.restore();
}

const onStart = () => {
    printPlayer(x, y, w, h, 0)
}

update()

 */