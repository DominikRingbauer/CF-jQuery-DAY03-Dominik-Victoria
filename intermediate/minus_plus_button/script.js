var dataObjects = JSON.parse(data);

console.table(dataObjects);

for(var i = 0 ; i < dataObjects.length; i++){
	document.getElementById("result").innerHTML += `
		<div>
			<p>${dataObjects[i].name}</p>
			<p id="${i}">Points : <button class="plus"> + </button> <span class="points">${dataObjects[i].points}</span> <button class="minus"> - </button></p>
			<hr>
		</div>
	`;
}
	$(document).ready(function(){
		$(".plus").on("click", function(){
			var index = $(this).parent().attr("id");
			dataObjects[index].points += 5;
			// dataObjects[index] = dataObjects[index] + 5;
			$(this).parent().find(".points").html(dataObjects[index].points);
			console.table(dataObjects);
		})

		$(".minus").on("click", function(){
			var index = $(this).parent().attr("id");
			dataObjects[index].points -= 5;
			// dataObjects[index] = dataObjects[index] - 5;
			$(this).parent().find(".points").html(dataObjects[index].points);
			console.table(dataObjects);

		})
	})


