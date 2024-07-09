const router = require("express").Router();
const ExampleModel = require("../models/testmodel");

router.post("/create", async (req, res) => {
  const { specificusername, title, description, questions } = req.body;

  try {
    const newInstance = new ExampleModel({
      specificusername,
      title,
      description,
      questions,
    });

    await newInstance.save();
    res.status(201).json(newInstance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Route to add a question, answers, and correct answer to an existing instance
router.post("/add-question/:id", async (req, res) => {
  const { id } = req.params;
  const { question, answers, correctanswer } = req.body;

  try {
    const instance = await ExampleModel.findById(id);

    if (!instance) {
      return res.status(404).json({ error: "Instance not found" });
    }

    instance.questions.push({ question, answers, correctanswer });
    await instance.save();
    res.status(200).json(instance);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// Route to get all instances
router.get("/instances", async (req, res) => {
  try {
    const instances = await ExampleModel.find();
    res.status(200).json(instances.title);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all questions of a specific instance
router.get("/questions/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const instance = await ExampleModel.findById(id);

    if (!instance) {
      return res.status(404).json({ error: "Instance not found" });
    }

    res.status(200).json(instance.questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
