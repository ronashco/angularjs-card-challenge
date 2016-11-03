
// The main controller
cardsApp.controller('cardsController', function($scope, $sce, cardsService, storageService) {

  // Initial Scopes

  // To save the shown card
  $scope.card = {};
  // To cache the once fetched card Sets
  $scope.cardsSet = [];
  // To run sound url as trusted by $sce service
  $scope.sound = '';
  // To handle loading state of application
  $scope.isLoading = false;
  // To handle editing state of application
  $scope.isEditing = false;
  // To handle retry
  $scope.try = null;

  $scope.saveEdit = function() {

    $scope.cardsSet.map(function(crd) {
      if (angular.toJson(crd) == angular.toJson($scope.card)) {
        console.log('match', crd);
        crd = $scope.card;
      }
    });

    storageService.set('cards', {cards: $scope.cardsSet});

  };

  // Loading state Helper
  function setLoadingState(bool) {
    $scope.isLoading = bool
  }

  // Try another card
  $scope.try = init;

  // Run to instantiate controller
  init();


  // Instantiation process, need on 1st render and every time try button is clicked
  function init() {

    // Show Loading on fetch start
    setLoadingState(true);

    // fetch cards from service
    var fetchCards = cardsService.fetch();

    // Check to see if cards are new or coming from local storage
    if (!fetchCards.local) {

      fetchCards.data.then( function(res) {

        var data = res.data;

        // Get a new Card and assign it to scope object
        $scope.card = cardsService.getCard(data.cards)

        // Store cards set to scope for caching stuff
        $scope.cardsSet = data.cards;

        // Hide Loading State
        setLoadingState(false);

        // Save cards to local storage
        storageService.set('cards', data);

      }, function(e) {

        alert('Error Happened while fetching data, Reload to try again');

      } )
    } else {
      console.log(fetchCards.data.cards)
      // Save card to scope
      $scope.card = cardsService.getCard(fetchCards.data.cards);
      // cache card sets
      $scope.cardsSet = fetchCards.data.cards;
      // Run sound url through $sce trusted tunnel;
      $scope.sound = $sce.trustAsResourceUrl($scope.card.sound);

      // Hide Loading State
      setLoadingState(false);
    }

  }

});
