(function($) {
    'use strict';

    $.fn.imageTitle = function () {
        this.each(function() {
            var $img = $(this);

            $img.wrap('<div class="img-wrapper"></div>')
            $img.after('<span class="img-title">' + $img.attr('title') + '</span>');
        })

        return this;
    };
}( jQuery ));
