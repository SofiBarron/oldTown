//Add to Cart - Button Interaction
$('.addToCart').click(addToCounter);

//Cart - Button Interaction
$('#cartButton').click(function() {
    showEmptyModalView();
    updateCart();
})

//Cart Logic
let cart = [];
let totalToPay = 0;

//Cart Modal View
const itemsContainer = document.getElementById('selectedItems');
const modalBody = document.getElementById('modalContainer');

//Modal Content Template
const modalContents = (product) => {
    return `<div class="row justify-content-around">
            <p class="col-md-4">${product.name}</p>
            <p class="col-md-4">${product.author}</p>
            <p class="col-md-3">$${product.price}</p>
            <div class="col-md-1 ml-auto">
                <a href="#" onclick='removeItem(${product.id})' type='button' class='removeItem'><i class="far fa-times-circle fa-1x"></i></a>
            </div>
        </div>`
}

//Modal Empty Template
const emptyModal = () => {
    return `<div class="modal-body">
            <div class="container-fluid">
                <p class="cartEmptyMessage">The cart is empty!</p>
            </div>
            </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>`
}

//Template Generator for Product View on Modal
const modalItemView = (cart, modalContainer, selectedItems) => {
    modalContainer.innerHTML='';
    selectedItems.innerHTML='';


    if (cart.length > 0) {
        for (const product of cart) {
            $('.cartModalDetails').show();
            const itemsGrid = modalContents(product);
            selectedItems.innerHTML += itemsGrid;
        }
    }
}

//Calculator
function calculateTotalToPay () {
    totalToPay = parseFloat(cart.reduce((acc, el) => acc += el.price, 0)).toFixed(2);
    document.getElementById('totalPrice').innerHTML = `$${totalToPay}`;
}

//Add items to cart
function addItemsToCart(product) {
    cart.push(product);
    updateCart();
}

//Update Cart
function updateCart () {
    selectedItems.innerHTML = '';

    cart.forEach((product) => {
        const itemsListed = modalContents(product);

        modalItemView(cart,itemsListed,selectedItems);
    })
    calculateTotalToPay();
    showEmptyModalView();
}

//Remove item from cart
function removeItem(id) {
    let itemToBeRemoved = cart.find((element) => element.id == id);
    let index = cart.indexOf(itemToBeRemoved)
    cart.splice(index,1);
    updateCart();
    removeFromCounter();
}

//Empty modal view 
function showEmptyModalView() {
    if (cart.length == 0) {
        modalContainer.innerHTML = '';
        $('.cartModalDetails').hide();
        modalContainer.innerHTML += emptyModal();
    } else {
        modalContainer.innerHTML = '';
    }
}

//Purchase Made - Clear Cart
$('#buyButton').click(function () {
    $('#cartModal').modal('hide');
    cart = [];
    updateCart();
    resetCounter();

    toastr.success('Happy reading','Bought!',{
        "timeOut": 0,
        "extendedTimeOut": 0,
        "progressBar": true,
        "preventDuplicates": true,
    });
})