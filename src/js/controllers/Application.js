window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  console.log("Loading board");
  var board =  ScrabbleService.getBoard();
  //console.log("board A: ", board);
  $scope.board = board;
  $scope.board[0][0].disabled = true;
  //console.log("board B: ", $scope.board);
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

  $scope.calculateCellClass = function(parentIndex, index, value) {
    //console.log("Parent index: " + parentIndex);
    //console.log("Index: " + index);
    if ($scope.board[parentIndex][index].disabled) {
      //console.log("Inside: " + parentIndex + ", " + index);
      //console.log("HERE:: ", $scope.board);
      return "black";
    }
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
