(function($){
  $.fn.HandyTooltip = function(options){
    this.each(function(){

      var elem = $(this);

      var defaults = {
        extraTop: null,
        extraLeft: null,
        text: null
      };

      var settings = $.extend({}, defaults, options);

      var 
        extraTop = settings.extraTop,
        extraLeft = settings.extraLeft,
        text = settings.text;

      elem.on('mouseover', function(e){

        var 
            value = text == null ? elem.data('description') : text,
            top = elem.offset().top,
            left = elem.offset().left,
            width = elem.width()/2,
            dwidth = $('#hoverdiv').width()/2,
            padding = parseInt(elem.css('padding-left')),
            dpadding = parseInt($('#hoverdiv').css('padding-left')),
            height = parseInt(elem.outerHeight()),
            dheight = parseInt($('#hoverdiv').outerHeight());

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

    });
    return this;
  }
}(jQuery));
