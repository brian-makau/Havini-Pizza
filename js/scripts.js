var order = function(type,size,crust,toppings,delivery){
    this.type = type;
    this.sizes = sizes;
    this.crusts = crusts;
    this.toppings = toppings;
    this.delivery = delivery;
    this.number = number;
}
function getPrice(){

    let sizeCost;
    let crustCost;
    let toppings;
    let delivery;

    if (this.sizes === "small"){
        sizeCost = 600;
    }
    else if (this.sizes === "medium"){
        sizeCost = 800;
    }
    else if(this.sizes === "large"){
        sizeCost = 1000;
    }
    else if(this.sizes === "small"){
        crustCost === 200;
    }
    else if(this.sizes === "medium"){
        crustCost = 250;
    }
    else if (this.sizes === "large"){
        crustCost = 300;
    }
    else if (this.sizes === "small"){
        toppings = 100;
    }
    else if(this.sizes === "medium"){
        toppings = 200;
    }
    else if(this.sizes === "large"){
        toppings = 300;
    }
    else if(this.delivery === "deliver"){
        delivery = 150;
    }
    else if(delivery === "pick-up"){
        this.delivery = 0;
    };

}

$(document).ready(function(){
    $(".button").submit(function(){
        var sizes = $("");
        var types = $("");
        var crusts = $("");
        var toppings = $("");
        var number = $("");
        var delivery = $("");

        let price  = new order(sizeCost, crustCost,toppings,delivery);
    });
});