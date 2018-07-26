window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();
  $scope.isRegistration = false;
  $scope.isInPlay = false;

  $scope.startGame = function() {
    $scope.isRegistration = true;
  };

  $scope.initialiseGame = function() {
    $scope.inGamePlayer1 = $scope.player1;
    console.log("Random letter 1: " + ScrabbleService.drawRandomLetter());
    $scope.inGamePlayer2 = $scope.player2;
    console.log("Random letter 1: " + ScrabbleService.drawRandomLetter());
    $scope.isRegistration = false;
    $scope.isInPlay = true;
  };

  $scope.computeClass = function(value) {
    if (value == 0) {
      return "blank";
    }
    else if (value == 1) {
      return "start";
    }
    else if (value == 2) {
      return "letter-double";
    }
    else if (value == 3) {
      return "letter-treble";
    }
    else if (value == 4) {
      return "word-double";
    }
    else if (value == 5) {
      return "word-treble";
    }
  };

}]);
