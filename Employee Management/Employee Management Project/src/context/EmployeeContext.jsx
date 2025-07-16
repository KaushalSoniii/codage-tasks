import { createContext, useContext, useEffect, useState } from "react";

// Create context
const EmployeeContext = createContext();

// Provider component
export function EmployeeProvider({ children }) {
  const [employees, setEmployees] = useState(() => {
    const saved = localStorage.getItem("employees");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingIndex, setEditingIndex] = useState(null);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Add employee
  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  // Update employee
  const updateEmployee = (employee) => {
    if (editingIndex !== null) {
      const updated = [...employees];
      updated[editingIndex] = employee;
      setEmployees(updated);
      setEditingIndex(null);
    }
  };

  // Delete employee
  const deleteEmployee = (index) => {
    setEmployees(employees.filter((_, i) => i !== index));
    if (editingIndex === index) setEditingIndex(null);
  };

  // Start editing
  const startEdit = (index) => setEditingIndex(index);

  // Cancel editing
  const cancelEdit = () => setEditingIndex(null);

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee,
        editingIndex,
        startEdit,
        cancelEdit,
        editingEmployee: editingIndex !== null ? employees[editingIndex] : null,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
}

// Custom hook
export function useEmployees() {
  return useContext(EmployeeContext);
}