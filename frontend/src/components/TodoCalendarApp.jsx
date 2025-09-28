import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plus,
  Trash2,
  Edit3,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  Calendar,
  CheckCircle2,
  Circle,
} from "lucide-react";

const TodoCalendarApp = () => {
  const [todos, setTodos] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const formatDateKey = (date) => date.toISOString().split("T")[0];

  const selectedDateKey = formatDateKey(selectedDate);

  const addTodo = () => {
    if (newTodo.trim()) {
      const todoId = Date.now().toString();
      setTodos((prev) => ({
        ...prev,
        [selectedDateKey]: [
          ...(prev[selectedDateKey] || []),
          {
            id: todoId,
            text: newTodo.trim(),
            completed: false,
            createdAt: Date.now(),
          },
        ],
      }));
      setNewTodo("");
    }
  };

  const deleteTodo = (todoId) => {
    setTodos((prev) => ({
      ...prev,
      [selectedDateKey]:
        prev[selectedDateKey]?.filter((todo) => todo.id !== todoId) || [],
    }));
  };

  const toggleComplete = (todoId) => {
    setTodos((prev) => ({
      ...prev,
      [selectedDateKey]:
        prev[selectedDateKey]?.map((todo) =>
          todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
        ) || [],
    }));
  };

  const startEdit = (todo) => {
    setEditingId(todo.id);
    setEditText(todo.text);
  };

  const saveEdit = () => {
    if (editText.trim()) {
      setTodos((prev) => ({
        ...prev,
        [selectedDateKey]:
          prev[selectedDateKey]?.map((todo) =>
            todo.id === editingId ? { ...todo, text: editText.trim() } : todo
          ) || [],
      }));
    }
    setEditingId(null);
    setEditText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditText("");
  };

  // Calendar functions
  const getDaysInMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  const getFirstDayOfMonth = (date) =>
    new Date(date.getFullYear(), date.getMonth(), 1).getDay();

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const selectDate = (day) => {
    const newDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    setSelectedDate(newDate);
  };

  const isToday = (day) => {
    const today = new Date();
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return (
      checkDate.getFullYear() === today.getFullYear() &&
      checkDate.getMonth() === today.getMonth() &&
      checkDate.getDate() === today.getDate()
    );
  };

  const isSelected = (day) => {
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    return (
      checkDate.getFullYear() === selectedDate.getFullYear() &&
      checkDate.getMonth() === selectedDate.getMonth() &&
      checkDate.getDate() === selectedDate.getDate()
    );
  };

  const hasTodos = (day) => {
    const checkDate = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      day
    );
    const dateKey = formatDateKey(checkDate);
    return todos[dateKey] && todos[dateKey].length > 0;
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    const days = [];

    for (let i = 0; i < firstDay; i++)
      days.push(
        <div key={`empty-${i}`} className="h-6 w-6 sm:h-8 sm:w-8"></div>
      );

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <motion.button
          key={day}
          onClick={() => selectDate(day)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className={`h-6 w-6 sm:h-8 sm:w-8 rounded-lg text-[10px] sm:text-xs font-medium relative transition-all
            ${
              isSelected(day)
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                : isToday(day)
                ? "bg-white/20 text-white border border-white/30"
                : "text-gray-300 hover:bg-white/10 hover:text-white"
            }`}
        >
          {day}
          {hasTodos(day) && (
            <div className="absolute -top-1 -right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
          )}
        </motion.button>
      );
    }

    return days;
  };

  const currentTodos = todos[selectedDateKey] || [];
  const completedCount = currentTodos.filter((todo) => todo.completed).length;

  return (
    <div className="min-h-screen w-full bg-[#0f0f0f] border-2 border-gray-700 rounded-2xl p-2 sm:p-4">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8 text-center"
        >
          Todo Calendar
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Left Side - Todo List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-4 sm:p-6 shadow-2xl"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
              <div className="w-full sm:w-auto">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1">
                  {selectedDate.toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {currentTodos.length} tasks • {completedCount} completed
                </p>
              </div>
              <Calendar className="text-blue-400 mt-2 sm:mt-0" size={24} />
            </div>

            {/* Add Todo Input */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 sm:mb-6">
              <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && addTodo()}
                placeholder="Add a new task..."
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 sm:px-4 sm:py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <motion.button
                onClick={addTodo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:bg-blue-600 text-white p-2 sm:p-3 rounded-xl transition-colors shadow-lg shadow-blue-500/25"
              >
                <Plus size={20} />
              </motion.button>
            </div>

            {/* Todo List */}
            <div className="space-y-2 sm:space-y-3 max-h-80 sm:max-h-96 overflow-y-auto pr-1">
              <AnimatePresence mode="popLayout">
                {currentTodos.map((todo) => (
                  <motion.div
                    key={todo.id}
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    layout
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/20 ${
                      todo.completed ? "opacity-75" : ""
                    } hover:bg-white/15 transition-all`}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <motion.button
                        onClick={() => toggleComplete(todo.id)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="flex-shrink-0"
                      >
                        {todo.completed ? (
                          <CheckCircle2 className="text-green-400" size={20} />
                        ) : (
                          <Circle
                            className="text-gray-400 hover:text-green-400"
                            size={20}
                          />
                        )}
                      </motion.button>

                      {editingId === todo.id ? (
                        <div className="flex-1 flex gap-1 sm:gap-2">
                          <input
                            type="text"
                            value={editText}
                            onChange={(e) => setEditText(e.target.value)}
                            onKeyPress={(e) => e.key === "Enter" && saveEdit()}
                            className="flex-1 bg-white/10 border border-white/20 rounded-lg px-2 py-1 sm:px-3 sm:py-1 text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                            autoFocus
                          />
                          <motion.button
                            onClick={saveEdit}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-green-400 hover:text-green-300"
                          >
                            <Check size={16} />
                          </motion.button>
                          <motion.button
                            onClick={cancelEdit}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X size={16} />
                          </motion.button>
                        </div>
                      ) : (
                        <div className="flex-1 flex items-center justify-between group">
                          <span
                            className={`text-white ${
                              todo.completed ? "line-through text-gray-400" : ""
                            }`}
                          >
                            {todo.text}
                          </span>
                          <div className="flex gap-1 sm:gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            <motion.button
                              onClick={() => startEdit(todo)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-blue-400 hover:text-blue-300 p-1"
                            >
                              <Edit3 size={14} />
                            </motion.button>
                            <motion.button
                              onClick={() => deleteTodo(todo.id)}
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-red-400 hover:text-red-300 p-1"
                            >
                              <Trash2 size={14} />
                            </motion.button>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {currentTodos.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-8 sm:py-12 text-gray-400"
                >
                  <Calendar
                    size={36}
                    className="mx-auto mb-2 sm:mb-4 opacity-50"
                  />
                  <p className="text-sm sm:text-base">No tasks for this date</p>
                  <p className="text-xs sm:text-sm mt-1">
                    Add one above to get started!
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Side - Calendar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-3 sm:p-4 shadow-2xl"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-2 sm:mb-4">
              <h2 className="text-sm sm:text-base md:text-lg font-bold text-white">
                {currentMonth.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </h2>
              <div className="flex gap-1 sm:gap-2">
                <motion.button
                  onClick={() => navigateMonth(-1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 sm:p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <ChevronLeft size={20} />
                </motion.button>
                <motion.button
                  onClick={() => navigateMonth(1)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-1 sm:p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                >
                  <ChevronRight size={20} />
                </motion.button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="space-y-2 sm:space-y-3">
              <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
                  <div
                    key={day}
                    className="h-6 sm:h-8 flex items-center justify-center text-[10px] sm:text-xs font-medium text-gray-400"
                  >
                    {day}
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-0.5 sm:gap-1">
                {renderCalendar()}
              </div>
            </div>

            <motion.button
              onClick={() => {
                const today = new Date();
                setSelectedDate(today);
                setCurrentMonth(today);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-2 sm:mt-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-medium transition-all"
            >
              Go to Today
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TodoCalendarApp;
