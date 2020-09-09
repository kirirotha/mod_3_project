const placementTest = () => {
    //for(i = 0)
    pickupPiece()
   
}

const pickupPiece = () => {
    gameTable.addEventListener('click', (e) =>{
        piecePositions.forEach(piece => {
            let thisClick = lastClick
            if(thisClick === piece.cell){
                selectedPiece = piece
            }
        })
        placePiece()
    })
}

const placePiece = () => {
    gameTable.addEventListener('click', (e) =>{
        locationPatch() 
    })
}

const locationPatch = () =>{
    let thisClick2 = lastClick
    let patchData = {
            "cell": thisClick2
    }
    fetch(`http://localhost:3000/boards/${selectedPiece.id}`,{
    method: 'PATCH',
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify(patchData)
    })
    .then(res => res.json())
    .then(movePieceDom(thisClick2))
}

const movePieceDom = (thisClick2) => {
    selectedPiece.cell = thisClick2
}