import { useEffect, useState } from "react";

export default function TodoForm({ onAdd, editingTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setTitle(editingTodo.title);
      setDescription(editingTodo.description);
    }
  }, [editingTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Both fields required");
    onAdd(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "0.5rem" }}
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        style={{ padding: "0.5rem", width: "100%", marginBottom: "0.5rem" }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          backgroundColor: editingTodo ? "#f39c12" : "#2ecc71",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
      >
        {editingTodo ? "Update Todo" : "Add Todo"}
      </button>
    </form>
  );
}
