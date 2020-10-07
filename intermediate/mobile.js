var products = JSON.parse(product);
console.table(products);

for (i = 0; i < products.length; i++) {
    document.getElementById("result").innerHTML += `
     <div id="prod${i}">
     <p>${products[i].name}</p>
        <p> ${products[i].type}</p>
        <p> ${products[i].price} </p>
        <p> ${products[i].color}</p>
        <p id="${i}">Quantity: <span class="quan">${products[i].quantity}</span> <button class="btn"> Add to chart </button></p>
        
        <div>
            <img src="${products[i].image}" width="250px">
        </div>
        </div>
    <br> `
    console.log(products[i].image)
};