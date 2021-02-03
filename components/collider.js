AFRAME.registerComponent('collide', {
    init: function (event) {
      const monkey = document.getElementById('js--monkey');
      const item = document.getElementById('js--menu-item');
      const heart = document.getElementById('js--heart');
      var modal = document.getElementById("myModal");
      const aapText = document.getElementById('js--aapText');
      
    

        this.collider = function(){
            
            item.addEventListener('collide', (event)=>{
                let collider = event.detail.body.el;
                
                if (item.getAttribute('gltf-model') === 'assets/banaan.glb' && collider.getAttribute('id') === 'js--monkey'){
                    
                        heart.setAttribute('visible', 'true');
                        let capture = document.createAttribute('animation');
                        capture.value = 'property: position; to: 0 2.5 -5s; dur: 2000';
                        heart.setAttribute('animation', capture.value);
                        localStorage.setItem('Monkey', true);

                        setTimeout( function(){
                            modal.style.display = "block";
                        }, 3000);
                        

                } if(item.getAttribute('gltf-model') === 'assets/nemo.glb' && collider.getAttribute('id') === 'js--monkey'){
                    
                    aapText.setAttribute('visible', 'true');

                    setTimeout( function(){
                        aapText.parentNode.removeChild(aapText);
                    }, 3000);
                }
            })
        }

        this.el.addEventListener('collide', this.collider);
        
    }
   
  });