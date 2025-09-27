import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import FocusMode from "./pages/FocusMode";
import { Toaster } from "react-hot-toast";

const App = () => (
  <>
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#000",
          color: "#fff",
          border: "1px solid #444",
          borderRadius: "12px",
          padding: "16px",
        },
      }}
    />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/focus-room" element={<Dashboard />} />
        <Route path="/focus-mode" element={<FocusMode />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;
