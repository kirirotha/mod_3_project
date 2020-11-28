let piecePositions

const getMinionPositions = () => {
    fetch('http://localhost:3000/minions')
    .then(res => res.json())
    .then(minions =>{
        getBoardPos(minions)
    })
}

const deleteMinion = (minion) =>{
    fetch(`http://localhost:3000/minions/${minion.id}`, {
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data => console.log(data))
}


const getBoardPos = (minions) =>{
    piecePositions = minions
    gameId = piecePositions[0].game_id
    renderBoard()
}
