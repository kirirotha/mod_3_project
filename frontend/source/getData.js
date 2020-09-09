let piecePositions

const getMinionPositions = () => {
    fetch('http://localhost:3000/minions')
    .then(res => res.json())
    .then(minions =>{
        getBoardPos(minions)
    })
}

const getBoardPos = (minions) =>{
    piecePositions = minions
    renderBoard()
}
