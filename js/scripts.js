function order(type, size, crust, toppings, delivery, number) {
  this.type = type;
  this.size = size;
  this.crusts = crust;
  this.toppings = toppings;
  this.delivery = delivery;
  this.number = number;
  this.total = 0;
  this.pizzaSize = 0;
  this.pizzaCrustCost = 0;
  this.toppingsPrice = 0;
  this.deliveryPrice = 0;
}

order.prototype.makeOrder = function () {
  if (this.size === "Small") { 
    this.pizzaSize = 600;
  } else if (this.size === "Medium") {
    this.pizzaSize = 800;
  } else if (this.size === "Large") {
    this.pizzaSize = 1000;
  } else if (this.size === "Small") {
    this.pizzaCrustCost === 200;
  } else if (this.size === "Medium") {
    this.pizzaCrustCost = 250;
  } else if (this.size === "Large") {
    this.pizzaCrustCost = 300;
  } else if (this.size === "Small") {
    this.toppingsPrice = 100;
  } else if (this.size === "Medium") {
    this.toppingsPrice = 200;
  } else if (this.size === "Large") {
    this.toppingsPrice = 300;
  } else if (this.delivery === "Deliver") {
    this.deliveryPrice = 150;
  } else if (delivery === "Pick-up") {
    this.deliveryPrice = 0;
  }

  this.total =
    (this.pizzaSize + this.pizzaCrustCost + this.toppingsPrice + this.deliveryPrice) * this.number;
};

function getValues() {
  var sizes = document.getElementById("size").value;
  var types = document.getElementById("type").value;
  var crusts = document.getElementById("crust").value;
  var toppings = document.getElementById("topping").value;
  var number = document.getElementById("number").value;
  var delivery = document.getElementById("delivery").value;

  let newOrder = new order(types, sizes, crusts, toppings, delivery, parseInt(number));
  newOrder.makeOrder();
  window.alert(
    `Hello You ordered ${number} ${sizes} ${types} pizza(s) with ${crusts} with ${toppings} toppings. That should amount to ${newOrder.total}`
  );
}
