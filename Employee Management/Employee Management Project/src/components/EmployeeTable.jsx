import { useEmployees } from "../context/EmployeeContext";

function EmployeeTable() {
  const { employees, startEdit, deleteEmployee } = useEmployees();

  return (
    <div className="employee-table-container" style={{ color: 'black' }}>
      <h2>Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <table className="employee-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job Title</th>
              <th>Job Description</th>
              <th>Job Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, idx) => (
              <tr key={idx}>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.jobTitle}</td>
                <td>{emp.jobDescription}</td>
                <td>{emp.jobRole}</td>
                <td>
                  <button className="edit-btn" onClick={() => startEdit(idx)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => deleteEmployee(idx)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default EmployeeTable;