"use strict";

// Eventlyssnare för DOM-inladdning och knapptryck.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#generate").addEventListener("click", addInfo);
    document.querySelector("#clear").addEventListener("click");
});


// Funktion för att läsa in all inmatad data.
function addInfo() {

    // Läs in namn
    const nameEl = document.querySelector("#fullname").value;

    // Läs in mail
    const emailEl = document.querySelector("#email").value;

    // Läs in telefonnummer
    const phoneEl = document.querySelector("#phone").value;


    // Array för felmeddelanden
    const errors = [];

    // Kontrollera den inmatade informationen och ge felmeddelande.
    if (nameEl === "") {
        errors.push("Du måste fylla i ett namn!");
    }
    if (emailEl === "") {
        errors.push("Du måste fylla i en epostadress!");
    }
    if (phoneEl === "") {
        errors.push("Du måste fylla i ett telefonnummer!");
    }

    // Skriv ut felmeddelanden
    const errorEl = document.querySelector("#errorlist");
    errorEl.innerHTML = "";             //rensa tidigare felmeddelanden
    if (errors.length > 0) {
        errors.forEach(error => {
            const li = document.createElement("li"); 
            li.textContent = error;
            errorEl.appendChild(li);
        });
    }

    // Skriv ut allt på kortet.
    // Skriv ut namn
    const printName = document.querySelector("#previewfullname");
    printName.textContent = nameEl;

    // Skriv ut mail
    const printEmail = document.querySelector("#previewemail");
    printEmail.textContent = emailEl;

    // Skriv ut telefonnummer
    const printPhone = document.querySelector("#previewphone");
    printPhone.textContent = phoneEl;

    
    // Läs in vald font
    const newFont = document.querySelector("#font").value;
    const changeFont = document.querySelector(".card");
    changeFont.style.fontFamily = newFont;
}


// Funktion för att rensa alla fält.

