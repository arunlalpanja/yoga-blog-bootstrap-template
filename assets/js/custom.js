/* Custom Script */

/* Scroll Top */
$(document).ready(function() {
    "use strict";
    var offSetTop = 300;
    var $scrollToTopButton = $('.scrollToTop');
    //Check to see if the window is top if not then display button
    $(window).scroll(function() {
        if ($(this).scrollTop() > offSetTop) {
            $scrollToTopButton.fadeIn();
        } else {
            $scrollToTopButton.fadeOut();
        }
    });

    //Click event to scroll to top
    $scrollToTopButton.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });

});