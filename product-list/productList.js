//for adding product from the backend, add in in the below array of objects
let listOfProducts = [{"img": "./images/1957060443.jpg", "alt": "product-1", "name": "product1", "description": "Lorem Ipsum Lorem Ipsum", "amount": "100$"}, 
                    {"img": "./images/1957060443.jpg", "alt": "product-2", "name": "product2", "description": "Lorem Ipsum Lorem Ipsum", "amount": "200$"}];

const cardContainer = document.getElementById("card-container");

for(let i=0; i < listOfProducts.length; i++){
    const child = document.createElement("div");
    child.setAttribute("class", "card");
    child.style.minWidth = "300px";
    child.innerHTML = 
        `<img src="${listOfProducts[i].img}" class="card-img-top" alt="${listOfProducts[i].alt}">
        <div class="card-body">
            <h5 class="card-title">${listOfProducts[i].name}</h5>
            <div class="dropdown">
                <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    See Description
                </button>
                <div class="dropdown-menu p-3 dropdown-menu-end" style="max-width: 250px;">
                    <p class="mb-0">
                        ${listOfProducts[i].description}
                    </p>
                </div>
            </div>
        </div>
        <div class="card-body">
            <h5 class="card-title">${listOfProducts[i].amount}</h5>
        </div>`
    cardContainer.appendChild(child);
}



