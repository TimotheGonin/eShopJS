//ALGO 1 Afficher liste de produits dynamique

//DATA + visualisation

//A les données : Créer Array de liste de produits (Strings)
function initArrayProduct() {
    let products = ['Fender', 'Gibson', 'Ibanez', 'LAG'];
    return products;
}
initArrayProduct();


//B Vider le menu UL LI : function resetMenu()
function resetMenu() {
    let ul = document.querySelector('ul')
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        let liSelection = lis[i];
        ul.removeChild(liSelection);
    }
}
resetMenu();


//C Boucler sur la liste des produits (boulce for array) function addAllToMenu()

let items = [];

function addAllToMenu() {
    for (let item of initArrayProduct()) {
        items.push(item);
    }
}
addAllToMenu();

//D Sur chaque produits Ajouter ELEMENT GRAPHIQUE addItemToMenu (param name)
function addItemToMenu() {

    for (let item of items) {
        let ul = document.querySelector('ul');
        let li = document.createElement('li');
        let a = document.createElement('a');
        a.setAttribute('href', '#');
        a.textContent = item;
        ul.appendChild(li);
        li.appendChild(a);
    }
}
addItemToMenu();

//E resetAndInitMenu() // restMenu + addAllToMenu