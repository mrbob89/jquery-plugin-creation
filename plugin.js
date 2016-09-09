// IIFE
(function($){
    'use strict';

    $.fn.equalizeHeight = function () {
        var tallestHeight = 0,
            $stories = this;

        $stories.each(function (i, el) {
            var elHeight = $(el).height();
            if (elHeight > tallestHeight) {
                tallestHeight = elHeight;
            }
        });

        $stories.css('min-height', tallestHeight);

        return $stories;
    };
}( jQuery ));
