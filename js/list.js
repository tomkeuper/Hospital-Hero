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
    menuItem.setAttribute('gltf-model', 'assets/nemo.glb');
}
vlees.onclick = function() {
}

banaan.onclick = function(){
    menuItem.setAttribute('gltf-model', 'assets/banaan.glb');
}