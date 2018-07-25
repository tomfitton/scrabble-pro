window.ScrabblePro.service("ScrabbleService", [function() {

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
