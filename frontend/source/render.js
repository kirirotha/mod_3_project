TESTIMG="images/knight.png"
TERRAIN="images/mudcracks.jpg"

let lastHover
let lastClick = "8_16"
let rectX = 640
let rectY = 0
const ctx = document.getElementById("game-board").getContext('2d')
const FPS = 30
const gameTable = document.getElementById("game-board")
let selectedPiece




const renderTerrain = () =>{
    let testTerrain = document.createElement("img")
    testTerrain.src = TERRAIN
    testTerrain.height = 640
    testTerrain.classList.add("terrain")
    centerBox = document.querySelector(".center-box")
    centerBox.appendChild(testTerrain)
}


const renderBoard = () =>{
    gameTable.classList.add("game-board")
    boardArea = gameTable.getContext('2d')
    gameTable.getContext('2d').clearRect(0, 0, 640, 640)
    gameTable.getContext('2d').strokeRect(rectX, rectY, 40, 40);
    cellListener(gameTable)
    if (piecePositions){
        renderPieces()
    }
    window.requestAnimationFrame(renderBoard)
    //window.requestAnimationFrame(renderIcon)

}


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

let cell = lastClick

const renderIcon = (image, cell) => {
    base_image = new Image()
    base_image.src = image
    base_image.height = 35
    let cellParsed = cell.split("_")
    imageX = (cellParsed[0] - 1) * 40 + 2 
    imageY = (cellParsed[1] - 1) * 40 + 2
    ctx.drawImage(base_image, imageX, imageY - 15, 70, 50);
}



//--------------------------test stuff
const testRun = () => {
    renderIconInCell(TESTIMG, 75)
}

// const renderIcon = (image, lastClick) => {
//     base_image = new Image()
//     base_image.src = image
//     base_image.height = 35
//     lastClickParsed = lastClick.split("_")
//     imageX = (lastClickParsed[0] - 1) * 40 + 2 
//     imageY = (lastClickParsed[1] - 1) * 40 + 2
//     ctx.drawImage(base_image, imageX, imageY - 15, 70, 50);
// }

const renderPieces = () => {
    piecePositions.forEach(pos =>{
        renderIcon(TESTIMG, pos.cell)
    })
}
 const selectCell = () => {
     
 }