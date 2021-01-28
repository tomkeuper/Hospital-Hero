var collapsible = document.getElementsByClassName("collapsible");
var i;
console.log("Loaded: list.js")

console.log("Coll: " + collapsible[0])

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        console.log("Clicked on button")
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        console.log(content.style.display)
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}