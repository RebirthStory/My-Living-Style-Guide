/* S213250 *
 * Jason Mu */

//*** JavaScript for toggling figures ***
/*** Reference source code - https://github.com/HIT226/Week-5-JS-Event-Listeners ***/

// toggle first figure
(function () {
    var fig = document.getElementById('toggle_fig');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_vis_btn');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();

// toggle second figure
(function () {
    var fig = document.getElementById('toggle_fig2');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_vis_btn2');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();

// toggle third figure
(function () {
    var fig = document.getElementById('toggle_fig3');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_vis_btn3');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();

// toggle fourth figure
(function () {
    var fig = document.getElementById('toggle_fig4');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_vis_btn4');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();

// toggle fifth figure
(function () {
    var fig = document.getElementById('toggle_fig5');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_vis_btn5');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            fig.classList.toggle('toggle_fig_display');
        });
    }
})();
