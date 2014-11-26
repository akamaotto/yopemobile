angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('eventsCtrl', function($scope) {
  $scope.events = [
    { organizer: 'Yolo Wzy', location: 'Air Force One, Douala', id: 1 },
    { organizer: 'Dwayne Vianney', location: 'Calafatas, Yaounde', id: 2 },
    { organizer: 'Vernon Smith', location: 'Ayaba, Bamenda', id: 3 },
    { organizer: 'Otto Akama', location: 'Figaro Bar, Buea', id: 4 },
    { organizer: 'Pearl Njinjoh', location: 'Neptune, Yaounde', id: 5 },
    { organizer: 'Annabelle Bitch', location: 'Polytech, Yaounde', id: 6 }
  ];
})

.controller('eventCtrl', function($scope, $stateParams) {
});
