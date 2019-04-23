document.addEventListener("DOMContentLoaded", function() {
    /// Contact form verification ///
    // Gather elements
    var fieldContactFirstName = document.querySelector("#first-name");
    var fieldContactLastName = document.querySelector("#last-name");
    var fieldContactMessage = document.querySelector("#message");

    var btnContactSend = document.querySelector(".send-message-btn");

    // Check for button press
    btnContactSend.addEventListener("click", function() {
        var errorsOccured = false;

        
        if(fieldContactFirstName.value === "") {
            errorsOccured = true;
            fieldContactFirstName.classList.add("std-text-input--error");
        } else {
            fieldContactFirstName.classList.remove("std-text-input--error");
        }
        
        if(fieldContactLastName.value === "") {
            errorsOccured = true;
            fieldContactLastName.classList.add("std-text-input--error");
        } else {
            fieldContactLastName.classList.remove("std-text-input--error");
        }

        if(fieldContactMessage.value === "") {
            errorsOccured = true;
            fieldContactMessage.classList.add("std-text-input--error");
        } else {
            fieldContactMessage.classList.remove("std-text-input--error");
        }


        if(errorsOccured) {
            alert("Please fill in all required (*) fields.");
            return;
        }
    });
});