(function () {
'use strict';

angular.module('data')
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath){
  var service = this;

  service.getAllCategories = function(){
    var categoriesPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
      // params: {
      //   category: shortName
      // }
    });
    return categoriesPromise;
  };

  service.getItemsForCategory = function(categoryShortName){
    // console.log("categoryShortName"+categoryShortName);
    var itemsForCategoryPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
       category: categoryShortName
      }
    });
    itemsForCategoryPromise.then(function(response){
      // console.log(response);
    })
    return itemsForCategoryPromise;
  };
}

})();
