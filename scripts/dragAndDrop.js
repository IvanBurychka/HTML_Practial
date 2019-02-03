function addDnDHandlers() {
    const coffeeImages = document.getElementsByClassName('productarticlewide');

    const shoppingCartDropzone = document.getElementById('shoppingcart');
    const shoppingCart = document.querySelectorAll('#shoppingcart ul')[0];
    
    for (let i = 0; i < coffeeImages.length; i++) {
        coffeeImages[i].addEventListener('dragstart', function (ev) {
            ev.dataTransfer.effectAllowed = 'copy';
            ev.dataTransfer.setData('Text', this.getAttribute('id'));
        }, 'false');
    }

    shoppingCartDropzone.addEventListener('dragover', function (ev) {
        if (ev.preventDefault) {
            ev.preventDefault()
        }
        ev.dataTransfer.dropEffect = 'copy';
        return false;
    }, false);

    shoppingCartDropzone.addEventListener('drop', function (ev) {
        if (ev.stopPropagation) {
            ev.stopPropagation()
        }

        const coffeeId = ev.dataTransfer.getData('Text');
        const element = document.getElementById(coffeeId);

        addCoffeeToShopingCart(element, coffeeId);
        ev.stopPropagation();

        return false;
    }, false);
    
    function addCoffeeToShopingCart(item, id) {
        const html = id + " " + item.getAttribute('data-price');

        const liElement = document.createElement('li');
        liElement.innerHTML = html;

        shoppingCart.appendChild(liElement);
    }
    
}
