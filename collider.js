AFRAME.registerComponent('collide', {
    init: function (event) {
      const monkey = document.getElementById('monkey');
      const sphere = document.getElementById('js--sphere');

        this.collider = function(){
            if(monkey.addEventListener('collide', console.log("i have collided")) && sphere.addEventListener('collide', console.log("sphere have collided"))){
                console.log("we both collided");
            }
        }
        
    },
    remove: function () {
        const monkey = document.getElementById('monkey');
        this.el.removeObject3D(monkey);
      }

   
  });