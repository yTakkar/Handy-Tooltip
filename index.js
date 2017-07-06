var $ = require('jquery');

var Handy_tooltip = function(options){
  var defaults = {
    selector: null,
    extraTop: null,
    extraLeft: null,
    text: null
  };
  var settings = Object.assign({}, defaults, options);

  var 
    selector = settings.selector,
    extraTop = settings.extraTop,
    extraLeft = settings.extraLeft,
    text = settings.text;

  $(selector).on('mouseover', function(e){

    var 
      value    = (text == null) ? $(selector).data('description'): text,
      top      = $(selector).offset().top,
      left     = $(selector).offset().left,
      width    = $(selector).width()/2,
      dwidth   = $('#hoverdiv').width()/2,
      padding  = parseInt($(selector).css('padding-left')),
      dpadding = parseInt($('#hoverdiv').css('padding-left')),
      height   = parseInt($(selector).outerHeight()),
      dheight  = parseInt($('#hoverdiv').outerHeight());
    
    $('#hoverdiv').text(value);

    $('#hoverdiv').css({
      left: left+width-dwidth+padding-dpadding+extraLeft,
      display: "block"
    });

    if(top < (dheight)+16){
      $('#hoverdiv')
        .removeClass('after')
        .addClass('before')
        .css('top', top+height+10+extraTop);
    } else {
      $('#hoverdiv')
        .removeClass('before')
        .addClass('after')
        .css('top', top-height-10-extraTop);
    }

  }).on('mouseleave', function(e){
    $('#hoverdiv').css('display', 'none');
  });

}

module.exports = Handy_tooltip