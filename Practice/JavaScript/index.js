function keyDetails(event) {
    console.log(event);
}
function main() {
    let pid = document.getElementById("p");
    document.addEventListener("keydown",keyDetails);
    pid.addEventListener("click",keyDetails);
}
document.addEventListener("DOMContentLoaded",main);