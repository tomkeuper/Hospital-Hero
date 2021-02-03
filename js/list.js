var collapsible = document.getElementsByClassName("collapsible");
var i;
const vlees = document.getElementById('js--steak');
const banaan = document.getElementById('js--banaan');
const vis = document.getElementById('js--vis');
const menuItem = document.getElementById('js--menu-item');



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

vis.onclick = function() {
    console.log("Fish");
    // var tempItem = menuItem
    menuItem.setAttribute('gltf-model', 'assets/nemo.glb');
    // menuItem.setAttribute('gltf-model', "#list-fish-glb")
}
vlees.onclick = function() {
    console.log("Steak");
}

banaan.onclick = function(){
    console.log("Banaan");
    menuItem.setAttribute('gltf-model', 'assets/banaan.glb');
}