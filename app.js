//[PART (1)]

//LINK TO INPUT TEXT(index.html)
let userInput = document.getElementById('newItem');

//TO EMPTY INPUT
function resetInput() {
    userInput.value = '';
}

//ARRAY FOR PAGE INIT
function initArrayProduct() {
    let products = ['Fender', 'Gibson', 'Ibanez', 'LAG'];
    return products;
}
initArrayProduct();

//RESET MENU
function resetMenu() {
    let ul = document.querySelector('ul');
    let lis = document.querySelectorAll('li');
    for (let i = 0; i < lis.length; i++) {
        let liSelection = lis[i];
        ul.removeChild(liSelection);
    }
}


//ADDING TO MENU
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

//GENERATE ITEMS TO MENU
function addItemToMenu(name) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.setAttribute('href', '#');
    a.setAttribute('onmouseover', "setInput('" + name + "')");
    a.setAttribute('onclick', "addToCart('" + name + "')");
    a.textContent = name;
    ul.appendChild(li);
    li.appendChild(a);
}

//RESET AND INIT MENU
function resetAndInitMenu() {
    resetMenu();
    addAllToMenu();
}
resetAndInitMenu();


//[PART (2)]

//LINK TO ADD BUTTON
let addBtn = document.getElementById('confBtn');

//EVENT => CHECKING (if EMPTY ARRAY), CHEKING (if INPUT === ARRAY) / (OK =>PUSHING TO ITEMS ARRAY)
addBtn.addEventListener('click', () => {
    if (checkEmpty(userInput.value)) {
        resetInput();
    } else if (checkDouble(userInput.value)) {
        alert('Impossible, produits déjà ajouté !');
        resetInput();
    } else {
        items.push(userInput.value);
        addItemToMenu(items[(items.length) - 1]);
        resetInput();
    }
});

//FUNCTION CHECK (if INPUT === ARRAY)
function checkDouble(name) {
    let isDouble = false;
    for (let i = 0; i < items.length; i++) {
        if (name === items[i]) {
            isDouble = true;
        }
    }
    return isDouble;
}

//FUNCTION CHECK (if EMPTY ARRAY)
function checkEmpty(name) {
    let isEmpty = false;
    if (name === '') {
        isEmpty = true;
        alert('Le champ est vide, action impossible');
    }
    return isEmpty;
}


//[PART (3)]

//LINK TO DELETE BUTTON
let deleteBtn = document.getElementById('delBtn');

//EVENT => CHECKING (if EMPTY ARRAY), SEARCH ITEM / (OK =>DELETE ITEM ARRAY + RESET AND INIT MENU)
deleteBtn.addEventListener('click', () => {
    if (checkEmpty(userInput.value)) {} else {
        for (let i = 0; i < items.length; i++) {
            if (userInput.value === items[i]) {
                items.splice(i, 1);
                resetAndInitMenu();
            }
        }
    }
    resetInput();
});

//ITEM IN MENU TO INPUT WITH MOUSE OVER 
function setInput(name) {
    userInput.value = name;
}


//[PART (4)]

//CART ARRAY
let cart = [];

//LINK WITH CART CONTENT AREA(index.html)
let cartStatus = document.getElementById('cartStatus');

//CART CONTENT DISPLAY(index.html)
function afficherTextPanier() {
    if (cart.length > 1) {
        cartStatus.textContent = "Vous avez " + cart.length + " produits dans le panier";
    } else {
        cartStatus.textContent = "Vous avez " + cart.length + " produit dans le panier";
    }
}


//EVENT LINKED WITH (GENERATE ITEMS TO MENU)
function addToCart(name) {
    cart.push(name);
    afficherTextPanier();
    showMeCart();
}

//LINK WITH CART'S IMAGE(index.html)
let reinitCartBtn = document.getElementById('reinitCart');

//EVENT TO EMPTY CART ARRAY + REINIT CART'S CONTENT DISPLAY(index.html)
reinitCartBtn.addEventListener('click', () => {
    cart.splice(0, cart.length);
    console.log(cart);
    afficherTextPanier();
    showMeCart();
});

//DISPLAY CART DETAIL(index.html)
function showMeCart() {
    let cartDetail = [];
    for (let i = 0; i < cart.length; i++) {
        cartDetail = cartDetail + ' ' + cart[i] + ',\n';
    }
    document.getElementById('cartDetail').textContent = cartDetail;
}

showMeCart();