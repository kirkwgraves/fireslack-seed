angular.module('angularfireSlackApp')
.service('Oauth', ['FirebaseUrl',
  function(FirebaseUrl) {

  var ref = new Firebase(FirebaseUrl);

  return ref;

}]);
