//ALGO 1 Afficher liste de produits dynamique

//DATA + visualisation

//A les données : Créer Array de liste de produits (Strings)
function initArrayProduct() {
    var products = ['Fender', 'Gibson', 'Ibanez', 'LAG'];
    return products;
};
console.log(initArrayProduct());


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

//D Sur chaque produits Ajouter ELEMENT GRAPHIQUE addItemToMenu (param name)

//E resetAndInitMenu() // restMenu + addAllToMenu