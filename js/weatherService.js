var app = angular.module('weatherApp');

app.service('appService', function($http, $q){
 
// this.serviceTest = function() {
//   console.log("im alive");
// }

this.cityWeather = function() {
  var deferred = $q.defer();
  $http({
    method: "JSONP",
    url: 'http://api.openweathermap.org/data/2.5/forecast?q=Miami=,us&mode=JSON&appid=44db6a862fba0b067b1930da0d769e98'
  }).then(function(response) {
    deferred.resolve(response.data.city);

  })
  return deferred.promise;

}





});

