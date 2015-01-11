_.mixin({stemplate: (function(){
  var sandboxId = 'sandbox';
  var frame = document.createElement('iframe');
      frame.id = sandboxId;
      frame.src = 'sandbox.html';
      frame.style.display = 'none';
      document.body.appendChild(frame);
      var loaded = false;

  return function(template, data) {
    var request  = $.Deferred();
    if(chrome.tabs){
      var uid = _.random(1e6);
       $(window).on('message.'+ uid, function(event) {
        if(event.originalEvent.data.uid === uid){
          request.resolve(event.originalEvent.data.result);
        }
      });
      $(frame).on('load',function(){
        loaded = true;
        frame.contentWindow.postMessage({template: template, data: data, uid: uid}, '*');
      })
      if(loaded){
        frame.contentWindow.postMessage({template: template, data: data, uid: uid}, '*');
      }
    } else {
      var tmpl = _.template(template);
          setTimeout(function(){
            request.resolve(tmpl(data));
          })
    }
  return request;
}
})() })