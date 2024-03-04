const is_new_car = car => {
    const brand = prompt("Введите бренд машины:");
    const year = prompt("Введите год выпуска машины:");
    
    if (!year || isNaN(year)) {
        console.log('Некорректный ввод года выпуска!');
        return;
    }
    
    if (year > 2019) {
        console.log(`Машина бренда ${brand} новая 🚗✨`);
    } else {
        console.log(`Машина бренда ${brand} старая 🚗👴`);
    }
};

is_new_car();