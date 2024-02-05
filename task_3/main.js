let product = {
    name: "смартфон",
    price: 80000,
    inStock: true,
    brand: "IPhone",
    specifications: {
        screen: "OLED",
        camera: "48MP",
        memory: "256GB"
    },
    discount: {
        percentage: 10,
        expirationDate: "2024-04-01"
    }
}

let customer = {
    name: "Karina",
    budget: 120000
};

if (customer.budget < product.price) {
    console.log("У вас недостаточно средств для покупки этого товара.");
} else {
    console.log(`Поздравляем, ${customer.name}! Вы можете купить ${brand.name}.`);
    console.log("Технические характеристики товара:");
    for (const key in product.specifications) {
        console.log(`${key}: ${product.specifications[key]}`);
    }
    
    if (product.discount) {
        const discountedPrice = product.price - (product.price * (product.discount.percentage / 100));
        console.log(`Скидка ${product.discount.percentage}% действует до ${product.discount.expirationDate}`);
        console.log(`Цена со скидкой: ${discountedPrice}`);
    } else {
        console.log("Скидка на данный товар отсутствует.");
        console.log(`Цена: ${product.price}`);
    }
}