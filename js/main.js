"use strict";

// Eventlyssnare för DOM-inladdning och knapptryck.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#generate").addEventListener("click", addInfo);
    document.querySelector("#clear").addEventListener("click");
});


// Funktion för att läsa in all inmatad data.
function addInfo() {

    // läs in namn
    const nameEl = document.querySelector("#fullname").value;

    // läs in mail
    const emailEl = document.querySelector("#email").value;

    // läs in telefonnummer
    const phoneEl = document.querySelector("#phone").value;


// Kontrollera den inmatade informationen.



// Skapa felmeddelanden.


    // skriv ut namn
    const printName = document.querySelector("#previewfullname");
    printName.textContent = nameEl;

    // skriv ut mail
    const printEmail = document.querySelector("#previewemail");
    printEmail.textContent = emailEl;

    // skriv ut telefonnummer
    const printPhone = document.querySelector("#previewphone");
    printPhone.textContent = phoneEl;

    
    // läs in vald font

}


// Funktion för att rensa alla fält.

