window.ScrabblePro.service("ScrabbleService", [function() {

  var cellTypes = {
    "BLANK": 0,
    "START": 1,
    "LETTER_DOUBLE": 2,
    "LETTER_TRIPLE": 3,
    "WORD_DOUBLE": 4,
    "WORD_TRIPLE": 5
  };

  this.getBoard = function() {
    return [
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
      [cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["START"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"]],
      [cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"]],
      [cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_DOUBLE"], cellTypes["BLANK"]],
      [cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["LETTER_DOUBLE"], cellTypes["BLANK"], cellTypes["BLANK"], cellTypes["WORD_TRIPLE"]],
    ];
  };

}]);
