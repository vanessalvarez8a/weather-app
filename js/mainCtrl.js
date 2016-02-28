var app = angular.module('weatherApp');

app.controller('mainCtrl', function($scope, appService){

// appService.serviceTest();

$scope.getForecast = function() {
  appService.cityWeather($scope.cityWeather).then(function(weatherArray) {
    $scope.forecast = weatherArray;
  })
  
}


});




