(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsViewController',ItemsViewController);

ItemsViewController.$inject = ['itemsPromise'];
function ItemsViewController(itemsPromise) {
  var itemsctrl = this;
  itemsctrl.items = itemsPromise.data.menu_items;
  itemsctrl.category_name = itemsPromise.data.category.name;
  itemsctrl.short_name = itemsPromise.data.category.short_name;
  itemsctrl.special_instructions = itemsPromise.data.category.special_instructions;
  // console.log(itemsPromise);

}

})();
