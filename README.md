# sanbox-template-adapter
Chrome Extension undersorejs  template engine adapter (CSP)




https://developer.chrome.com/apps/manifest/sandbox

https://github.com/GoogleChrome/chrome-app-samples/tree/master/samples/sandbox


usage:

    var template = $('#form-template').html();
    _.stemplate(template, {app : app.config}).done(function(tmpl){
      $(tmpl).appendTo('.row');

      $('form').on('submit', function(evt){
        evt.preventDefault();
        evt.stopPropagation();
        submitForm(evt);
      })
    })