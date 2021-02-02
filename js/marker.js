AFRAME.registerComponent('registerevents', {
init: function () {
  var marker = this.el;

  marker.addEventListener('markerFound', function() {
    var markerId = marker.id;
    console.log('markerFound', markerId);

  });
}
});
