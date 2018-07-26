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
      var letterDetails = letters[i];
      // undefined means a blank square, so it's a pseudo-valid "letter"
      if (letterDetails.letter !== undefined) {
        lettersStringSequence += letterDetails.letter.repeat(letterDetails.frequency);
      }
    }
    return lettersStringSequence;
  }());

  this.drawRandomLetter = function() {
    var startSequence = lettersInStringSequence;
    console.log("start sequence: " + startSequence);
    console.log("start sequence length: " + startSequence.length);
    var randomNumber = Math.floor(Math.random() * startSequence.length);
    console.log("random number is: " + randomNumber);
    var randomLetter = startSequence[randomNumber];
    console.log("random letter is: " + randomLetter);
    return randomLetter;
  };

  function getCellType(name) {
    if (name === "BLANK") {
      return {
        "id": 0,
        "description": ""
      };
    }
    else if (name === "START") {
      return {
        "id": 1,
        "description": "*"
      };
    }
    else if (name === "LETTER_DOUBLE") {
      return {
        "id": 2,
        "description": "LD"
      };
    }
    else if (name === "LETTER_TRIPLE") {
      return {
        "id": 2,
        "description": "LT"
      };
    }
    else if (name === "WORD_DOUBLE") {
      return {
        "id": 4,
        "description": "WD"
      };
    }
    else if (name === "WORD_TRIPLE") {
      return {
        "id": 5,
        "description": "WT"
      };
    }
  }

  this.getBoard = function() {
    return [
      [getCellType("WORD_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_TRIPLE")],
      [getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("WORD_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("START"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_TRIPLE")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE")],
      [getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK")],
      [getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_DOUBLE"), getCellType("BLANK")],
      [getCellType("WORD_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_TRIPLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("BLANK"), getCellType("LETTER_DOUBLE"), getCellType("BLANK"), getCellType("BLANK"), getCellType("WORD_TRIPLE")],
    ];
  };

}]);
