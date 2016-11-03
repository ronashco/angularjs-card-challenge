// Init the application on angularjs
var cardsApp = angular.module('cardsApp', [])

// Save the baseURL for rest API as a value
cardsApp.value('restUrl', 'http://localhost:8000/api.json')

// Global App configurations
cardsApp.run(function($http) {
  // $http.defaults.headers.common['Accept'] = 'application/json'
})
