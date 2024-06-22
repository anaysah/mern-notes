const Note = require('../models/Note');

const addNote = async (req, res) => {
  const { title, content, isPinned, tags } = req.body;
  const createdBy = req.user.id; // Assuming user ID is available in req.user

  try {
    // Create a new note
    const newNote = new Note({
      title,
      content,
      isPinned,
      tags,
      createdBy
    });

    // Save the note to the database
    await newNote.save();

    res.status(201).json({ message: 'Note added successfully', note: newNote });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { addNote };
