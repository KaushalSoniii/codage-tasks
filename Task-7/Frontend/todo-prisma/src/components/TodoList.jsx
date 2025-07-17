export default function TodoList({ todos, onDelete, onEdit }) {
  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <strong>{todo.title}</strong>
            <p style={{ margin: 0 }}>{todo.description}</p>
          </div>
          <div>
            <button
              onClick={() => onEdit(todo)}
              style={{
                marginRight: "0.5rem",
                padding: "0.3rem 0.8rem",
                backgroundColor: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Update
            </button>
            <button
              onClick={() => onDelete(todo.id)}
              style={{
                padding: "0.3rem 0.8rem",
                backgroundColor: "#e74c3c",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
