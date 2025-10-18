// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Home from "./pages/homepage";
import Login from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import Dashboard from "./pages/dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./pages/profile";
function App() {
  return (
    <Router>
      <div>

        {/* Main content */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignupPage />} />
            {/* Protected Route */}
          <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }/>
          <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }/>
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        
      </div>
    </Router>
  );
}

export default App;
