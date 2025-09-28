import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Edit, Trash2, X, Search } from "lucide-react";

function Notes() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Welcome to Notes",
      content:
        "This is your first note! You can edit, delete, or create new notes. The search function helps you find notes quickly.",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    {
      id: 2,
      title: "Project Ideas",
      content:
        "1. Build a portfolio website\n2. Create a todo app\n3. Design a landing page\n4. Learn Three.js\n5. Practice algorithms",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  ]);

  const [selectedNote, setSelectedNote] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const [editContent, setEditContent] = useState("");

  // Filter notes by search query
  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Create a new note
  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
    setSelectedNote(newNote);
    setEditTitle(newNote.title);
    setEditContent(newNote.content);
    setIsModalOpen(true);
  };

  // Open note in modal
  const openNote = (note) => {
    setSelectedNote(note);
    setEditTitle(note.title);
    setEditContent(note.content);
    setIsModalOpen(true);
  };

  // Save changes to note
  const saveNote = () => {
    if (!selectedNote) return;
    setNotes((prev) =>
      prev.map((note) =>
        note.id === selectedNote.id
          ? {
              ...note,
              title: editTitle.trim() || "Untitled",
              content: editContent,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
    closeModal();
  };

  // Delete note
  const deleteNote = (noteId, e) => {
    e.stopPropagation();
    setNotes((prev) => prev.filter((note) => note.id !== noteId));
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedNote(null);
    setEditTitle("");
    setEditContent("");
  };

  // Get snippet of note content
  const getContentSnippet = (content, maxLength = 100) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + "...";
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return (
      date.toLocaleDateString() +
      " " +
      date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    );
  };

  return (
    <div className="min-h-screen bg-black text-white relative scrollbar-hide">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0F0F0F] border-2 border-gray-700 rounded-2xl" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 p-4 md:p-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            My Notes
          </h1>

          {/* Search */}
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search notes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
            />
          </div>
        </motion.div>

        {/* Notes Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-20"
        >
          <AnimatePresence>
            {filteredNotes.map((note) => (
              <motion.div
                key={note.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => openNote(note)}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 cursor-pointer transition-all duration-300 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Note header */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white line-clamp-2 pr-2">
                      {note.title}
                    </h3>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => deleteNote(note.id, e)}
                      className="text-gray-400 hover:text-red-400 transition-colors duration-200 flex-shrink-0"
                    >
                      <Trash2 className="w-5 h-5" />
                    </motion.button>
                  </div>

                  {/* Note content */}
                  <p className="text-gray-300 text-sm mb-4 line-clamp-4">
                    {getContentSnippet(note.content)}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>Updated</span>
                    <span>{formatDate(note.updatedAt)}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredNotes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📝</div>
            <p className="text-gray-400 text-lg">
              {searchQuery
                ? "No notes found matching your search."
                : "No notes yet. Create your first note!"}
            </p>
          </motion.div>
        )}

        {/* Floating Add Button */}
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={createNote}
          className="fixed top-28 right-8 w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-purple-500/50 transition-all duration-300"
        >
          <Plus className="w-8 h-8" />
        </motion.button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#1E1E1E] backdrop-blur-md border border-white/20 rounded-3xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/20">
                <div className="flex items-center space-x-3">
                  <Edit className="w-6 h-6 text-purple-400" />
                  <input
                    type="text"
                    value={editTitle}
                    onChange={(e) => setEditTitle(e.target.value)}
                    placeholder="Note title..."
                    className="text-2xl font-bold bg-transparent border-none outline-none text-white placeholder-gray-400 flex-1"
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={saveNote}
                    className="px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                  >
                    Save
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={closeModal}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/20 transition-all duration-200"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 p-6">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  placeholder="Start writing your note..."
                  className="w-full h-full bg-transparent border-none outline-none text-white placeholder-gray-400 resize-none text-lg leading-relaxed"
                />
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-white/20 text-sm text-gray-400">
                {selectedNote && (
                  <div className="flex justify-between">
                    <span>Created: {formatDate(selectedNote.createdAt)}</span>
                    <span>
                      Last updated: {formatDate(selectedNote.updatedAt)}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Notes;
