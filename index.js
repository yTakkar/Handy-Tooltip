var $ = require('jquery');

var HandyTooltip = function(options){
  var defaults = {
    selector: null,
    extraTop: null,
    extraLeft: null,
    value: null
  };
  var settings = Object.assign({}, defaults, options);

  var 
    selector = settings.selector,
    extraTop = settings.extraTop,
    extraLeft = settings.extraLeft,
    value = settings.value;

  var hoverdiv = $('#hoverdiv');

  $(selector).on('mouseover', function(e){

    var 
      text    = (value == null) ? $(selector).data('tooltip'): value,
      top      = $(selector).offset().top,
      left     = $(selector).offset().left,
      width    = $(selector).width()/2,
      dwidth   = hoverdiv.width()/2,
      padding  = parseInt($(selector).css('padding-left')),
      dpadding = parseInt(hoverdiv.css('padding-left')),
      height   = parseInt($(selector).outerHeight()),
      dheight  = parseInt(hoverdiv.outerHeight());
    
    hoverdiv.text(text);

    hoverdiv.css({
      left: left+width-dwidth+padding-dpadding+extraLeft,
      display: "block"
    });

    if(top < (dheight)+16){
      hoverdiv
        .removeClass('handy-tooltip-after')
        .addClass('handy-tooltip-before')
        .css('top', top+height+10+extraTop);
    } else {
      hoverdiv
        .removeClass('handy-tooltip-before')
        .addClass('handy-tooltip-after')
        .css('top', top-height-10-extraTop);
    }

  }).on('mouseleave', function(e){
    hoverdiv.css('display', 'none');
  });

}

module.exports = HandyTooltip