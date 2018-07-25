window.ScrabblePro.controller("ApplicationController", ["$scope", "ScrabbleService", function($scope, ScrabbleService) {

  $scope.board = ScrabbleService.getBoard();

}]);
