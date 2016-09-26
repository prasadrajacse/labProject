angular.module('starter.controllers', [])

.controller('SignInCtrl', function($scope, $state) {

  $scope.signIn = function(user) {
    $state.go('tab.adapters');
  };

})

.controller('DashCtrl', function($scope) {})

.controller('viewLogCtrl', function($scope) {})
  
.controller('daappsCtrl', function($scope) {})


.controller('SearchCtrl', function($scope) {
  $scope.clearSearch = function() {
    $scope.search = '';
  };
})

.controller('AdaptersCtrl', function($scope,$ionicPopup,$state, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.searchClicked = function(){
    $state.go('tab.adapter-search');

  };
  $scope.viewLogClicked = function(){
    $state.go('tab.adapter-viewlog');

  };


  $scope.statusChangeClicked = function(){

    var confirmPopup = $ionicPopup.confirm({
      title: 'Server',
      template: 'Are you sure you want to start/stop?'
    });

    confirmPopup.then(function(res) {
      if(res) {
        console.log('You are sure');
      } else {
        console.log('You are not sure');
      }
    });

  };

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
