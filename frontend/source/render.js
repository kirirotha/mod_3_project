TESTIMG="images/Archer_3.png"
TERRAIN="images/Barren_Grasslands_1.png"
CONTROL_BACKGROUND = "images/Parchment_background.jpg"
TITLE_LOGO = "images/Tactics_Lite_Logo.png"
BACKGROUND_IMG = "images/Smoke_Background.png"


let player1_leader_name = "Player 1"
let player2_leader_name = "Player2"
let lastHover
let lastClick = "8_16"
let rectX = 640
let rectY = 0
const ctx = document.getElementById("game-board").getContext('2d')
const FPS = 30
const gameTable = document.getElementById("game-board")
let selectedPiece = ""
let targetedEnemy = ""
let shadeArea = []
let shadeColor

let selectedMinions = []
let characterSelClickCount = 0

const FIGHTER1 = "images/Fighter_3.png"
const FIGHTER2 = "images/Fighter_2.png"
const FIGHTER3 = "images/Fighter_4_W.png"
const ARCHER1 = "images/Archer_1.png"
const ARCHER2 = "images/Archer_2_W.png"
const ARCHER3 = "images/Archer_3.png"
const MAGE1 = "images/Mage_1.png"
const MAGE2 = "images/Mage_2.png"
const MAGE3 = "images/Mage_4.png"
const LEADER_FIGHTER = "images/Leader_Fighter.png"
const LEADER_ARCHER = "images/Leader_Archer.png"
const LEADER_MAGE = "images/Leader_Mage.png"


const renderTitleLogo = () =>{
    const topBox = document.querySelector(".top-box")
    let imageLogo = document.createElement('img')
    imageLogo.src = TITLE_LOGO
    imageLogo.style.height = "200px"
    imageLogo.style.left = "20px"
    topBox.appendChild(imageLogo)
}

const renderTerrain = () =>{
    let testTerrain = document.createElement("img")
    testTerrain.src = TERRAIN
    testTerrain.height = 670
    testTerrain.classList.add("terrain")
    centerBox = document.querySelector(".center-box")
    centerBox.appendChild(testTerrain)
}

const renderBoard = () =>{
    gameTable.classList.add("game-board")
    boardArea = gameTable.getContext('2d')
    gameTable.getContext('2d').clearRect(0, 0, 670, 670)
    gameTable.getContext('2d').strokeRect(rectX, rectY, 40, 40);
    renderShading(shadeArea, shadeColor)
    cellListener(gameTable)
    if (piecePositions){
        renderPieces()
    }
    window.requestAnimationFrame(renderBoard)

}


const renderTitle = () =>{
    
}

const renderDugoutTop = () => {

}

const renderDugoutBottom = () =>{

}

let cell = lastClick

const renderIcon = (image, cell, scalar) => {
    base_image = new Image()
    base_image.src = image
    base_image.height = 35
    let cellParsed = cell.split("_")
    imageX = (cellParsed[0] - 1) * 40 + 17 
    imageY = (cellParsed[1] - 1) * 40 + 17
    ctx.drawImage(base_image, imageX, imageY - 15, 50 * scalar, 50);
}

const renderPieces = () => {
    piecePositions.forEach(pos =>{
        if (pos.hp > 0) {
            let characterImage = pos.src
            let scalarH = pos.scalarH
            // if(pos.class_type === 4 && pos.leader === true){
            //     characterImage = LEADER_FIGHTER
            //     scalarH = 1
            // }else if(pos.class_type === 5 && pos.leader === true){
            //     characterImage = LEADER_ARCHER
            //     scalarH = .8
            // }else if(pos.class_type === 6 && pos.leader === true){
            //     characterImage = LEADER_MAGE
            //     scalarH = 1
            // }else if(pos.class_type === 1 && pos.leader === false){
            //     characterImage = FIGHTER1
            //     scalarH = 1.1
            // }else if(pos.class_type === 2 && pos.leader === false){
            //     characterImage = ARCHER1
            //     scalarH = 1
            // }else if(pos.class_type === 3 && pos.leader === false){
            //     characterImage = MAGE1
            //     scalarH = 0.85
            // }
            renderIcon(characterImage, pos.cell, scalarH)
            renderHpBar(pos.cell, pos.hp, pos.hp_max)
        }
    })
}

const renderHpBar = (cell, hp, hp_max) =>{
    let cellParsed = cell.split("_")
    let hpBar = (hp/hp_max) * 30
    imageX = (cellParsed[0] - 1) * 40 + 22
    imageY = (cellParsed[1] - 1) * 40 + 1
    //debugger
    ctx.fillStyle = "green"
    ctx.fillRect(imageX, imageY, hpBar, 4)
}

const renderShading = (shadeArea, shadeColor) => {    
    shadeArea.forEach(square => {
        let squareParsed = square.split("_")
        let squareStartX = (squareParsed[0] - 1) * 40 + 15
        let squareStartY = (squareParsed[1] - 1) * 40 + 15
        ctx.fillStyle = shadeColor;
        ctx.fillRect(squareStartX, squareStartY, 40, 40);
    })
}

const renderControlBoard = () => {
    const rightBox = document.querySelector(".right-box")
    controlBackGround = document.createElement('img')
    controlBackGround.src = CONTROL_BACKGROUND
    controlBackGround.classList.add("control-background")
    rightBox.appendChild(controlBackGround)
}

const renderSelectedMinion = () => {
    let characterImage = selectedPiece.src
    let scalarH
    let characterType
    if (selectedPiece){
        if(selectedPiece.class_type === 4 && selectedPiece.leader === true){
            //characterImage = LEADER_FIGHTER
            //scalarH = 1
            characterType = "Fighter"
        }else if(selectedPiece.class_type === 5 && selectedPiece.leader === true){
            //characterImage = LEADER_ARCHER
            //scalarH = .8
            characterType = "Archer"
        }else if(selectedPiece.class_type === 6 && selectedPiece.leader === true){
            //characterImage = LEADER_MAGE
            //scalarH = 1
            characterType = "Mage"
        }else if(selectedPiece.class_type === 1 && selectedPiece.leader === false){
            //characterImage = FIGHTER1
            //scalarH = 1.1
            characterType = "Fighter"
        }else if(selectedPiece.class_type === 2 && selectedPiece.leader === false){
            //characterImage = ARCHER1
            //scalarH = 1
            characterType = "Archer"
        }else if(selectedPiece.class_type === 3 && selectedPiece.leader === false){
            //characterImage = MAGE1
            //scalarH = 0.85
            characterType = "Mage"
        }
    }

    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""

    let largeImage = document.createElement('img')
    largeImage.id ="large-image"
    largeImage.src = characterImage
    largeImage.style.height = "200px"
    avatarBox.appendChild(largeImage)

    let charStats = document.createElement('p')
    charStats.innerText = `Name: ${selectedPiece.name} \n \n Type: ${characterType} \n \n Attack Points: ${selectedPiece.atk} \n Attack Range: ${selectedPiece.atk_range} \n \n Movement Range: ${selectedPiece.move_range} \n \n Health: ${selectedPiece.hp}/${selectedPiece.hp_max}`
    statusBox.appendChild(charStats)

    if(selectedPiece.leader === true){
        let leaderText = document.createElement('h2')
        leaderText.innerText = "     Leader"
        avatarBox.appendChild(leaderText)
    }
}

const renderCharacterSelection = () =>{
    characterSelClickCount = 0
    const avatarBox = document.querySelector(".avatar-box")
    const charTitle = document.createElement('h2')
    charTitle.innerText = "Fighter Archer Mage"
    charTitle.style.wordSpacing = "50px"
    avatarBox.appendChild(charTitle)

    CharacterData.forEach(char =>{
        let charImg = document.createElement('img')
        charImg.src = char.src
        charImg.style.height = "120px"
        avatarBox.appendChild(charImg)
        avatarBox.style.left = "810px"
        avatarBox.style.top = "300px"    
        avatarBox.style.zIndex = "200"

        charImg.addEventListener('mouseover', (e) => {
            characterSelHover(char)})
        charImg.addEventListener('mouseout', characterSelHoverClear)
        charImg.addEventListener('click', (e) =>{
            characterSelClick(char)
        })
    })

}

const characterSelHoverClear = () => {
    //console.log('hover-out')
    let statusBox = document.querySelector('.status-box')
    statusBox.style.backgroundImage = 'none'
    statusBox.style.border = 'none'
    statusBox.innerHTML = ""
}


const characterSelHover = (char) =>{
    //console.log('hover')
    let statusBox = document.querySelector('.status-box')
    statusBox.style.backgroundImage = "url('images/Parchment_background.jpg')"

    statusBox.style.border = "thick solid black"
    statusBox.style.left = "550px"
    statusBox.style.top = "410px"
    statusBox.style.width ="200px"
    statusBox.style.height ="280px"
    statusBox.style.zIndex = "200"


    let charStats = document.createElement('h3')
    charStats.innerText = `Name: ${char.name}  \n \n Attack Points: ${char.atk} \n Attack Range: ${char.atk_range} \n \n Movement Range: ${char.move_range} \n \n Health: ${char.hp}`
    charStats.style.marginTop = "30px"
    charStats.style.marginLeft = "20px"

    statusBox.appendChild(charStats)
}

const characterSelClick = (char) =>{
    char.max_hp = char.hp
    characterSelClickCount = characterSelClickCount + 1
    if (piecePositions.length < 4 ){
        char.cell = `${characterSelClickCount + 7}_1`
        char.player1or2 = 1
    }else{
        char.cell = `${characterSelClickCount + 7}_16` 
        char.player1or2 = 2
    }
    if (characterSelClickCount < 4){
        piecePositions.push(char)
    }
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

