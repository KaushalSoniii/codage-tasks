import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>Employee Management</h1>
      <EmployeeForm />
      <EmployeeTable />
    </div>
  );
}

export default App;
