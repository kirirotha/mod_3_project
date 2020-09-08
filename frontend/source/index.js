TESTIMG="images/king_cat.jpg"

document.addEventListener("DOMContentLoaded", () => {
    renderBoard()
    //testRun() 
})

const renderBoard = () =>{
    centerBox = document.querySelector(".center-box")
    let gameTable = document.createElement("table")
    gameTable.id = "game-board"
    centerBox.appendChild(gameTable)
    for(let i = 0; i < 10; i++){
        let row = document.createElement('tr')
        gameTable.appendChild(row)
        for(let j = 0; j < 10; j++){
            let cell = document.createElement('td')
            cell.id = `${i}${j}`
            cell.style.backgroundColor = "black"
            row.appendChild(cell)
            cellListener(cell)
        }
    }
}

const cellListener = (cell) => {
    cell.addEventListener('mouseenter', (e) =>{
        if (e.target.style.backgroundColor === "black"){
            e.target.style.backgroundColor = "red"
        }
    })
    cell.addEventListener('mouseleave', (e) =>{
        if (e.target.style.backgroundColor === "red"){
            e.target.style.backgroundColor = "black"
        }
    })
    cell.addEventListener('click', (e) =>{
        console.log(e.target.id)
        renderIconInCell(TESTIMG, e.target.id)
    })
}


const renderTitle = () =>{
    
}

const renderDugoutTop = () => {

}

const renderDugoutBottom = () =>{

}




//--------------------------test stuff
const testRun = () => {
    renderIconInDugout(TESTIMG)
}

const renderIconInCell = (image, cellId) => {
    let testImage = document.createElement("img")
    testImage.src = image
    testImage.height = 40
    cell = document.getElementById(cellId)
    cell.appendChild(testImage)
    testImage.addEventListener('click', (e) => {
        e.target.parentElement.style.backgroundColor = "green"
    })
}

const cellHover = () => {
    cell.addEventListener('mouseenter', (e) =>{
        e.target.style.borderColor = "red"
    })
    cell.addEventListener('mouseleave', (e) =>{
        e.target.style.borderColor = "black"
    })
}