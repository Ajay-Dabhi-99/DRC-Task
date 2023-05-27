import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-right"></ToastContainer>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
