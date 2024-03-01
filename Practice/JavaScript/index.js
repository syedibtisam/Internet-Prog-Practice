function test(){
    console.log("test");
}
function main() {
    setInterval(test,1000);
}
document.addEventListener("DOMContentLoaded",main);