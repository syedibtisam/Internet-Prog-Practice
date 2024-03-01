// paragraph Functions
function addMouseEnterEventonParagraph() {
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.addEventListener("mouseenter",updateParagraphContentOnEnter);
}
function addMouseLeaveEventonParagraph() {
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.addEventListener("mouseleave",updateParagraphContentOnLeave);
}
function updateParagraphContentOnEnter(){
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.firstChild.nodeValue = "New Value of Paragraph";
}
function updateParagraphContentOnLeave(){
    var paragraphId = document.getElementById("paragraphId");
    paragraphId.firstChild.nodeValue = "Initial Value of Paragraph";
}

// Heading Functions
function addMouseEnterEventonHeading() {
    var headingId = document.getElementById("headingId");
    headingId.addEventListener("mouseenter",updateHeadingContentOnEnter);
}
function addMouseLeaveEventonHeading() {
    var headingId = document.getElementById("headingId");
    headingId.addEventListener("mouseleave",updateHeadingContentOnLeave);
}
function updateHeadingContentOnEnter(){
    var headingId = document.getElementById("headingId");
    headingId.firstChild.nodeValue = "New Value of Heading";
}
function updateHeadingContentOnLeave(){
    var headingId = document.getElementById("headingId");
    headingId.firstChild.nodeValue = "Initial Value of Heading";
}
function updateHTMLUsingJS(){
    addMouseEnterEventonHeading();
    addMouseLeaveEventonHeading();
    addMouseEnterEventonParagraph();
    addMouseLeaveEventonParagraph();
}
document.addEventListener("DOMContentLoaded",updateHTMLUsingJS);