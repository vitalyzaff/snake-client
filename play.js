const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131" ,
    port: 50542
  });
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    conn.on('data', (data) => {
      console.log(data);
    });
  });

  return conn;
};

console.log("Connecting ...");
connect();