(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
   var itemsToBuy = this;

   itemsToBuy.items = ShoppingListCheckOffService.getItemsToBuy();
   itemsToBuy.Bought = function(itemIndex){
     ShoppingListCheckOffService.transferToBought(itemIndex);
   };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemsBought = this;

  itemsBought.items = ShoppingListCheckOffService.getItemsBought();

}

function ShoppingListCheckOffService() {
  var service = this;

  var listItemsToBuy = [
    { name: "Anchovys de la Escala", quantity: 4 },
    { name: "salmon", quantity: 1 },
    { name: "coke", quantity: 10 },
    { name: "iberic spanish ham", quantity: 10 },
    { name: "cookies", quantity: 10 }
  ];
  var listItemsBought = [];

  service.getItemsToBuy = function () {
    return listItemsToBuy;
  };
  service.getItemsBought = function () {
    return listItemsBought;
  };
  service.transferToBought = function(itemIndex){
    listItemsBought.push(listItemsToBuy[itemIndex]);
    listItemsToBuy.splice(itemIndex, 1);
    // console.log(listItemsToBuy);
  };

}

})();
