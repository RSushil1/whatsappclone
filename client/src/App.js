import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./routes/Private";

function App() {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/chatroom" element={<PrivateRoute />}>
            <Route path="user" element={<Dashboard/>} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
