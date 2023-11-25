const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url == "/") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to my Node Js project");
  } else if (url === "/home") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome home");
  } else if (url === "/about") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to About Us page");
  } else if (url === "/node") {
    res.setHeader("Content-Type", "text/plain");
    res.write("Welcome to my Node Js project");
  } else {
    res.write("404 Not Found");
  }

  res.end();
});

const PORT = 3000;
server.listen(PORT);
