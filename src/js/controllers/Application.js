window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();
  $scope.ongoingGame = false;
  $scope.isInPlay = false;

  function isGameOngoing() {
    return $scope.isInPlay;
  }

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
        "draw": playerACharacter,
        "control": true
      };
      $scope.playerB = {
        "name": $scope.playerBName,
        "draw": playerBCharacter,
        "control": false
      };
    }
    else {
      $scope.playerA = {
        "name": $scope.playerBName,
        "draw": playerBCharacter,
        "control": true
      };
      $scope.playerB = {
        "name": $scope.playerAName,
        "draw": playerACharacter,
        "control": false
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

  $scope.calculateCellClass = function(rowIndex, columnIndex, value) {
    if ($scope.board[rowIndex][columnIndex].focused) {
      return "focused";
    }
    if ($scope.board[rowIndex][columnIndex].active) {
      return "active";
    }
    if (value === 0) {
      return "blank";
    }
    else if (value === 1) {
      return "start";
    }
    else if (value === 2) {
      return "letter-double";
    }
    else if (value === 3) {
      return "letter-treble";
    }
    else if (value === 4) {
      return "word-double";
    }
    else if (value === 5) {
      return "word-treble";
    }
  };

  $scope.mouseOverCell = function(rowIndex, columnIndex) {
    if (isGameOngoing()) {
      $scope.board[rowIndex][columnIndex].active = true;
    }
  };

  $scope.mouseLeaveCell = function(rowIndex, columnIndex) {
    if (isGameOngoing()) {
      $scope.board[rowIndex][columnIndex].active = false;
    }
  };

  $scope.clickCell = function(rowIndex, columnIndex) {
    if (isGameOngoing()) {
      var cell = $scope.board[rowIndex][columnIndex];
      if (cell.content === undefined) {
        cell.focused = true;
      }
    }
  };

}]);
