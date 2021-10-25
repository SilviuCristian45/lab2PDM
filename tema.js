window.addEventListener("deviceorientation",on_device_orientation);

function on_device_orientation(evt) {
    let alpha = evt.alpha;
    let beta = evt.beta;
    let gamma = evt.gamma;

    document.getElementById("a").innerHTML = "alpha = "+alpha;
    document.getElementById("b").innerHTML = "beta = "+beta;
    document.getElementById("c").innerHTML = "gamma = "+gamma;

    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let centru = {x:canvas.width/2, y:canvas.height/2}
    let latura_patrat = 50;
    context.clearRect(0, 0, c.width, c.height);
    context.fillStyle = "#6A0888";
    context.beginPath();
    context.arc(180, 150, gamma);
}