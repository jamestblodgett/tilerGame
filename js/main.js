const canvas = document.getElementById('canvas');
const ctx = canvas?.getContext('2d');

function gameLoop() {
    drawGrid(canvas, ctx);
    requestAnimationFrame(gameLoop);
}

function init() {
    if (!canvas || !ctx) {
        console.error('Canvas not found or could not be initialized.');
        return;
    }

    gameLoop();
}

window.addEventListener('load', init);