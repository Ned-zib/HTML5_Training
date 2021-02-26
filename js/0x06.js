function draw() {
    var ctx = document.getElementById('my_canvas').getContext('2d');
    //alert(ctx.canvas.id+"|"+ctx.canvas.width+"|"+ctx.canvas.height);

    ctx.fillStyle = "black"; //Canvas color for fill items
    ctx.strokeStyle = "blue"; //Canvas color for stroke items
    ctx.lineWidth = 5; //Line width for stroke items

    //in this example the circle will be move accross the x axis
    //we have to use the clear rect to clean the canvas after every circle draw
    var posX = 0;
    var posY = 200;
    setInterval(function () {

        ctx.fillStyle = "rgb(0,0,0,0.05)";
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        posX += 3;

        //after the x=200 we change the y to change the way
        if( posX > 200){
            posY += 3;
        }

        ctx.fillStyle = "white";
        ctx.beginPath();
        //ctx.arc(x, y, radius, starting point, ending point, direction)
        ctx.arc(posX, posY, 50, 0, Math.PI * 2, false)
        ctx.fill();
    }, 30);

}
window.onload = draw;