var products = JSON.parse(product);
console.table(products);

for (i = 0; i < products.length; i++) {
    document.getElementById("result").innerHTML += `
     <a href="${i}.html"><div id="prod${i}">
     <p>${products[i].name}</p>
        <p> ${products[i].type}</p>
        <p> ${products[i].price} </p>
        <p> ${products[i].color}</p>
        <p id="${i}">Quantity: <span class="quan">${products[i].quantity}</span> <button class="btn"> Add to chart </button></p>
        
        <div>
            <img src="${products[i].image}" width="250px">
        </div>
        </div></a>
    <br> `
    console.log(products[i].image)
};

$(document).ready(function(){
	$(".btn").on("click", function(){
		var index = $(this).parent().attr("id");
		products[index].quantity -= 1;
		$(this).parent().find(".quan").html(products[index].quantity);
	});
});

for (var i = 0; i < products.length; i++){
  	if (products[i].type == "Phone"){
  		$(`#prod${i}`).css("background-color", "green");
  	} else if (products[i].type == "Notebook"){
  		$(`#prod${i}`).css("background-color", "red");
  	} else if (products[i].type == "Tablet"){
  		$(`#prod${i}`).css("background-color", "blue");
  	}
  }  
