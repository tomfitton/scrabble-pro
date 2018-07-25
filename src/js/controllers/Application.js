window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();

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
