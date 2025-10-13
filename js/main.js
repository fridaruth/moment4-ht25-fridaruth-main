"use strict";

// Eventlyssnare för DOM-inladdning och knapptryck.
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#generate").addEventListener("click", addInfo);
    document.querySelector("#clear").addEventListener("click", clearAll);
});


// Funktion för att läsa in all inmatad data.
function addInfo() {

    // Läs in all info
    const nameEl = document.querySelector("#fullname").value;

    const emailEl = document.querySelector("#email").value;

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
    const printName = document.querySelector("#previewfullname");
    printName.textContent = nameEl;

    const printEmail = document.querySelector("#previewemail");
    printEmail.textContent = emailEl;

    const printPhone = document.querySelector("#previewphone");
    printPhone.textContent = phoneEl;

    
    // Läs in vald font
    const newFont = document.querySelector("#font").value;
    const changeFont = document.querySelector(".card");
    changeFont.style.fontFamily = newFont;

    clearAll();
}


// Funktion för att rensa alla fält, rensa-knapp
function clearAll() {
    document.querySelector("#fullname").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#phone").value = "";
    document.querySelector("#font").value = "Georgia";
}

