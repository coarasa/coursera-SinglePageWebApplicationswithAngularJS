(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuapp/templates/homeview.template.html'
  })
  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuapp/templates/categoriesview.template.html',
    controller: 'CategoriesViewController as ctrl',
    resolve: {
      categoriesPromise: [ 'MenuDataService', function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })
  // items list page
  .state('items', {
    url: '/items/{categoryId}',
    templateUrl: 'src/menuapp/templates/itemsview.template.html',
    controller: 'ItemsViewController as itemsctrl',
    resolve: {
      // myCategoryId: categoryId
      itemsPromise: [ '$stateParams','MenuDataService', function($stateParams, MenuDataService){
        return MenuDataService.getItemsForCategory($stateParams.categoryId);
      }]
    }
  });
}

})();
