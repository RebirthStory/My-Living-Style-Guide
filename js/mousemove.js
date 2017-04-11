/* S213250 *
 * Jason Mu */

/*** JavaScript for toggling different images with mouseenter and mouseleave ***
*** Reference source code - https://github.com/HIT226/Week-5-JS-Event-Listeners ***/

// mouseenter to toggle goku display none and super goku display inherit
(function () {
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var goku_display = document.getElementById('toggle_image_1');
        var ssgoku_display = document.getElementById('toggle_image_2');
        
        goku_display.addEventListener('mouseenter', function (event) {
        event.preventDefault();
         goku_display.classList.toggle('image_display_none');
        ssgoku_display.classList.toggle('image_display_inherit');
        });
    }
})();

// mouseleave to toggle goku remove display none and super saiyan goku remove display inherit classes
(function () {
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var goku_display = document.getElementById('toggle_image_1');
        var ssgoku_display = document.getElementById('toggle_image_2');
        ssgoku_display.addEventListener('mouseleave', function (event) {
            event.preventDefault();
            goku_display.classList.toggle('image_display_none');
            ssgoku_display.classList.toggle('image_display_inherit');
        });
    }
})();