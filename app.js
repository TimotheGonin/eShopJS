//VIDER INPUT
function resetInput() {
    newItem.value = '';
}

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
    if (items.length === 0) {
        for (let item of initArrayProduct()) {
            items.push(item);
            addItemToMenu(item);
        }
    } else {
        resetMenu();
        for (let item of items) {
            addItemToMenu(item);
        }
    }
}

//D
function addItemToMenu(name) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('onmouseover', "setInput('" + name + "')");
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


//ALGO 2 Ajouter des produits au catalogue

//A créer champs input
//B créer un bouton avec EVENT onclick
//C sur EVENT appeler fonction AddItem(name) (le nom viens du input)
//d Ajouter element dans le arrayDeProduits (items)
//E function checkDoubles (doublons)
//fonction avec param name à tester / boucle sur produits et test chaque element
//si élement trouvé retrun true, sinon false

//B
let addBtn = document.getElementById('confBtn');

//C//D
addBtn.addEventListener('click', () => {
    if (checkDouble(newItem.value)) {
        alert('Impossible, produits déjà ajouté !');
        resetInput();
    } else {
        items.push(newItem.value);
        addItemToMenu(items[(items.length) - 1]);
        resetInput();
    }
});

//E
function checkDouble(name) {
    name = newItem;
    let isDouble = false;
    for (let i = 0; i < items.length; i++) {
        if (name.value === items[i]) {
            isDouble = true;
        }
    }
    return isDouble;
}

function checkEmpty(name) {
    name = newItem;
    let isEmpty = false;
    if (name.value === '') {
        isEmpty = true;
        alert('Le champ est vide, action impossible');
    }
    return isEmpty;
}


// ALGO 3 supprimer un produit de notre inventaire

// A ajouter bouton DELETE
// B créer fonction deleteItem(name)
// C parcourir la liste de produits et supprimer si trouvé
// D BONUS mousseOver : Si la souris survole un item du menu de gauche, faire un SET input pour avec le nom du produit survolé dans le champs texte

//A
let deleteBtn = document.getElementById('delBtn');

//B//C
deleteBtn.addEventListener('click', () => {
    if (checkEmpty(newItem.value)) {} else {
        for (let i = 0; i < items.length; i++) {
            if (newItem.value === items[i]) {
                items.splice(i, 1);
                resetAndInitMenu();
            }
        }
    }
    resetInput();
});

//D
function setInput(name) {
    document.getElementById("newItem").value = name;
}


// ALGO 4 panier ajouter et vider

//A creer Array qui correspond à notre panier
//B afficherTextPanier
//C onclick sur les elements du menu AddToCart(name)
//D bouton VIDER PANIER
//E afficher les details du panier(tous les produits)

//A
let cart = [];

//B
let cartStatus = document.getElementById('cartStatus');

function afficherTextPanier() {
    if (cart.length > 1) {
        cartStatus.textContent = "Vous avez " + cart.length + " ok plusieurs";
    } else {
        cartStatus.textContent = "Vous avez " + cart.length + " ok solo";
    }
}
afficherTextPanier();