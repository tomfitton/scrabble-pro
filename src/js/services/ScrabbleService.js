window.ScrabblePro.service("ScrabbleService", [function() {

  var frequency = {
    "A": 9,
    "B": 2,
    "C": 2,
    "D": 4,
    "E": 12,
    "F": 2,
    "G": 3,
    "H": 2,
    "I": 9,
    "J": 1,
    "K": 1,
    "L": 4,
    "M": 2,
    "N": 6,
    "O": 8,
    "P": 2,
    "Q": 1,
    "R": 6,
    "S": 4,
    "T": 6,
    "U": 4,
    "V": 2,
    "W": 2,
    "X": 1,
    "Y": 2,
    "Z": 1
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
