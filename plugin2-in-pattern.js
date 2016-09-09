;(function ( $, window, document, undefined ) {
    $.fn.imageTitle = function ( options ) {

        options = $.extend( {}, $.fn.imageTitle.options, options );

        this.bestMethod = function () {
            console.log('working');
        }
        this.changePosition = function () {
            this.each(function () {
                $(this).hasClass('unique') ? $(this).css('margin-left', '200px') : false;
            });
        }

        return this.each(function () {
            var elem = $(this),
                title = '<span class="' + options.titleClass + '">' + elem.attr('title') + '</span>',
                wrapper = '<div class="' + options.wrapperClass + '"></div>';

            if (elem.parent('.' + options.wrapperClass).length === 0) {
                elem.wrap(wrapper);
            }

            options.position === true ? elem.after(title) : elem.before(title);
        });
    };

    $.fn.imageTitle.options = {
        position: true,
        wrapperClass: 'img-wrapper',
        titleClass: 'img-title',
        changePosition: function ( elem, param ) {
            elem.css('margin-left', '200px');
        }
    };
})( jQuery, window, document );
