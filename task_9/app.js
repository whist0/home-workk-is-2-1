const products = [];

const addProduct = () => {
    const productName = document.querySelector("#product").value;
    const quantity = parseInt(document.querySelector("#quantity").value);
    const price = parseFloat(document.querySelector("#price").value);
  

    if (isNaN(quantity) || isNaN(price)) {
        alert('Пожалуйста, введите корректные данные');
        return;
    }
    if ((quantity) <= 0 || (price) <= 0) {
          alert('Поля цена и количество не могут быть меньше либо равными 0');
          return;
    }

    const productCost = quantity * price;
    products.push({product: productName, quantity, price, total: productCost});

    displayProducts();
    calculateTotalPrice();
  }

  displayProducts = () => {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    
    products.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.product}
      Количество: ${item.quantity}, 
      Цена за единицу: ${item.price}, 
      Общая стоимость: ${item.total}`;
      productList.appendChild(li);
    });
  }

  calculateTotalPrice = () => {
    const total = products.reduce((acc, item) => acc + item.total, 0);
    const totalPrice = document.getElementById('totalPrice');
    totalPrice.textContent = `Общая стоимость продуктов: ${total.toFixed(2)} руб`;
  }