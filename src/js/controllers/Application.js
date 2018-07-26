window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();
  $scope.ongoingGame = false;
  $scope.isInPlay = false;

  $scope.startGame = function() {
    $scope.ongoingGame = true;
    $scope.playerRegistration = true;
  };

  $scope.commenceConfiguredGame = function() {
    var playerA = $scope.playerA;
    var playerB = $scope.playerB;
    var playerACharacter = ScrabbleService.drawRandomLetter();
    var playerBCharacter = ScrabbleService.drawRandomLetter();
    if (!isPlayerAFirst(playerACharacter, playerBCharacter)) {
      $scope.playerB = playerA;
      $scope.playerA = playerB;
    }
    $scope.playerRegistration = false;
    $scope.isInPlay = true;
  };

  function isPlayerAFirst(playerACharacter, playerBCharacter) {
    var playerACharacterLowerCase = playerACharacter.toLowerCase();
    var playerBCharacterLowerCase = playerBCharacter.toLowerCase();
    return (playerACharacterLowerCase < playerBCharacterLowerCase);
  }

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
