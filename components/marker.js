AFRAME.registerComponent('registerevents', {
init: function () {
  const monkey = document.getElementById('js--monkey');
  var marker = this.el;

  marker.addEventListener('markerFound', function() {
    var markerId = marker.id;
    console.log('markerFound', markerId);
    monkey.setAttribute('visible', 'true');

  });
}
});
