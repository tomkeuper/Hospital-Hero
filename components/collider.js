AFRAME.registerComponent('collide', {
    init: function (event) {
      const monkey = document.getElementById('js--monkey');
      const sphere = document.getElementById('js--sphere');
      const crate = document.getElementById('js--monkeyCrate');s
      var modal = document.getElementById("myModal");
      
    

        this.collider = function(){
            
            sphere.addEventListener('collide', (event)=>{
                let collider = event.detail.body.el;
                
                if (collider.getAttribute('id') === 'js--monkey'){
                    crate.setAttribute('visible', 'true');
                    let capture = document.createAttribute('animation');
                    capture.value = 'property: position; to: 0 0 0; dur: 2000';
                    crate.setAttribute('animation', capture.value);
                    localStorage.setItem('Monkey', true);

                    setTimeout( function(){
                        monkey.parentNode.removeChild(monkey);
                        crate.parentNode.removeChild(crate);

                        modal.style.display = "block";
                    }, 3000);
                    
                    
                    

                } else if(collider.getAttribute('id') === 'js--penguin'){
                    console.log('?')
                } else {

                }
            })
        }

        this.el.addEventListener('collide', this.collider);
        
    }
   
  });