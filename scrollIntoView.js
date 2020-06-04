

window.onmessage = function(e){
    if (e.data && e.data.action === 'scrollIntoView') {
      // console.log('scrollIntoView!');
      let element = document.getElementById('shopify-section-' + e.data.elementId);
      // console.log('element',element)
      var options = {}
      options.behavior = 'smooth'
      element.scrollIntoView(options);
    }
};