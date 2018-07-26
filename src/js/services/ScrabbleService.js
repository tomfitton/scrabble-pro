window.ScrabblePro.service("ScrabbleService", [function() {

  var letters = [
    {"letter": "A", "frequency": 9},
    {"letter": "B", "frequency": 2},
    {"letter": "C", "frequency": 2},
    {"letter": "D", "frequency": 4},
    {"letter": "E", "frequency": 12},
    {"letter": "F", "frequency": 2},
    {"letter": "G", "frequency": 3},
    {"letter": "H", "frequency": 2},
    {"letter": "I", "frequency": 9},
    {"letter": "J", "frequency": 1},
    {"letter": "K", "frequency": 1},
    {"letter": "L", "frequency": 4},
    {"letter": "M", "frequency": 2},
    {"letter": "N", "frequency": 6},
    {"letter": "O", "frequency": 8},
    {"letter": "P", "frequency": 2},
    {"letter": "Q", "frequency": 1},
    {"letter": "R", "frequency": 6},
    {"letter": "S", "frequency": 4},
    {"letter": "T", "frequency": 6},
    {"letter": "U", "frequency": 4},
    {"letter": "V", "frequency": 2},
    {"letter": "W", "frequency": 2},
    {"letter": "X", "frequency": 1},
    {"letter": "Y", "frequency": 2},
    {"letter": "Z", "frequency": 1},
    {"letter": undefined, "frequency": 2}
  ];

  var lettersInStringSequence = (function() {
    var lettersStringSequence = "";
    for (var i = 0; i < letters.length; i+= 1) {
      lettersStringSequence += letters[i].letter.repeat(letters[i].frequency);
    }
    return lettersStringSequence;
  }());

  this.drawRandomLetter = function() {
    var startSequence = lettersInStringSequence;
    console.log("start sequence, check in size: " + startSequence.length);
    var randomNumber = Math.floor(Math.random() * startSequence.length);
    console.log("random number is: " + randomNumber);
    return startSequence[randomNumber];
  };

  var cellTypes = {
    "BLANK": {
      "id": 0,
      "description": ""
    },
    "START": {
      "id": 1,
      "description": "*"
    },
    "LETTER_DOUBLE": {
      "id": 2,
      "description": "LD"
    },
    "LETTER_TRIPLE": {
      "id": 3,
      "description": "LT"
    },
    "WORD_DOUBLE": {
      "id": 4,
      "description": "WD"
    },
    "WORD_TRIPLE": {
      "id": 5,
      "description": "WT"
    }
  };

  this.getBoard = function() {
    return [
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
      [cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["START"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"]],
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
    ];
  };

}]);
