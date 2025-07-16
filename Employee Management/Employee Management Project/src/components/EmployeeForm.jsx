import { useState, useEffect } from "react";
import { useEmployees } from "../context/EmployeeContext";

function EmployeeForm() {
  const {
    addEmployee,
    updateEmployee,
    editingEmployee,
    cancelEdit,
  } = useEmployees();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    jobDescription: "",
    jobRole: "",
  });

  useEffect(() => {
    if (editingEmployee) {
      setForm(editingEmployee);
    } else {
      setForm({
        firstName: "",
        lastName: "",
        jobTitle: "",
        jobDescription: "",
        jobRole: "",
      });
    }
  }, [editingEmployee]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !form.firstName ||
      !form.lastName ||
      !form.jobTitle ||
      !form.jobDescription ||
      !form.jobRole
    ) {
      alert("Please fill all fields.");
      return;
    }
    if (editingEmployee) {
      updateEmployee(form);
    } else {
      addEmployee(form);
    }
    setForm({
      firstName: "",
      lastName: "",
      jobTitle: "",
      jobDescription: "",
      jobRole: "",
    });
  };

  return (
    <form className="employee-form" onSubmit={handleSubmit}>
      <h2>{editingEmployee ? "Edit Employee" : "Add Employee"}</h2>
      <div className="form-row">
        <input
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        <input
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          name="jobTitle"
          placeholder="Job Title"
          value={form.jobTitle}
          onChange={handleChange}
        />
        <input
          name="jobRole"
          placeholder="Job Role"
          value={form.jobRole}
          onChange={handleChange}
        />
      </div>
      <div className="form-row">
        <input
          name="jobDescription"
          placeholder="Job Description"
          value={form.jobDescription}
          onChange={handleChange}
        />
      </div>
      <div className="form-actions">
        <button type="submit">{editingEmployee ? "Update" : "Add"}</button>
        {editingEmployee && (
          <button type="button" onClick={cancelEdit} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}

export default EmployeeForm;