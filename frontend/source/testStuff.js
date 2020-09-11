
const depleteHealth = () => {
    piecePositions.forEach(piece => {
        piece.hp = 5
    });
}

const quickFeet = () => {
    piecePositions.forEach(piece => {
        piece.move_range = piece.move_range + 5 
    });
}

const longArms = () => {
    piecePositions.forEach(piece => {
        piece.atk_range = piece.atk_range + 5 
    });
}

const roidsBro = () => {
    piecePositions.forEach(piece => {
        piece.atk = piece.atk * 2 
    });
}

const getClose = () => {
    piecePositions.forEach(piece => {
        let cellParsed = piece.cell.split("_")
        if (cellParsed[1] > 8){
            piece.cell = `${cellParsed[0]}_9`
        }else{
            piece.cell = `${cellParsed[0]}_8`
        }
    });
}

const reviveDead = () => {
    piecePositions.forEach(piece =>{
        piece.active = true
    })
}