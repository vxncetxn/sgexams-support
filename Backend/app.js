const express = require("express");
const bodyparser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const seekerRouter = require("./routes/seeker");

app.use("/seeker", seekerRouter);

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});
app.listen(PORT, console.log(`listen to ${PORT}`));
