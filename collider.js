AFRAME.registerComponent('collide', {
    init: function (event) {
      const monkey = document.getElementById('monkey');
      const sphere = document.getElementById('js--sphere');
      const crate = document.getElementById('js--monkeyCrate');
      
    

        this.collider = function(){
            sphere.addEventListener('collide', (event)=>{
                let collider = event.detail.body.el;
                
                if (collider.getAttribute('id') === 'js--monkey'){
                    console.log(this);
                    console.log('banana');
                    crate.setAttribute('visible', 'true');
                    let capture = document.createAttribute('animation');
                    capture.value = 'property: position; to: 0 0 0; dur: 2000';
                    crate.setAttribute('animation', capture.value);

                    let remove = document.createAttribute('animation__remove');
                    

                } else if(collider.getAttribute('id') === 'js--penguin'){
                    console.log('?')
                } else {

                }
            })
        }

        this.el.addEventListener('collide', this.collider);
        
    }
   
  });