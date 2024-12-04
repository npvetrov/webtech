// Данные о товарах (expanded for more variety)
const products = [
    {
        name: "Кофе Арабика",
        description: "Ароматный кофе с нотами фруктов и цветов.",
        price: "500 руб.",
        image: "images/arabica-coffee.jpg"
    },
    {
        name: "Кофе Робуста",
        description: "Крепкий кофе с насыщенным вкусом.",
        price: "400 руб.",
        image: "images/robusta-coffee.jpg"
    },
    {
        name: "Кофе Либерика",
        description: "Уникальный кофе с дымным ароматом.",
        price: "600 руб.",
        image: "images/liberica-coffee.jpg"
    },
    {
        name: "Кофе Колумбия",
        description: "Сбалансированный вкус с легкой сладостью.",
        price: "450 руб.",
        image: "images/colombian-coffee.jpg"
    },
    {
        name: "Кофе Эфиопия",
        description: "Кофе с яркими фруктовыми нотами.",
        price: "550 руб.",
        image: "images/ethiopian-coffee.jpg"
    },
    {
        name: "Кофе Бразилия",
        description: "Нежный кофе с шоколадными нотами.",
        price: "480 руб.",
        image: "images/brazilian-coffee.jpg"
    }

];


function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('col'); // Bootstrap class for grid layout
        productItem.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><strong>${product.price}</strong></p>
                    <button class="btn btn-primary add-to-cart">Добавить в корзину</button>
                </div>
            </div>
        `;
        productList.appendChild(productItem);
    });
}

displayProducts();
