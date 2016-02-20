angular.module('angularfireSlackApp')
.controller('OauthCtrl', ['$state', 'Oauth', function($state, Oauth) {

  var oauthCtrl = this;
  console.log(Oauth);

  oauthCtrl.oauthLogin = function() {

    Oauth.authWithOAuthPopup('google', function(error, authData) {
      if (error) {
        console.log('Login failed!', error);
      } else {
        console.log('Authenticated successfully with payload:', authData);
      }
    });

  };

}]);
