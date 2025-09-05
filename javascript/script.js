// selezioniamo l'input
const userField = document.getElementById('username');
const kmField = document.getElementById('kilometri');
const ageField = document.getElementById('anni');
// selezioniamo il bottone
const button = document.querySelector('button');
// selezioniamo il blocco di output
const nomeOutput = document.getElementById("nomeoutput");
const kmOutput = document.getElementById("kmoutput");
const ageOutput = document.getElementById("etaoutput");
const numCarrozza = document.getElementById("carrozza");
const numCodiceOP = document.getElementById("codiceop");
const prezzoOutput = document.getElementById("prezzobiglietto");
// seleziono l'elemento form
const mioForm = document.querySelector('form');


mioForm.addEventListener("submit",
    (evento) => {
        // per saltare da un input all'altro senza inviare
        evento.preventDefault();
        // output del nome con input che sparisce
        const nameValue = userField.value.trim();
        if (nameValue) {
            nomeOutput.innerHTML = nameValue;
            userField.value = "";
        }

        // output dei kilometri con input che sparisce
        const kmValue = kmField.value.trim();
        if (kmValue) {
            kmOutput.innerHTML = kmValue;
            kmField.value = "";
        }

        // output dell'età con input che sparisce
        const ageValue = ageField.value.trim();
        if (ageValue) {
            ageOutput.innerHTML = ageValue;
            ageField.value = "";
        }

        // generazione numero carrozza
        const carrozza = Math.floor(Math.random() * 10) + 1;
        numCarrozza.innerHTML = carrozza;

        // generazione CodiceOP
        const codice = Math.floor(Math.random() * 10000) + 1;
        numCodiceOP.innerHTML = codice;

        // prezzo biglietto
        let prezzoBiglietto = (0.21 * kmValue)

        // condizione per lo sconto
        if (ageValue < 18) {
            prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 20 / 100));
        } else if (ageValue >= 65) {
            prezzoBiglietto = prezzoBiglietto - ((prezzoBiglietto * 40 / 100));
        } else {
            prezzoBiglietto = (0.21 * kmValue);
        }

        // output del prezzo con i decimali
        const priceValue = (prezzoBiglietto.toFixed(2));
        prezzoOutput.innerHTML = `${priceValue}€`;
    }
)

