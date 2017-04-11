/* S213250 *
 * Jason Mu */

//*** JavaScript for toggling grid figures***
/*** Reference source code - https://github.com/HIT226/Week-5-JS-Event-Listeners ***/

// toggle first grid figure
(function () {
    var fig = document.getElementById('toggle_grid');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_grid_btn');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();


// toggle second grid figure
(function () {
    var fig = document.getElementById('toggle_grid2');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_grid_btn2');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();