(function () {
'use strict';

angular.module('Assignment01', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.enteredFood = "";
  $scope.message = "";
  $scope.myColor = "black";
  $scope.borderWidth = "thin"

  $scope.checkFood = function () {
    const re = /\s*(?:,|$)\s*/ //To suppress all initial and trailing spaces.
    //console.log(($scope.enteredFood).split(re).filter(Boolean));
    // .filter(Boolean) will get rid of the empty elements in the array
    const numberOfEntries = ($scope.enteredFood).split(re).filter(Boolean).length;
    if (numberOfEntries == 0) {
      $scope.borderWidth = "thick"
      $scope.myColor = "red";
      $scope.message = "Please enter data first";
    } else if (numberOfEntries <= 3) {
      $scope.borderWidth = "thin"
      $scope.myColor = "green";
      $scope.message = "Enjoy!";
    } else {
      $scope.borderWidth = "thin"
      $scope.myColor = "green";
      $scope.message = "Too much!";
    }
  };

}

})();
