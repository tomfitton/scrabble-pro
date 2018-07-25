window.ScrabblePro.service("ScrabbleService", [function() {

  var cellTypes = {
    "BLANK": 0,
    "START": 1,
    "LETTER_DOUBLE": 2,
    "LETTER_TRIPLE": 3,
    "WORD_DOUBLE": 4,
    "WORD_TRIPLE": 5
  };

  this.getMessage = function() {
    return "hello from service";
  };

  function getRowA() {
    return [
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0]
    ];
  }

  function getRowB() {
    return [
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0],
      cellTypes[1],
      cellTypes[0]
    ];
  }

  function getRowC() {

  }

  function getRowD() {

  }

  function getRowE() {

  }

  function getRowF() {

  }

  function getRowG() {

  }

  function getRowH() {

  }

  function getRowI() {

  }

  function getRowJ() {

  }

  function getRowK() {

  }

  function getRowL() {

  }

  function getRowM() {

  }

  function getRowN() {

  }

  function getRowO() {

  }

  this.getBoard = function() {
    var board = [];
    board.push(getRowA());
    board.push(getRowB());
    board.push(getRowC());
    board.push(getRowD());
    board.push(getRowE());
    board.push(getRowF());
    board.push(getRowG());
    board.push(getRowH());
    board.push(getRowI());
    board.push(getRowJ());
    board.push(getRowK());
    board.push(getRowL());
    board.push(getRowM());
    board.push(getRowN());
    board.push(getRowO());
    return board;
  };

  this.getBoardConcise = function() {
    return [
      [cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"]],
      [cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes[""]],
      [cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"], cellTypes[""], cellTypes[""], cellTypes[""], cellTypes["LETTER_DOUBLE"], cellTypes[""], cellTypes[""], cellTypes["WORD_TRIPLE"]],
    ];
  };

}]);
