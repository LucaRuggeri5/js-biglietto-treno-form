// selezioniamo l'input
const userField = document.getElementById('username');
const kmField = document.getElementById('kilometri');
const ageField = document.getElementById('anni');
// selezioniamo il bottone
const button = document.querySelector('button');
// selezioniamo il blocco di output
const nomeOutput = document.getElementById("nomeoutput");
const kmOutput = document.getElementById("kmoutput");
const ageOutput = document.getElementById("etaoutput")
// seleziono l'elemento form
const mioForm = document.querySelector('form');


mioForm.addEventListener("submit",
    (evento) => {
        // per saltare da un input all'altro senza inviare
        evento.preventDefault();

        const nameValue = userField.value.trim();
        if (nameValue) {
            nomeOutput.innerHTML = nameValue;
            userField.value = "";
        }

        const kmValue = kmField.value.trim();
        if (kmValue) {
            kmOutput.innerHTML = kmValue;
            kmField.value = "";
        }

        const ageValue = ageField.value.trim();
        if (ageValue) {
            ageOutput.innerHTML = ageValue;
            ageField.value = "";
        }
    }
)