var express = require("express");
app = express();
var PORT = 3000;

var todoRoutes = require("./routes/todos");

app.get("/", function(req, res) {
  res.send("hi from root route");
});

app.use("/api/todos", todoRoutes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});
