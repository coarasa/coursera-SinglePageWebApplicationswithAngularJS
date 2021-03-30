(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['SubscriptorService'];
function SignUpController(SubscriptorService) {
  var $ctrl = this;
  $ctrl.shortname_checked = false;
  $ctrl.isShortnameValid = SubscriptorService.isShortnameValid;
  $ctrl.firstname = "";
  $ctrl.lastname = "";
  $ctrl.email = "";
  $ctrl.phone = "";
  $ctrl.shortname = "";
  $ctrl.submit = function () {
    SubscriptorService.validate($ctrl.shortname, $ctrl.firstname, $ctrl.lastname, $ctrl.email, $ctrl.phone);
    $ctrl.shortname_checked = true;
  };
  $ctrl.informationSaved = SubscriptorService.isInformationSaved;

}

})();
