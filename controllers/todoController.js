const todoService = require("../services/todoService");

// Get all todos
const getAllTodos = async (req, res) => {
  try {
    const todos = await todoService.getAllTodos();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single todo by ID
const getTodoById = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found" });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new todo
const createTodo = async (req, res) => {
  try {
    const newTodo = await todoService.createTodo(req.body);
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update a todo by ID
const updateTodoById = async (req, res) => {
  try {
    const updatedTodo = await todoService.updateTodoById(
      req.params.id,
      req.body
    );
    if (!updatedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete a todo by ID
const deleteTodoById = async (req, res) => {
  try {
    const deletedTodo = await todoService.deleteTodoById(req.params.id);
    if (!deletedTodo)
      return res.status(404).json({ message: "Todo not found" });
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
