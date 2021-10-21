const cart = [];


function buy () {
    let prodotto= prompt ('Digita un prodotto che vuoi acquistare')
    if (cart.indexOf(prodotto) === -1) {
        cart.push (prodotto);
    if (prodotto === null){
        alert('per favore inserisci almeno un prodotto');
    }
    else if (prodotto === '') {
        alert ('Per favore inserisci almeno un prodotto');}
    else {
        alert('Prodotti inseriti nel carrello');
    }
    }
    else if (cart.includes(prodotto) == true && (prodotto)!== null)
    alert('Il prodotto è gia stato inserito');
    console.log (cart)
}
