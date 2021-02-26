function draw() {
    var ctx = document.getElementById('my_canvas').getContext('2d');
    //alert(ctx.canvas.id+"|"+ctx.canvas.width+"|"+ctx.canvas.height);

    ctx.fillStyle = "red"; //Canvas color for fill items
    ctx.strokeStyle = "blue"; //Canvas color for stroke items
    ctx.lineWidth = 5; //Line width for stroke items
    ctx.font = "50px Helvetica"; //Attributes of the fonts

    //ctx.fillRect(x position, y position, width, height); Rectangle
    ctx.fillRect(20, 20, 100, 30);

    //ctxstrokeRect(x position, y position, width, height); Empty Rectangle
    ctx.strokeRect(50, 10, 100, 50);

    //ctx.clearRect(x position, y position, width, height); Clear Rect
    //Ussually used to clean canvas during animations
    ctx.clearRect(70, 30, 100, 100);

    // ctx.moveTo(x, y); beginnig of the line and ctx.lineTo(x, y); to move the line
    ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 200);
    ctx.lineTo(300, 500);
    //if you want to close the path use it will connect the last and the first point
    ctx.closePath();
    //We use fill to fill the figure
    ctx.fill();
    //we use stroke to show the shape of the figure
    ctx.stroke();

    //ctx.fillText("Text", x, y) Text
    ctx.fillText("Ned", 300, 300);

    ctx.beginPath();
    //ctx.arc(x, y, radius, starting point, ending point, direction)
    ctx.arc(300, 400, 20, 0, Math.PI*2, false)
    ctx.fill();
    
}
window.onload = draw;