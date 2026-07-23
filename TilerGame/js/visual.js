
function drawGrid(canvas, ctx) {
    if (!canvas || !ctx) {
        return;
    }

    const padding = 20;
    const gridCount = 9;
    const boxSize = Math.min(canvas.width, canvas.height) - padding * 2;
    const startX = padding;
    const startY = padding;
    const cellSize = boxSize / gridCount;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.strokeRect(startX, startY, boxSize, boxSize);

    ctx.lineWidth = 1;
    for (let i = 1; i < gridCount; i++) {
        const x = startX + i * cellSize;
        const y = startY + i * cellSize;

        ctx.beginPath();
        ctx.moveTo(x, startY);
        ctx.lineTo(x, startY + boxSize);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(startX, y);
        ctx.lineTo(startX + boxSize, y);
        ctx.stroke();
    }
}