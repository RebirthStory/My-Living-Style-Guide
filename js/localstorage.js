/* S213250 *
 * Jason Mu */

/*** JavaScript for local storage form component ***
*** Reference source code - https://github.com/HIT226/Week-5-Local-Storage ***
*** Reference for styling of local storage component - 
https://www.sanwebe.com/2014/08/css-html-forms-designs ***/


// function below validates email form
function validate_email(validate) {
    
    /* valid_symbols has been declared as such to deal with edge-case with email validation - emails must have @ symbol, must have valid domain, must not have '.' at the end of email etc */
    var valid_symbols = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    
    
    /*** Reference for sweet alert - 
    http://t4t5.github.io/sweetalert/ ***
    *** Reference for email validation - 
    http://www.w3resource.com/javascript/form/email-validation.php/ ***/
    if (valid_symbols.test(validate.value) == false) {
        swal("An invalid email has been entered.", "Please try again.", "warning");
        return false;
    }
    return true;
}

/*** the below has been wrapped in self-calling function to keep global scope clean.
It contains functions to store, retrieve and reset data in local storage ***/
(function () {
    // selecting the elements by ID
    var name_input = document.getElementById('name_input');
    var email_input = document.getElementById('email_input');
    var msg_input = document.getElementById('msg_input');
    
    var output = document.getElementById('output');
    
    var submit_button = document.getElementById('submit');
    var retrieve_button = document.getElementById('retrieve');
    var reset_button = document.getElementById('reset');
    
    // event listeners for when buttons are clicked once
    submit_button.addEventListener('click', store_text);
    retrieve_button.addEventListener('click', retrieve_data);
    reset_button.addEventListener('click', reset_data);

    /* this function stores/updates the data that are entered in the forms when the submit button is clicked. 
    Each form has a different key 
    so they can be updated when new data has been entered and the submit button is pressed again */
    function store_text(event) {
        event.preventDefault();
        var name = name_input.value;
        var email = email_input.value;
        var msg = msg_input.value;
        if (name) {
            localStorage.setItem('name_storage', name);
            name_input.value = '';
            name_input.focus();
        } 
        if (email) {
            localStorage.setItem('email_storage', email);
            email_input.value = '';
        }
        if (msg) {
            localStorage.setItem('msg_storage', msg);
            msg_input.value = '';
        }
        output.textContent = 'Thank you for getting in contact with us.'; 
    }
    
    /* this function retrieves/reads the data that are in local storage when the retrieve button is clicked*/
    function retrieve_data(event) {
        event.preventDefault();
        var returnText = '';
        if (localStorage.length === 0) {
            returnText = 'There is nothing in our database.';
        }
        else {
            for (var i = 0; i < localStorage.length; i++) {
                returnText = "Name: " + localStorage.getItem('name_storage') + "\n" + "Email: " + localStorage.getItem('email_storage') + "\n" + "Message: " + localStorage.getItem('msg_storage') + "\n";
            }
        }
        console.log(localStorage);
        output.textContent = returnText;
    }
    
    /* this function clears/deletes the data that are in local storage when the reset button is clicked*/
    function reset_data(event) {
        event.preventDefault();
        localStorage.clear();
        output.textContent = 'Your information has been deleted.';
        storageIndex = 0;
    }
})();