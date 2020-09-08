TESTIMG="images/knight.png"
TERRAIN="images/mudcracks.jpg"

let lastHover
let lastClick = "8_16"
let rectX = 320
let rectY = 320
const ctx = document.getElementById("game-board").getContext('2d')
const FPS = 30

document.addEventListener("DOMContentLoaded", () => {
    renderTerrain()

    renderBoard()

})


const renderTerrain = () =>{
    let testTerrain = document.createElement("img")
    testTerrain.src = TERRAIN
    testTerrain.height = 640
    testTerrain.classList.add("terrain")
    centerBox = document.querySelector(".center-box")
    centerBox.appendChild(testTerrain)
}


const renderBoard = () =>{
    canvasBox = document.querySelector(".canvasBox-box")
    let gameTable = document.getElementById("game-board")
    gameTable.classList.add("game-board")
    boardArea = gameTable.getContext('2d')
    gameTable.getContext('2d').clearRect(0, 0, 640, 640)
    gameTable.getContext('2d').strokeRect(rectX, rectY, 40, 40);
    cellListener(gameTable)
    renderIcon(TESTIMG, lastClick)
    window.requestAnimationFrame(renderBoard)
    //window.requestAnimationFrame(renderIcon)

}

const cellListener = (gameTable) => {
    let ctx = gameTable.getContext('2d')
    gameTable.onmousemove = (e) => {
        lastHoverX = Math.ceil((e.pageX - 317)/40)
        lastHoverY = Math.ceil((e.pageY - 213)/40)
        lastHover = `${lastHoverX}_${lastHoverY}`
        // console.log(`last hover ${lastHover}`)
        let gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5" ,"blue");
        gradient.addColorStop("1.0", "red");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 3;
        rectX = ((lastHoverX-1) * 40)
        rectY = ((lastHoverY-1) * 40)
        
    }
    gameTable.onclick = (e) => {
        lastClickX = Math.ceil((e.pageX - 317)/40)
        lastClickY = Math.ceil((e.pageY - 213)/40)
        lastClick = `${lastClickX}_${lastClickY}` 
        console.log(`last click ${lastClick}`)
    }
}

// const renderIconInCell = (image, cellId) => {
//     let testImage = document.createElement("img")
//     testImage.src = image
//     testImage.height = 40
//     cell = document.getElementById(cellId)
//     cell.appendChild(testImage)
//     testImage.addEventListener('click', (e) => {
//         e.target.parentElement.style.backgroundColor = "green"
//         renderOptionBox(cellId)
//     })
// }

const renderOptionBox = (cellId) =>{
    const playOptionBox = document.createElement("div")
    playOptionBox.classList.add("play-option-box")
    document.getElementById(cellId).appendChild(playOptionBox)
}


const renderTitle = () =>{
    
}

const renderDugoutTop = () => {

}

const renderDugoutBottom = () =>{

}




//--------------------------test stuff
const testRun = () => {
    renderIconInCell(TESTIMG, 75)
}

const renderIcon = (image, lastClick) => {
    base_image = new Image()
    base_image.src = image
    base_image.height = 35
    lastClickParsed = lastClick.split("_")
    imageX = (lastClickParsed[0] - 1) * 40 + 2 
    imageY = (lastClickParsed[1] - 1) * 40 + 2
    ctx.drawImage(base_image, imageX, imageY - 15, 70, 50);
}
