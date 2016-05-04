var myApp = angular.module ('myApp',[]);
myApp.controller('myController', ['$scope', function($scope) {
  var lyric = '';
  
  $.get('/api').success(function(data){
      $scope.lyric = data;
  });
}]);
