
// Service responsible for fetching card from server
cardsApp.service('cardsService', function($http, $q, restUrl, storageService) {

  // Save last card gotten from server. it will persist as services ar singleton in Angularjs
  var lastCard = {};

  // Fetch all cards from server or localStorage
  function fetchCards() {

    // 1st check if cards are present at localStorage
    var localCards = storageService.get('cards');
    // Using local property as helper to detect new or cached type of data in controller
    return localCards ? {local: true, data: localCards} : {local: false, data: $http.get(restUrl)}
  }

  // Choose a random card from cards
  function getCard(cards) {
    // Grab a random item from cards array
    var randItem = getRandFromArray(cards);

    // compare gotten item with last card and continue to grab another item while they are equal!
    while (angular.toJson(randItem) === angular.toJson(lastCard)) {
      randItem = getRandFromArray(cards);
    }

    // update last card reference
    lastCard = randItem;

    return randItem;
  }

  // Get random item from array
  function getRandFromArray(array) {
    var _rand = Math.floor(Math.random() * array.length);
    return array[_rand];
  }

  return {
    fetch: fetchCards,
    getCard: getCard
  }

})
