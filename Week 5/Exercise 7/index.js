function moveCircle(){
    circleId = document.getElementById("circle");
    let leftValue = circleId.offsetLeft;
    circleId.style.left = leftValue - 10 + "px";
    console.log("key");
}

function main() {
    circleId = document.getElementById("circle");
    circleId.addEventListener("click",moveCircle);
    document.addEventListener('keydown',moveCircle);
}

document.addEventListener("DOMContentLoaded",main);