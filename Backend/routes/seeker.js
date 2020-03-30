const { pg } = require("../db");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const tableName = "Seeker";
const router = express.Router();

router.get("/", (req, res, next) => {
  pg.query(`SELECT * FROM "${tableName}"`)
    .then(result => {
      res.status(200).json({ seeker: result });
    })
    .catch(err => next(err));
});

router.get("/:id", (req, res, next) => {
  const query = {
    text: `
    SELECT * FROM "${tableName}"
    WHERE id = $1
    `,
    values: [req.params.id]
  };

  pg.query(query)
    .then(result => {
      res.status(200).json({ seeker: result });
    })
    .catch(err => next(err));
});

router.post("/", (req, res, next) => {
  const id = uuidv4();
  const seeker = { ...req.body, id };
  const query = {
    text: `
    INSERT INTO "${tableName}"(id, name, email) VALUES ($1, $2, $3)
    `,
    values: [seeker.id, seeker.name, seeker.email]
  };
  pg.query(query)
    .then(result => {
      res.status(200).send();
    })
    .catch(err => next(err));
});

module.exports = router;
