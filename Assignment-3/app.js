(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
.service('MenuSearchService', MenuSearchService);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
   var ctrl = this;

   ctrl.found = [];
   ctrl.showEmptyMessage = false;

   ctrl.searchTerm = "";

   ctrl.getMatchedMenuItems = function (){
     if (ctrl.searchTerm == ""){
       ctrl.showEmptyMessage = true;
       ctrl.found = []
     }else{
       var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

       promise.then(function (response) {
         ctrl.found = response;
         if(!ctrl.found.length){
           ctrl.showEmptyMessage = true
         }else{
           ctrl.showEmptyMessage = false
         }
       })
       .catch(function (error) {
         console.log(error);
       });
     }
   };

   ctrl.removeItem = function (index) {
     ctrl.found.splice(index,1);
  };

}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItemsList.html',
    scope: {
      found: '<',
      remove: '&'
    }
    // controller: FoundItemsDirectiveController,
    // controllerAs: 'list',
    // bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController(){
  var list=this;
  console.log(this.found);
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http,ApiBasePath) {
  var service = this;
  // var foundItems = [];

  service.getMatchedMenuItems= function(searchTerm){

    var httpAnswerPromise = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      // params: {
      //   category: shortName
      // }
    });

    return httpAnswerPromise.then(function(result) {
      var found = [];
      var foundItems = result.data.menu_items;
      // process result and only keep items that match
      for (var i = 0; i < foundItems.length; i++) {
        if (foundItems[i].description.toLowerCase().indexOf(searchTerm) !== -1) {
          found.push(foundItems[i]);
        }
      }

      // return processed items
      return found;
    });
  };

}

})();
