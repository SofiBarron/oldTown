const gridContainer = document.getElementById('js-gridContainer');

//HTML Template
const htmlGridTemplate = (product) => {
    return `<div class='catalogueCard card'>
                <div class='card-img'>
                <img src='${product.coverPicture}' class="card-img-top img-fluid cardImg" alt="Book cover">
                </div>
                <div class='card-body d-flex flex-column'>
                <h3 class='catalogueCardTitle card-title'>${product.name}</h3>
                <p class='catalogueCardSubp card-text'>By: ${product.author}</p>
                <h6 class='catalogueCardSubh6'>$${product.price}</h6>
                <button onclick='addItemsToCart(${JSON.stringify(product)})' class="btn btn-primary btn-block mt-auto catalogueCardBtn addToCart" id="${product.id}">Add to Cart
                </button>
                </div>
            </div>`;
}

//HTML Template Generator
const GridElements = (productList, container) => {
    container.innerHTML = '';

    if (productList.length > 0 ) {
        for (const product of productList) {
            const productGridInHTML = htmlGridTemplate(product);

            container.innerHTML += productGridInHTML;
        }
    } else {
        container.innerHTML = `<p class='errorContainerMessage'>No books found</p>`;
    }
};

GridElements(productList, gridContainer);