const mongoose = require("mongoose");

const deseoSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: [
      true,
      "Todos los deseos guardados tienen que tener asignado un ID.",
    ],
  },

  descripcion: {
    type: String,
    required: [
      true,
      "El deseo guardado tiene que tener asginado una descripcion.",
    ],
    minLength: [
      3,
      "La descripcion del deseo guardado tiene que tener al menos 3 caracteres.",
    ],
    maxLength: [
      90,
      "La descripcion del deseo guardado puede tener hasta 90 caracteres.",
    ],
  },

  user_email: {
    type: String,
    require: true,
  },

  createdAd: {
    type: Date,
    immutable: [true, "La fecha de creación no se puede modificar."],
    default: () => Date.now(),
  },
});

module.exports = mongoose.model("Deseo", deseoSchema);
