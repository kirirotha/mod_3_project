let piecePositions

const getMinionPositions = () => {
    fetch('http://localhost:3000/boards')
    .then(res => res.json())
    .then(boards =>{
        getBoardPos(boards)
    })
}

const getBoardPos = (boards) =>{
    piecePositions = boards
}
// const renderIcons = (boards) => {
//     boards.forEach(board =>{
//         renderIcon(TESTIMG, board.cell)
//     })
// }
