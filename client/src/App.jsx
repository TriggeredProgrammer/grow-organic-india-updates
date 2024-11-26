// import { Route, Routes } from "react-router-dom";
// import "./App.css";
// import IndexPage from "./pages/IndexPage/IndexPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import Layout from "./Layout";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import axios from "axios";
// import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import NotFound from "./pages/NotFound/NotFound";
// import Dashboard from "./pages/Dashboard/Dashboard";
// axios.defaults.baseURL='http://localhost:4000';

// function app() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<IndexPage />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="/privacy-policy" element={<TermsAndCondition />} />
//         <Route path="/about" element={<About />} />
//         <Route path="*" element={<NotFound />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/das" element={<Dashboard />} />
//       </Route>
//     </Routes>
//   );
// }

// export default app;

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Layout from "./Layout";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

// ProtectedRoute Component
function ProtectedRoute({ children }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/privacy-policy" element={<TermsAndCondition />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
