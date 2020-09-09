const placementTest = () => {
    //for(i = 0)
    pickupPiece()
   
}

const pickupPiece = () => {
    gameTable.addEventListener('click', (e) =>{
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
        shadeArea = []
        locationPatch()
        pickupPiece() 
    })
    gameTable.addEventListener('click', (e) =>{
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
