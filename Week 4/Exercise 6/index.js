function updateHeadingContent(){
    var headingId = document.getElementById("headingId");
    headingId.firstChild.nodeValue = "New Value of Heading";
}
function addButtonOnHeading(){
    var headingId = document.getElementById("headingId");
    headingId.addEventListener("click",updateHeadingContent);
}
function updateParagraphContent(){
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.firstChild.nodeValue = "New Value of paragraph";
}
function addButtonOnParagraph(){
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.addEventListener("click",updateParagraphContent);
}

function addMoverEnterEventonParagraph() {
    var headingId = document.getElementById("headingId");
    headingId.addEventListener("onmouseover",updateHeadingContent);

}
function updateHTMLUsingJS(){
    addButtonOnHeading();
    addButtonOnParagraph();
}
document.addEventListener("DOMContentLoaded",updateHTMLUsingJS);