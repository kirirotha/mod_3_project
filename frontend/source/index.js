TESTIMG="images/king_cat.jpg"

let lastHover
let lastClick

document.addEventListener("DOMContentLoaded", () => {
    renderBoard()
    //testRun() 
})




const renderBoard = () =>{
    centerBox = document.querySelector(".center-box")
    let gameTable = document.createElement("canvas")
    gameTable.id = "game-board"
    gameTable = gameTable.getContext("2d");
    centerBox.appendChild(gameTable)
    // for(let i = 0; i < 10; i++){
    //     let row = document.createElement('tr')
    //     for(let j = 0; j < 10; j++){
    //         let cell = document.createElement('gamecell')
    //         cell.id = `${i}_${j}`
    //         cell.style.backgroundColor = "black"
    //         gameTable.appendChild(cell)
    //         cellListener(cell)
    //     }
    // }
}

const cellListener = (cell) => {
    cell.addEventListener('mouseenter', (e) =>{
        if (e.target.style.backgroundColor === "black"){
            e.target.style.backgroundColor = "blue"
        }
        lastHover = e.target.id
        console.log(`last hover ${lastHover}`)
    })
    cell.addEventListener('mouseleave', (e) =>{
        if (e.target.style.backgroundColor === "blue"){
            e.target.style.backgroundColor = "black"
        }
    })
    cell.addEventListener('click', (e) =>{
        lastClick = e.target.id
        console.log(`last clicked ${lastClick}`)
    })
}

const renderIconInCell = (image, cellId) => {
    let testImage = document.createElement("img")
    testImage.src = image
    testImage.height = 40
    cell = document.getElementById(cellId)
    cell.appendChild(testImage)
    testImage.addEventListener('click', (e) => {
        e.target.parentElement.style.backgroundColor = "green"
        renderOptionBox(cellId)
    })
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




//--------------------------test stuff
const testRun = () => {
    renderIconInCell(TESTIMG, 75)
}



