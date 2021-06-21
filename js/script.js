// Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue(
    {
        el: '#app',
        data: {
            messaggio: 'You loaded this page on ' + new Date().toLocaleString(),
        }

    });


var img = document.createElement("img");

img.src = "img/edo.png";
var src = document.getElementById("x");

src.appendChild(img);
