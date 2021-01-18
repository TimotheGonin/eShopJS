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
        for (let item of items) {
            resetMenu();
            items.push(item);
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
let submitBtn = document.getElementById('confBtn');

//C
submitBtn.addEventListener('click', addItem);

//D
function addItem(name) {
    name = newItem;
    if (checkDouble(name) || checkEmpty(name)) {
        alert('Impossible, produits déjà ajouté !');
    } else {
        items.push(name.value);
        addItemToMenu(items[(items.length) - 1]);
        name.value = '';
    }
}

//E
function checkDouble(name) {
    name = newItem;
    let isDouble = false;
    for (let i = 0; i < items.length; i++) {
        if (name.value === items[i]) {
            isDouble = true;
            name.value = '';
        }
    }
    return isDouble;
}

function checkEmpty(name) {
    name = newItem;
    let isEmpty = false;
    if (name.value === '') {
        isEmpty = true;
        alert('Impossible d\'ajouter un produit vide');
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
deleteBtn.addEventListener('click', deleteItem);

//B//C
function deleteItem(name) {
    name = newItem;
    if (checkDouble(name)) {
        items.splice(((items.length) - 1), 1);
        name.value = '';
        resetAndInitMenu();
    } else {
        alert('L\'item n\'existe pas');
        name.value = '';
    }
}