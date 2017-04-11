/* S213250 *
 * Jason Mu */

/*** JavaScript for toggling fonts ***
*** Reference source code - https://github.com/HIT226/Week-5-JS-Event-Listeners ***/

// toggle red text
(function () {
    var paragraph = document.querySelector('#example_text_red');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
	} else {
		removeButton();
	}

	// when addEventListener not supported remove the toggle button
	function removeButton(){
		button.remove();
	}

    function addToggleFunctionality() {
        var button = document.getElementById('toggle_red');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.classList.toggle('color_change_red');
        });
    }
})();

// toggle green text
(function () {
    var paragraph = document.querySelector('#example_text_green');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
	} else {
		removeButton();
	}

	// when addEventListener not supported remove the toggle button
	function removeButton(){
		button.remove();
	}
    
    function addToggleFunctionality() {
        var button = document.getElementById('toggle_green');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.classList.toggle('color_change_green');
        });
    }
})();

//toggle blue text
(function () {
    var paragraph = document.querySelector('#example_text_blue');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
	} else {
		removeButton();
	}

	// when addEventListener not supported remove the toggle button
	function removeButton(){
		button.remove();
	}
    
    function addToggleFunctionality() {
        var button = document.getElementById('toggle_blue');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.classList.toggle('color_change_blue');
        });
    }
})();

// toggle font size to 32px
(function () {
    var paragraph = document.querySelector('#example_text_32');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
	} else {
		removeButton();
	}

	// when addEventListener not supported remove the toggle button
	function removeButton(){
		button.remove();
	}
    
    function addToggleFunctionality() {
        var button = document.getElementById('toggle_32');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.classList.toggle('toggle_32px');
        });
    }
})();

// toggle font size to 64px
(function () {
    var paragraph = document.querySelector('#example_text_64');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
	} else {
		removeButton();
	}

	// when addEventListener not supported remove the toggle button
	function removeButton(){
		button.remove();
	}
    
    function addToggleFunctionality() {
        var button = document.getElementById('toggle_64');
        button.addEventListener('click', function (event) {
            event.preventDefault();
            paragraph.classList.toggle('toggle_64px');
        });
    }
})();

// toggle HTML and CSS Source Code display with show/hide button
(function () {
    var source = document.getElementById('source_code');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var source_button = document.getElementById('toggle_source');
        source_button.addEventListener('click', function (event) {
            event.preventDefault();
            source.classList.toggle('code_display');
        });
    }
})();

(function () {
    var css = document.getElementById('css_code');
    if (Element.prototype.addEventListener) {
        addToggleFunctionality();
    }

    function addToggleFunctionality() {
        var css_button = document.getElementById('toggle_css');
        css_button.addEventListener('click', function (event) {
            event.preventDefault();
            css.classList.toggle('code_display');
        });
    }
})();
