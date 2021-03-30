(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['SubscriptorService','ApiPath'];
function MyInfoController(SubscriptorService, ApiPath) {
  var $ctrl = this;
  $ctrl.informationSaved = SubscriptorService.isInformationSaved;
  $ctrl.firstname = SubscriptorService.firstname;
  $ctrl.lastname = SubscriptorService.lastname;
  $ctrl.email = SubscriptorService.email;
  $ctrl.shortname = SubscriptorService.shortname;
  $ctrl.name = SubscriptorService.name;
  $ctrl.description = SubscriptorService.description;
  $ctrl.basePath = ApiPath;

}

})();
