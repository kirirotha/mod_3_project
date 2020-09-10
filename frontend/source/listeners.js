document.addEventListener("DOMContentLoaded", () => {
    getMinionPositions()
    renderTerrain()
    renderBoard()
    renderControlBoard()
    renderTitleLogo()
    //placementTest()
    //attackTest()
})

const cellListener = (gameTable) => {
    let ctx = gameTable.getContext('2d')
    gameTable.onmousemove = (e) => {
        lastHoverX = Math.ceil((e.pageX - 117)/40)
        lastHoverY = Math.ceil((e.pageY - 213)/40)
        lastHover = `${lastHoverX}_${lastHoverY}`
        // console.log(`last hover ${lastHover}`)
        let gradient = ctx.createLinearGradient(0, 0, 0, 640);
        gradient.addColorStop("0", "magenta");
        gradient.addColorStop("0.5" ,"blue");
        gradient.addColorStop("1.0", "red");
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        if (lastHoverX > 0 && lastHoverX < 17 && lastHoverY > 0 && lastHoverY < 17){
            rectX = ((lastHoverX-1) * 40 + 15)
            rectY = ((lastHoverY-1) * 40 + 15)
        }
    }
    gameTable.onclick = (e) => {
        lastClickX = Math.ceil((e.pageX - 117)/40)
        lastClickY = Math.ceil((e.pageY - 213)/40)
        lastClick = `${lastClickX}_${lastClickY}` 
        console.log(`last click ${lastClick}`)
    }
}


