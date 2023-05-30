import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import AddTodo from "./components/AddTodo";
import UpdateTodo from "./components/UpdateTodo";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer theme="colored" position="bottom-right"></ToastContainer>
      <Routes>
        <Route index path="/*" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddTodo />} />
        <Route path="/update/:id" element={<UpdateTodo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
