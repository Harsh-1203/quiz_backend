const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the schema
const ExampleSchema = new Schema({
  specificusername: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      answers: [
        {
          type: [String],
          required: true,
        },
      ],
      correctanswers: [
        {
          type: String,
          required: true,
        },
      ],
    },
  ],
});

// Create the model from the schema
const ExampleModel = mongoose.model("Example", ExampleSchema);

module.exports = ExampleModel;
