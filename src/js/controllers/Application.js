window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();
  $scope.ongoingGame = false;
  $scope.isInPlay = false;

  $scope.startGame = function() {
    $scope.ongoingGame = true;
    $scope.playerRegistration = true;
  };

  $scope.commenceConfiguredGame = function() {
    var playerACharacter = ScrabbleService.drawRandomLetter();
    var playerBCharacter = ScrabbleService.drawRandomLetter();
    if (isPlayerAFirst(playerACharacter, playerBCharacter)) {
      $scope.playerA = {
        "name": $scope.playerAName,
        "draw": playerACharacter
      };
      $scope.playerB = {
        "name": $scope.playerBName,
        "draw": playerBCharacter
      };
    }
    else {
      $scope.playerA = {
        "name": $scope.playerBName,
        "draw": playerBCharacter
      };
      $scope.playerB = {
        "name": $scope.playerAName,
        "draw": playerACharacter
      };
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
