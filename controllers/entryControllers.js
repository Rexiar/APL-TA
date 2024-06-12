const messageEntry = require('../models/messageEntry');

exports.getAllEntries = async (req, res) => {
  try {
    const entries = await messageEntry.findAll();
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createEntry = async (req, res) => {
  try {
    const { message } = req.body;
    const entry = await messageEntry.create({ message });
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteEntry = async (req, res) => {
  try {
    const { id } = req.body;
    const entry = await messageEntry.findByPk(id);
    if (entry == null) {
      return res.status(404).json({ error: 'Entry ' + id + ' not found.'});
    }
      await entry.destroy();
      res.status(204).send();
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.editEntry = async (req, res) => {
  try {
    const { id, message } = req.body;
    const entry = await messageEntry.findByPk(id);
    if (entry == null){
      return res.status(404).json({ error: 'Entry ' + id + ' not found.'});
    }
    entry.message = message;
    await entry.save();
    res.status(204).send();
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
};