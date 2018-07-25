window.ScrabblePro.service("ScrabbleService", [function() {

  var cellTypes = [
    {
      "id": 1,
      "descriptor": "BLANK"
    },
    {
      "id": 2,
      "descriptor": "START"
    },
    {
      "id": 3,
      "descriptor": "LETTER_DOUBLE"
    },
    {
      "id": 4,
      "descriptor": "LETTER_TRIPLE"
    },
    {
      "id": 5,
      "descriptor": "WORD_DOUBLE"
    },
    {
      "id": 6,
      "descriptor": "WORD_TRIPLE"
    }
  ];

  this.getMessage = function() {
    return "hello from service";
  };

}]);
