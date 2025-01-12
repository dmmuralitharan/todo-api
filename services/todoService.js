const Todo = require("../models/Todo");

// Get all todos
const getAllTodos = async () => {
  return await Todo.find();
};

// Get a single todo by ID
const getTodoById = async (id) => {
  return await Todo.findById(id);
};

// Create a new todo
const createTodo = async (data) => {
  const todo = new Todo({
    title: data.title,
    completed: data.completed || false,
  });
  return await todo.save();
};

// Update a todo by ID
const updateTodoById = async (id, data) => {
  return await Todo.findByIdAndUpdate(id, { $set: data }, { new: true });
};

// Delete a todo by ID
const deleteTodoById = async (id) => {
  return await Todo.findByIdAndDelete(id);
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
