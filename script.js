var groceryList = [
{
	name: "apples",
	price: 3.99
},
{
	name: "milk",
	price: 1.99
},
{
	name: "yoghurt",
	price: 4.00
}
];

function grocery(name,price) {
	this.name = name;
	this.price = price;
	groceryList.push(this);
}

var formSubmit = document.getElementById("button");
var submit;

formSubmit.onlick = function() {
	var name = document.getElementById("name").value;
	var price = document.getElementById("price").value;
	var price = parseInt(price);
	submit = new grocery(name,price);
}




var newTotal = 0;

function newGroceryList () {
	for (i = 0; i <=groceryList.length; i++) {
		var newListElement = document.createElement('li');
	    var newText = document.createTextNode(groceryList[i].name + " " + groceryList[i].price);
	    newListElement.appendChild(newText);
	    var position = document.getElementsByTagName('ul')[0];
	    position.appendChild(newListElement);
	    newTotal += groceryList[i].price;
		}
	}

	document.getElementById("total").innerText = newTotal;

newGroceryList();