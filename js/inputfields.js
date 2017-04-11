/* S213250 *
 * Jason Mu */

/*** JavaScript for input fields ***
*** Reference source code - https://www.youtube.com/watch?v=e57ReoUn6kM ***/


// 'input' type addEventListener for input field component
(function () {
    var input_1 = document.getElementById('input_1');
    var input_2 = document.getElementById('input_2');
    var sum_output = document.getElementById('sum_output');

    input_1.addEventListener('input', add);
    input_2.addEventListener('input', add);

    function add() {
        
        /*** the logical OR operator || has been used to fix Edge-Case with output.textcontent displaying "NaN" if nothing is entered in one of the input fields ***/ 
        var one = parseFloat(input_1.value) || 0;
        var two = parseFloat(input_2.value) || 0;
        var sum = one + two;

        sum_output.textContent = 'Sum is: ' + sum;
    }
})();
