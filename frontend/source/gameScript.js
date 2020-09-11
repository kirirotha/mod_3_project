


const placementTest = () => {
    //for(i = 0)
    pickupPiece()
   
}


const pickupPiece = () => {
    gameTable.addEventListener('click', (e) =>{
        e.preventDefault()
        //selectedPiece = null
        piecePositions.forEach(piece => {
            let thisClick = lastClick
            if(thisClick === piece.cell){
                selectedPiece = piece
                let cellParsed  = selectedPiece.cell.split("_")
                let cellX = cellParsed[0]
                let cellY = cellParsed[1]
                shadeArea = []
                shadeColor = "rgba(0, 255, 0, 0.4)"
                shadeArea.push(selectedPiece.cell)
                for(let i = 0; i <= selectedPiece.move_range; i++){
                    for(let j = 0; j <= selectedPiece.move_range; j++){
                        let newX = Number(cellX) + i
                        let newY = Number(cellY) + j 
                        pushShading(i, j, newX, newY, selectedPiece.move_range)
                        newX = Number(cellX) - i
                        newY = Number(cellY) - j 
                        pushShading(i, j, newX, newY, selectedPiece.move_range)
                        newX = Number(cellX) + i
                        newY = Number(cellY) - j 
                        pushShading(i, j, newX, newY, selectedPiece.move_range)
                        newX = Number(cellX) - i
                        newY = Number(cellY) + j 
                        pushShading(i, j, newX, newY, selectedPiece.move_range)
                    }
                }
                shadeArea = [...new Set(shadeArea)]
            }
        })
        placePiece()
    })
}

const pushShading = (i, j, newX, newY, range) =>{
    if((i + j) <= range){
        shadeArea.push(`${newX}_${newY}`)
    }
}

const placePiece = () => {
    gameTable.addEventListener('click', (e) =>{
        e.preventDefault()
        shadeArea = []
        locationPatch()
        pickupPiece() 
    })

}

const locationPatch = () =>{
    let thisClick2 = lastClick
    movePieceDom(thisClick2)
    let patchData = {
            "cell": thisClick2
    }
    // fetch(`http://localhost:3000/minions/${selectedPiece.id}`,{
    // method: 'PATCH',
    // headers: {
    //     "Content-Type": "application/json",
    //     Accept: "application/json"
    // },
    // body: JSON.stringify(patchData)
    // })
}

const movePieceDom = (thisClick2) => {
    const oldLocation  = selectedPiece.cell
    let oldLocParsed  = oldLocation.split("_")
    let oldLocX = oldLocParsed[0]
    let oldLocY = oldLocParsed[1]
    let thisClick2Parsed  = thisClick2.split("_")
    let thisClick2X = thisClick2Parsed[0]
    let thisClick2Y = thisClick2Parsed[1]
    let newLocX = oldLocX
    let newLocY = oldLocY
        // for(let i = 0; i < 20; i++){
        //     setTimeout(() => {
        //         newLocX = Number(newLocX) + ((Number(thisClick2X) - Number(oldLocX))/20) 
        //         newLocY = Number(newLocY) + ((Number(thisClick2Y) - Number(oldLocY))/20)
        //         newLoc = `${newLocX}_${newLocY}`
        //         //debugger
        //         selectedPiece.cell = newLoc
        //         window.requestAnimationFrame(renderBoard)
        //     }, 50)  
        // }
        // gameTable.removeEventListener('click', (e) =>{
        // })
    // setTimeout(() => {
         selectedPiece.cell = thisClick2
    // }, 2001)
}



const attackTest = () => {
    //for(i = 0)
    //pickupPiece()
    selectFighter()
   
}

const selectFighter = () => {
    gameTable.addEventListener('click', (e) =>{
        e.preventDefault()
        //selectedPiece = null
        piecePositions.forEach(piece => {
            let thisClick = lastClick
            if(thisClick === piece.cell){
                selectedPiece = piece
                let cellParsed  = selectedPiece.cell.split("_")
                let cellX = cellParsed[0]
                let cellY = cellParsed[1]
                shadeArea = []
                shadeColor = "rgba(255, 0, 0, 0.4)"
                shadeArea.push(selectedPiece.cell)
                for(let i = 0; i <= selectedPiece.atk_range; i++){
                    for(let j = 0; j <= selectedPiece.atk_range; j++){
                        let newX = Number(cellX) + i
                        let newY = Number(cellY) + j 
                        pushShading(i, j, newX, newY, selectedPiece.atk_range)
                        newX = Number(cellX) - i
                        newY = Number(cellY) - j 
                        pushShading(i, j, newX, newY, selectedPiece.atk_range)
                        newX = Number(cellX) + i
                        newY = Number(cellY) - j 
                        pushShading(i, j, newX, newY, selectedPiece.atk_range)
                        newX = Number(cellX) - i
                        newY = Number(cellY) + j 
                        pushShading(i, j, newX, newY, selectedPiece.atk_range)
                    }
                }
                shadeArea = [...new Set(shadeArea)]
            }
        })
        attackPiece()
    })
}

const attackPiece = () => {
    gameTable.addEventListener('click', (e) =>{
        e.preventDefault()
        let thisClick = lastClick
        piecePositions.forEach(piece => {
            if(thisClick === piece.cell){
                piece.hp = piece.hp - selectedPiece.atk
            }
        })
    })

}
    // ----------------------------------------------------------------------------------------

const activatePlayers = () => {
    piecePositions.forEach(piece =>{
        piece.attack_active = true
        piece.move_active = true
    })
}
    
    
    

const startScreen = () => {
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    let startGameTitle = document.createElement('h1')
    startGameTitle.innerText = "Choose One:"
    controlBox.appendChild(startGameTitle)
    let startButton = document.createElement('button')
    startButton.innerText = "New Game"
    startButton.id = "start-button"
    startButton.classList.add('button')
    startButton.classList.add('fire')
    controlBox.appendChild(startButton)
    document.getElementById("start-button").style.left = "117px"
    document.getElementById("start-button").style.top = "275px"
    let continueButton = document.createElement('button')
    continueButton.innerText = "Continue"
    continueButton.id = "continue-button"
    continueButton.classList.add('button')
    continueButton.classList.add('fire')
    controlBox.appendChild(continueButton)
    document.getElementById("continue-button").style.left = "117px"
    document.getElementById("continue-button").style.top = "400px"
    document.getElementById("start-button").addEventListener('click', (e) => {
        player1ChooseLeader()
    })
}

const player1ChooseLeader = () => {
    piecePositions = []
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    let player1LeaderTitle = document.createElement('h1')
    player1LeaderTitle.innerText = "Player 1 Choose Your Leader:"
    controlBox.appendChild(player1LeaderTitle)

    let avatar1Button = document.createElement('img')
    avatar1Button.id = "avatar1-button"
    avatar1Button.src = 'images/Leader_Fighter.png'
    controlBox.appendChild(avatar1Button)
    document.getElementById("avatar1-button").style.marginLeft = "20px"
    document.getElementById("avatar1-button").style.height = "140px"

    let avatar2Button = document.createElement('img')
    avatar2Button.id = "avatar2-button"
    avatar2Button.src = 'images/Leader_Archer.png'
    controlBox.appendChild(avatar2Button)
    document.getElementById("avatar2-button").style.height = "140px"
    
    let avatar3Button = document.createElement('img')
    avatar3Button.id = "avatar3-button"
    avatar3Button.src = 'images/Leader_Mage.png'
    controlBox.appendChild(avatar3Button)
    document.getElementById("avatar3-button").style.height = "140px"
    
    avatar1Button.addEventListener('click', (e) =>{
        selectedPiece = {name: '', src: "images/Leader_Fighter.png", scalarH: 0.8, leader: true, class_type: 4, hp: 145, hp_max: 145, atk: 13, atk_range: 1, move_range: 5, cell: "7_1"}
        renderSelectedMinion()
    })

    avatar2Button.addEventListener('click', (e) =>{
        selectedPiece ={name: '', src: "images/Leader_Archer.png", scalarH: 1, leader: true, class_type: 5, hp: 125, hp_max: 125, atk: 12, atk_range: 3, move_range: 5, cell: "7_1"}
        renderSelectedMinion()
    })

    avatar3Button.addEventListener('click', (e) =>{
        selectedPiece ={name: '', src: "images/Leader_Mage.png", scalarH: 0.8, leader: true, class_type: 6, hp: 90, hp_max: 90, atk: 20, atk_range: 2, move_range: 5, cell: "7_1"}
        renderSelectedMinion()
    })


    let submitButton = document.createElement('button')
    submitButton.innerText = "submit"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "117px"
    document.getElementById("submit-button").style.top = "575px"
    document.getElementById("submit-button").addEventListener('click', (e) => {
        selectedPiece.player1or2 = 1
        piecePositions.push(selectedPiece)
        player1ChooseMinions()
    })
} 

const player1ChooseMinions = () => {
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""

    let player1MinionsTitle = document.createElement('h1')
    player1MinionsTitle.innerText = "Player 1 Choose 3 Minions:"
    controlBox.appendChild(player1MinionsTitle)

    renderCharacterSelection()


    let submitButton = document.createElement('button')
    submitButton.innerText = "submit"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "212px"
    document.getElementById("submit-button").style.top = "575px"
    document.getElementById("submit-button").addEventListener('click', (e) => {
        player2ChooseLeader()
    })

    let resetButton = document.createElement('button')
    resetButton.innerText = "reset"
    resetButton.id = "reset-button"
    resetButton.classList.add('button')
    resetButton.classList.add('fire')
    controlBox.appendChild(resetButton)
    document.getElementById("reset-button").style.left = "23px"
    document.getElementById("reset-button").style.top = "575px"
    document.getElementById("reset-button").addEventListener('click', (e) => {
        player1ChooseMinions()
        piecePositions = piecePositions.slice(0,1)
    })
    
} 

const player2ChooseLeader = () => {
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"

    let player1LeaderTitle = document.createElement('h1')
    player1LeaderTitle.innerText = "Player 2 Choose Your Leader:"
    controlBox.appendChild(player1LeaderTitle)

    let avatar1Button = document.createElement('img')
    avatar1Button.id = "avatar1-button"
    avatar1Button.src = 'images/Leader_Fighter.png'
    controlBox.appendChild(avatar1Button)
    document.getElementById("avatar1-button").style.marginLeft = "20px"
    document.getElementById("avatar1-button").style.height = "140px"

    let avatar2Button = document.createElement('img')
    avatar2Button.id = "avatar2-button"
    avatar2Button.src = 'images/Leader_Archer.png'
    controlBox.appendChild(avatar2Button)
    document.getElementById("avatar2-button").style.height = "140px"
    
    let avatar3Button = document.createElement('img')
    avatar3Button.id = "avatar3-button"
    avatar3Button.src = 'images/Leader_Mage.png'
    controlBox.appendChild(avatar3Button)
    document.getElementById("avatar3-button").style.height = "140px"
    
    avatar1Button.addEventListener('click', (e) =>{
        selectedPiece = {name: '', src: "images/Leader_Fighter.png", scalarH: 0.8, leader: true, class_type: 4, hp: 145, hp_max: 145, atk: 13, atk_range: 1, move_range: 5, cell: "7_16"}
        renderSelectedMinion()
    })

    avatar2Button.addEventListener('click', (e) =>{
        selectedPiece ={name: '', src: "images/Leader_Archer.png", scalarH: 1, leader: true, class_type: 5, hp: 125, hp_max: 125, atk: 12, atk_range: 3, move_range: 5, cell: "7_16"}
        renderSelectedMinion()
    })

    avatar3Button.addEventListener('click', (e) =>{
        selectedPiece ={name: '', src: "images/Leader_Mage.png", scalarH: 0.8, leader: true, class_type: 6, hp: 90, hp_max: 90, atk: 20, atk_range: 2, move_range: 5, cell: "7_16"}
        renderSelectedMinion()
    })

    let submitButton = document.createElement('button')
    submitButton.innerText = "submit"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "117px"
    document.getElementById("submit-button").style.top = "575px"
    document.getElementById("submit-button").addEventListener('click', (e) => {
        selectedPiece.player1or2 = 2
        piecePositions.push(selectedPiece)
        player2ChooseMinions()

    })
    
} 

const player2ChooseMinions = () => {
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"

    let player2MinionsTitle = document.createElement('h1')
    player2MinionsTitle.innerText = "Player 2 Choose 3 Minions:"
    controlBox.appendChild(player2MinionsTitle)

    renderCharacterSelection()


    let submitButton = document.createElement('button')
    submitButton.innerText = "submit"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "212px"
    document.getElementById("submit-button").style.top = "575px"
    document.getElementById("submit-button").addEventListener('click', (e) => {
        readyWindow()
        //shadeStart()
    })

    let resetButton = document.createElement('button')
    resetButton.innerText = "reset"
    resetButton.id = "reset-button"
    resetButton.classList.add('button')
    resetButton.classList.add('fire')
    controlBox.appendChild(resetButton)
    document.getElementById("reset-button").style.left = "23px"
    document.getElementById("reset-button").style.top = "575px"
    document.getElementById("reset-button").addEventListener('click', (e) => {
        player2ChooseMinions()
        piecePositions = piecePositions.slice(0,5)
    })
    
    document.getElementById("submit-button").addEventListener('click', (e) => {
        readyWindow()
        //shadeStart()
    })
} 

const readyWindow = () => {
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"
    shadeArea = []


    let readyTitle = document.createElement('h1')
    readyTitle.innerText = "Ready to Battle?"
    controlBox.appendChild(readyTitle)
    let submitButton = document.createElement('button')
    submitButton.innerText = "Start Battle!"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "212px"
    document.getElementById("submit-button").style.top = "575px"
    document.getElementById("submit-button").addEventListener('click', (e) => {
        let randomNumber = Math.floor(Math.random() * 10)
        
        if(randomNumber%2 === 0){
            player1Action()
        }else{
            player2Action()
        }
    })
    

    let resetButton = document.createElement('button')
    resetButton.innerText = "reset"
    resetButton.id = "reset-button"
    resetButton.classList.add('button')
    resetButton.classList.add('fire')
    controlBox.appendChild(resetButton)
    document.getElementById("reset-button").style.left = "23px"
    document.getElementById("reset-button").style.top = "575px"
    document.getElementById("reset-button").addEventListener('click', (e) => {
        piecePositions.forEach(piece =>{
            piece.hp = piece.hp_max
        })
        shadeArea = []
        characterSelClickCount = 0
        piecePositions = []
        player1ChooseLeader()
    })
    


} 

const shadeStart = () => {
    shadeArea = []
    shadeColor = "rgba(0, 0, 200, 0.4)"
    for(i = 1; i < 17; i++){
        shadeArea.push(`${i}_1`)
        shadeArea.push(`${i}_2`)
        shadeArea.push(`${i}_15`)
        shadeArea.push(`${i}_16`)
    }
}

const player1Action = () => {
    activatePlayers()
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"
    document.querySelector(".canvas-box").removeEventListener('click', selectMinionP2)
    document.querySelector(".canvas-box").removeEventListener('click', player1Action)
    selectedPiece = ""
    let player1ActionTitle = document.createElement('h1')
    player1ActionTitle.innerText = `${player1_leader_name}'s Turn`
    controlBox.appendChild(player1ActionTitle)
    shadeArea = []
    shadeColor = "rgba(0, 0, 200, 0.4)"
    piecePositions.forEach(piece => {
        if(piece.player1or2 === 1){
            shadeArea.push(piece.cell)
        }
    })
    lastClick = ""
    document.querySelector(".canvas-box").addEventListener('click', selectMinionP1)
    let moveButton = document.createElement('button')
    moveButton.innerText = "Move"
    moveButton.id = "move-button"
    moveButton.classList.add('button')
    moveButton.classList.add('fire')
    controlBox.appendChild(moveButton)
    document.getElementById("move-button").style.left = "23px"
    document.getElementById("move-button").style.top = "190px"
    moveButton.disabled = true

    let attackButton = document.createElement('button')
    attackButton.innerText = "Attack"
    attackButton.id = "attack-button"
    attackButton.classList.add('button')
    attackButton.classList.add('fire')
    controlBox.appendChild(attackButton)
    document.getElementById("attack-button").style.left = "212px"
    document.getElementById("attack-button").style.top = "190px"
    attackButton.disabled = true




    let submitButton = document.createElement('button')
    submitButton.innerText = "End Turn"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "117px"
    document.getElementById("submit-button").style.top = "575px"

    submitButton.addEventListener('click', player2Action)
   
}

const player2Action = () => {
    activatePlayers()
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"

    document.querySelector(".canvas-box").removeEventListener('click', selectMinionP1)
    document.querySelector(".canvas-box").removeEventListener('click', player2Action)

    

    selectedPiece = ""
    let player2ActionTitle = document.createElement('h1')
    player2ActionTitle.innerText = `${player2_leader_name}'s Turn`
    controlBox.appendChild(player2ActionTitle)

    shadeArea = []
    shadeColor = "rgba(0, 0, 200, 0.4)"
    piecePositions.forEach(piece => {
        if(piece.player1or2 === 2){
            shadeArea.push(piece.cell)
        }
    })
    lastClick = ""
    document.querySelector(".canvas-box").addEventListener('click', selectMinionP2)
    let moveButton = document.createElement('button')
    moveButton.innerText = "Move"
    moveButton.id = "move-button"
    moveButton.classList.add('button')
    moveButton.classList.add('fire')
    controlBox.appendChild(moveButton)
    document.getElementById("move-button").style.left = "23px"
    document.getElementById("move-button").style.top = "190px"
    moveButton.disabled = true

    let attackButton = document.createElement('button')
    attackButton.innerText = "Attack"
    attackButton.id = "attack-button"
    attackButton.classList.add('button')
    attackButton.classList.add('fire')
    controlBox.appendChild(attackButton)
    document.getElementById("attack-button").style.left = "212px"
    document.getElementById("attack-button").style.top = "190px"
    attackButton.disabled = true




    let submitButton = document.createElement('button')
    submitButton.innerText = "End Turn"
    submitButton.id = "submit-button"
    submitButton.classList.add('button')
    submitButton.classList.add('fire')
    controlBox.appendChild(submitButton)
    document.getElementById("submit-button").style.left = "117px"
    document.getElementById("submit-button").style.top = "575px"

    submitButton.addEventListener('click', player1Action)

   
}


const selectMinionP1 = () => {
    //shadeArea = []
    piecePositions.forEach(piece => {
        if(piece.cell === lastClick && piece.player1or2 === 1){
            selectedPiece = piece
        }
    })
    if (selectedPiece.move_active === false){
        document.getElementById("move-button").disabled = true
    }else{
        document.getElementById("move-button").disabled = false
    }
    if (selectedPiece.attack_active === false){
        document.getElementById("attack-button").disabled = true
    }else{
        document.getElementById("attack-button").disabled = false
    }
    if(selectedPiece){
        renderSelectedMinion()
        document.getElementById("move-button").addEventListener('click', moveMinion)
        document.getElementById("attack-button").addEventListener('click', attackMinion)
    }
}

const selectMinionP2 = () => {
    //shadeArea = []
    piecePositions.forEach(piece => {
        if(piece.cell === lastClick && piece.player1or2 === 2){
            selectedPiece = piece
        }
    })
    if (selectedPiece.move_active === false){
        document.getElementById("move-button").disabled = true
    }else{
        document.getElementById("move-button").disabled = false
    }
    if (selectedPiece.attack_active === false){
        document.getElementById("attack-button").disabled = true
    }else{
        document.getElementById("attack-button").disabled = false
    }
    if(selectedPiece){
        renderSelectedMinion()
        document.getElementById("move-button").addEventListener('click', moveMinion)
        document.getElementById("attack-button").addEventListener('click', attackMinion)
    }
}
// const selectMinionP2 = () => {
//     //shadeArea = []
//     document.getElementById("attack-button").removeEventListener('click', attackMinion)
//     document.getElementById("move-button").removeEventListener('click', moveMinion)
//     piecePositions.forEach(piece => {
//         if(piece.cell === lastClick && piece.player_id%2 === 1){
//             selectedPiece = piece
//         }
//     })
//     if (selectedPiece.move_active === false){
//         document.getElementById("move-button").disabled = true
//     }else{
//         document.getElementById("move-button").disabled = false
//     }
//     if (selectedPiece.attack_active === false){
//         document.getElementById("attack-button").disabled = true
//     }else{
//         document.getElementById("attack-button").disabled = false
//     }

//     if(selectedPiece){
//         renderSelectedMinion()
//         document.getElementById("move-button").addEventListener('click', moveMinion)
//         document.getElementById("attack-button").addEventListener('click', attackMinion)
//     }
// }

const moveMinion = () => {
    let cellParsed  = selectedPiece.cell.split("_")
    let cellX = cellParsed[0]
    let cellY = cellParsed[1]
    shadeArea = []
    shadeColor = "rgba(0, 255, 0, 0.4)"
    shadeArea.push(selectedPiece.cell)
    for(let i = 0; i <= selectedPiece.move_range; i++){
        for(let j = 0; j <= selectedPiece.move_range; j++){
            let newX = Number(cellX) + i
            let newY = Number(cellY) + j 
            pushShading(i, j, newX, newY, selectedPiece.move_range)
            newX = Number(cellX) - i
            newY = Number(cellY) - j 
            pushShading(i, j, newX, newY, selectedPiece.move_range)
            newX = Number(cellX) + i
            newY = Number(cellY) - j 
            pushShading(i, j, newX, newY, selectedPiece.move_range)
            newX = Number(cellX) - i
            newY = Number(cellY) + j 
            pushShading(i, j, newX, newY, selectedPiece.move_range)
        }
    }
    shadeArea = [...new Set(shadeArea)]
    // if(selectedPiece.player_id%2 === 0){
    //     document.addEventListener('click', selectMinionP2)
    // }else if(selectedPiece.player_id%2 === 1){
    //     document.addEventListener('click', selectMinionP1)
    // }

    document.querySelector(".canvas-box").addEventListener('click', makeMove)
}

const containsPiece = () => {
    for (i = 0; i < piecePositions.length; i++) {
        if (piecePositions[i].cell === lastClick) {
            return true;
        }
    }
    return false;
}

const legalDistance = () =>{
    let moveClickParsed = lastClick.split("_")
    let oldLocParsed = selectedPiece.cell.split("_")
    let dist = Math.abs(moveClickParsed[0] - oldLocParsed[0]) + Math.abs(moveClickParsed[1] - oldLocParsed[1])
    if(dist > selectedPiece.move_range){
        return false
    }
    return true
}

const makeMove = () => {
    const occupied = containsPiece()
    const legal = legalDistance()
    if ((occupied === true) || (legal === false)){
        document.querySelector(".canvas-box").removeEventListener('click', makeMove)
        moveMinion()
    }else{
        document.querySelector(".canvas-box").removeEventListener('click', makeMove)
        selectedPiece.move_active = false
        document.getElementById("move-button").disabled = true
        selectedPiece.cell = lastClick
        shadeArea = []
    }

}

const attackMinion = () => {
    let cellParsed  = selectedPiece.cell.split("_")
    let cellX = cellParsed[0]
    let cellY = cellParsed[1]
    shadeArea = []
    shadeColor = "rgba(255, 0, 0, 0.4)"
    shadeArea.push(selectedPiece.cell)
    for(let i = 0; i <= selectedPiece.atk_range; i++){
        for(let j = 0; j <= selectedPiece.atk_range; j++){
            let newX = Number(cellX) + i
            let newY = Number(cellY) + j 
            pushShading(i, j, newX, newY, selectedPiece.atk_range)
            newX = Number(cellX) - i
            newY = Number(cellY) - j 
            pushShading(i, j, newX, newY, selectedPiece.atk_range)
            newX = Number(cellX) + i
            newY = Number(cellY) - j 
            pushShading(i, j, newX, newY, selectedPiece.atk_range)
            newX = Number(cellX) - i
            newY = Number(cellY) + j 
            pushShading(i, j, newX, newY, selectedPiece.atk_range)
        }
    }
    shadeArea = [...new Set(shadeArea)]
    
    document.querySelector(".canvas-box").addEventListener('click', makeAttack)
}

const legalHit = () =>{
    let hitClickParsed = lastClick.split("_")
    let oldLocParsed = selectedPiece.cell.split("_")
    let dist = Math.abs(hitClickParsed[0] - oldLocParsed[0]) + Math.abs(hitClickParsed[1] - oldLocParsed[1])
    if(dist > selectedPiece.atk_range){
        return false
    }
    return true
}

const enemyPresent = () => {
    for (i = 0; i < piecePositions.length; i++) {
        if (piecePositions[i].cell === lastClick && (piecePositions[i].player1or2 != selectedPiece.player1or2)) {
            targetedEnemy = piecePositions[i]
            return true;
        }
    }
    return false;
}

const makeAttack = () => {
    document.querySelector(".canvas-box").removeEventListener('click', makeAttack)
    const inRange = legalHit()
    const enemyHere = enemyPresent()
    if (inRange === true && enemyHere === true){
        selectedPiece.attack_active = false
        document.getElementById("attack-button").disabled = true
        for (i = 0; i < piecePositions.length; i++) {
            if (piecePositions[i] === targetedEnemy) {
                piecePositions[i].hp = piecePositions[i].hp - selectedPiece.atk
            }
        }
    }else{
        attackMinion()
    }
    targetedEnemy = ""
    winCheck()
}


const winCheck = () =>{
    let team1Dead = []
    let team2Dead = []
    piecePositions.forEach(piece =>{
        if(piece.hp < 1){
            piece.active = false
        }
        if((piece.active === false) && (piece.player1or2 === 1)){
            team1Dead.push(piece)
        }else if((piece.active === false) && (piece.player1or2 === 2)){
            team2Dead.push(piece)
        }
    })
    if(team2Dead.length >= 4){
        player1Wins()
    }
    if(team1Dead.length >= 4){
        player2Wins()
    }
}

const player1Wins = () => {
    const winner = "Player 1"
    winnerFunc(winner)
}
const player2Wins = () => {
    const winner = "Player 2"
    winnerFunc(winner)
}

const winnerFunc = (winner) =>{
    const controlBox = document.querySelector(".controller-box")
    controlBox.innerHTML = ""
    const statusBox = document.querySelector(".status-box")
    const avatarBox = document.querySelector(".avatar-box")
    avatarBox.innerHTML = ""
    statusBox.innerHTML = ""
    avatarBox.style = "null"
    statusBox.style = "null"
    let winnerTitle = document.createElement('h1')
    winnerTitle.innerText = `${winner} wins!`
    controlBox.appendChild(winnerTitle)
    let startButton = document.createElement('button')
    startButton.innerText = "New Game"
    startButton.id = "start-button"
    startButton.classList.add('button')
    startButton.classList.add('fire')
    controlBox.appendChild(startButton)
    document.getElementById("start-button").style.left = "117px"
    document.getElementById("start-button").style.top = "275px"
    document.getElementById("start-button").addEventListener('click', (e) => {
        piecePositions.forEach(piece =>{
            piece.hp = piece.hp_max
        })
        shadeArea = []
        characterSelClickCount = 0
        piecePositions = []
        player1ChooseLeader()
    })
    
}