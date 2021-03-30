(function () {
"use strict";

angular.module('common')
.service('SubscriptorService', SubscriptorService);

SubscriptorService.$inject = ['$http', 'ApiPath'];
function SubscriptorService($http, ApiPath) {
  var subscriptor = this;
  subscriptor.firstname = "";
  subscriptor.lastname = "";
  subscriptor.email = "";
  subscriptor.shortname = "";
  subscriptor.name = "";
  subscriptor.description = "";

  var shortnameIsValid = false;
  var informationSaved = false;

  subscriptor.isShortnameValid = function(){
    return shortnameIsValid;
  };

  subscriptor.isInformationSaved = function(){
    return informationSaved;
  };

  subscriptor.validate = function(shortName, firstname, lastname, email)
  {
    var promise = $http({
      method: "GET",
      url: (ApiPath + "/menu_items/" + shortName + ".json" )
      // params: {
      //   category: shortName
      // }
    });
    promise.then(function (response) {
         shortnameIsValid = true;
         console.log(response.data);
         informationSaved = true;
         subscriptor.firstname = firstname;
         subscriptor.lastname = lastname;
         subscriptor.email = email;
         subscriptor.shortname = shortName;
         subscriptor.name = response.data.name;
         subscriptor.description = response.data.description;

         // console.log(subscriptor.shortnameIsValid);
       })
       .catch(function (error) {
         shortnameIsValid = false;
         // console.log(subscriptor.shortnameIsValid);
         informationSaved = false;

       });
  };



}

})();
