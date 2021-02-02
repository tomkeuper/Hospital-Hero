var collapsible = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < collapsible.length; i++) {
    collapsible[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.previousElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

function listFish() {
    console.log("Fish")
    console.log(menuItem.outerHTML)
    // var tempItem = menuItem
    menuItem.replaceWith('<a-entity id="js--menu-item" hoverable grabbable dynamic-body scale=".1 .1 .1" position="1 1 1" gltf-model="#list-fish-glb" ></a-entity>');
    // menuItem.setAttribute('gltf-model', "#list-fish-glb")
}
function listSteak() {
    console.log("Steak")
}
function listBanaan() {
    console.log("Banaan")
    menuItem.setAttribute('gltf-model', '#list-banaan-glb')
}