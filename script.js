class Circle {
    x;
    y;
    radius;
    color;

    constructor(x,y,radius,color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color =color;
    }
    render(canvas){
        canvas.beginPath();
        canvas.arc(this.x,this.y,this.radius,0,Math.PI*2)
        canvas.fillStyle = this.color;
        canvas.fill()
    }
}
let circle = new Circle(10,10,100,"#000000")
let canvas = document.getElementById("canvas").getContext("2d");
circle.render(canvas);