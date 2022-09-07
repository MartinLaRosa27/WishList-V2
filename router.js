const express = require("express");
const router = express.Router();
const shortid = require("shortid");
const Deseo = require("./models/Deseo.js");

module.exports = () => {
  router.get("/get-deseo/:user_email", async (req, res) => {
    const { user_email } = req.params;
    const deseo = await Deseo.find({ user_email });
    res.send(deseo);
  });

  router.post("/post-deseo", async (req, res) => {
    const { descripcion, user_email } = req.body;
    try {
      const deseo = await Deseo.create({
        _id: shortid.generate(),
        descripcion: descripcion,
        user_email: user_email,
      });
      deseo.save();
      res.send("Deseo gurdado.");
    } catch (e) {
      res.send(e.message);
    }
  });

  router.delete("/delete-deseo/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const l = await Deseo.deleteOne({ _id });
      if (l.deletedCount > 0) {
        res.send("Se elimino");
      } else {
        res.send("No se elimino");
      }
    } catch (e) {
      res.send("No se pudo eliminar el deseo");
    }
  });

  return router;
};
