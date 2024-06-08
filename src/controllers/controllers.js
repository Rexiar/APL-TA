const exampleModel = require('../models/models');

exports.getExample = async (req, res) => {
  try {
    const data = await exampleModel.getAllExamples();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
