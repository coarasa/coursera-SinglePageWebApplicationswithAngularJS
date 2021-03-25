(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesViewController',CategoriesViewController);

CategoriesViewController.$inject = ['categoriesPromise'];
function CategoriesViewController(categoriesPromise) {
  var ctrl = this;
  ctrl.categories = categoriesPromise.data;
  // console.log(ctrl.categories);

}

})();
