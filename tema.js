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
    let basicRadius = 10;
    context.clearRect(0, 0, c.width, c.height);
    context.fillStyle = "#19C0F5";
    context.beginPath();
    //gamma = (gamma < 0) ? -1*gamma : gamma; //daca gamma e cu -
    context.arc(180, 150, basicRadius+gamma,0, 2 * Math.PI);
    context.fill();
}