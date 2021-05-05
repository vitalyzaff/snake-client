let connection;
const { UP_KEY, DOWN_KEY, LEFT_KEY, RIGHT_KEY } = require("./constants");

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write(UP_KEY);
  } else if (key === 's') {
    connection.write(DOWN_KEY);
  } else if (key === 'a') {
    connection.write(LEFT_KEY);
  } else if (key === 'd') {
    connection.write(RIGHT_KEY);
  } else if (key === 'z') {
    connection.write('Say: WOW');
  } else if (key === 'x') {
    connection.write('Say: lol it works');
  } else if (key === 'c') {
    connection.write('Say: imma big boy');
  }
};

module.exports = setupInput;