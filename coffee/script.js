// Данные о товарах
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

// Функция для отображения товаров
function displayProducts() {
    const productList = document.getElementById('product-list');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p><strong>${product.price}</strong></p>
            <button class="add-to-cart">Добавить в корзину</button>
        `;
        
        productList.appendChild(productItem);
    });
}

// Запуск функции отображения товаров
displayProducts();
