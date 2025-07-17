import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const API_BASE = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const loadTodos = async () => {
    const res = await fetch(`${API_BASE}/todos`);
    const data = await res.json();
    setTodos(data);
  };

  const addTodo = async (title, description) => {
    if (editingTodo) {
      await fetch(`${API_BASE}/todos/${editingTodo.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
      setEditingTodo(null);
    } else {
      await fetch(`${API_BASE}/todos`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, description }),
      });
    }
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await fetch(`${API_BASE}/todos/${id}`, { method: "DELETE" });
    loadTodos();
  };

  const startEditing = (todo) => {
    setEditingTodo(todo);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "2rem" }}>
      <h1 style={{ textAlign: "center" }}> Todo App</h1>
      <TodoForm onAdd={addTodo} editingTodo={editingTodo} />
      <TodoList todos={todos} onDelete={deleteTodo} onEdit={startEditing} />
    </div>
  );
}

export default App;
