
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import {Dashboard} from "./pages/dashboard/Dashboard";
import { EditProfile } from "./pages/dashboard/EditProfile";
import { OrderDetails } from "./pages/dashboard/OrderDetails";
import LoginPage from './pages/LoginPage'
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/order" element={<OrderDetails/>}/>
        <Route path="/update-profile/:id" element={<EditProfile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
