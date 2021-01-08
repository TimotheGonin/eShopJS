//ALGO 1 Afficher liste de produits dynamique

//DATA + visualisation

//A les données : Créer Array de liste de produits (Strings)
//B Vider le menu UL LI : function resetMenu()
//C Boucler sur la liste des produits (boulce for array) function addAllToMenu()
//D Sur chaque produits Ajouter ELEMENT GRAPHIQUE addItemToMenu (param name)
//E resetAndInitMenu() // resetMenu + addAllToMenu


//A
function initArrayProduct() {
    let products = ['Fender', 'Gibson', 'Ibanez', 'LAG'];
    return products;
}
initArrayProduct();

//B
function resetMenu() {
    let ul = document.querySelector('ul')
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        let liSelection = lis[i];
        ul.removeChild(liSelection);
    }
}


//C
let items = [];

function addAllToMenu() {
    for (let item of initArrayProduct()) {
        items.push(item);
        addItemToMenu(item);
    }
}

//D
function addItemToMenu(name) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent = name;
    ul.appendChild(li);
    li.appendChild(a);
}

//E
function resetAndInitMenu() {
    resetMenu();
    addAllToMenu();
}
resetAndInitMenu();