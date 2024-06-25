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

const editNote = async (req, res) => {
  const noteId = req.params.id;
  const { title, content, isPinned, tags } = req.body;
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    const note = await Note.findOne({ _id: noteId, createdBy: userId });

    if (!note) {
      return res.status(404).json({ error: 'Note not found' });
    }

    note.title = title || note.title;
    note.content = content || note.content;
    note.isPinned = isPinned !== undefined ? isPinned : note.isPinned;
    note.tags = tags || note.tags;

    await note.save();

    res.status(200).json({ message: 'Note updated successfully', note });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const getNotes = async (req, res) => {
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    const notes = await Note.find({ createdBy: userId }).sort({ createdAt: -1 }).select('-createdBy -__v');

    res.status(200).json({ notes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteNote = async (req, res) => {
  const noteId = req.params.id;
  const userId = req.user.id; // Assuming user ID is available in req.user

  try {
    const note = await Note.findOneAndDelete({ _id: noteId, createdBy: userId });

    if (!note) {
      return res.status(404).json({ error: 'Note not found or not authorized to delete this note' });
    }

    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

const pinNote = async (req, res) => {
  const noteId = req.params.id;
  const userId = req.user.id; // Assuming user ID is available in req.user
  const { isPinned } = req.body;

  try {
    const note = await Note.findOneAndUpdate(
      { _id: noteId, createdBy: userId },
      { isPinned },
      { new: true }
    );

    if (!note) {
      return res.status(404).json({ error: 'Note not found or not authorized to pin this note' });
    }

    res.status(200).json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { addNote, editNote, getNotes, deleteNote, pinNote };