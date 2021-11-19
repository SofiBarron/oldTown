//Back to top - Arrow
$('#toTop').append(
    `<div class="arrowStyle">
    <a href="#top" id="bottom"><i class="fas fa-arrow-up fa-2x"></i></a>
    </div>
    `
);

$('#bottom').click(function(e) {
    let target = $('#newInSec');

    if( target.length ) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

//Search Event Functionality
const searchInput = document.getElementById('js-searchInput');
const searchButton = document.getElementById('js-searchButton');

function filterProducts (e) {
    e.preventDefault()
    const searchInputValue = searchInput.value;

    const filteredProducts = productList.filter((productList) => {
        const productName = productList.name.toLowerCase();
        return productName.includes (searchInputValue.toLowerCase());
    });

    GridElements(filteredProducts, gridContainer);
}

searchButton.addEventListener("click", filterProducts);

//Item Counter Functionality
let itemCounter = 0;

function addToCounter () {
    //Update value
    itemCounter += +1;
    $("#cartCounter").animate({
        opacity: 1},
        300, function() {
            $(this).text(itemCounter);
        })
        
        //Show notification toaster
        toastr.success('Find your picks in the cart','Done!',{
            "timeOut": 0,
            "extendedTimeOut": 0,
            "progressBar": true,
            "preventDuplicates": true,
        });
} 

function removeFromCounter () {
    itemCounter += -1;
    $("#cartCounter").animate({
        opacity: 1},
        300, function() {
            $(this).text(itemCounter);
        })
}

function resetCounter () {
    itemCounter = 0;
    $("#cartCounter").animate({
        opacity: 1},
        300, function() {
            $(this).text(itemCounter);
        })
}