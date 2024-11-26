import { Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage/IndexPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import Layout from "./Layout";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import axios from "axios";
import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
axios.defaults.baseURL='http://localhost:4000';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/privacy-policy" element={<TermsAndCondition />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;


// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Navbar from "./component/Navbar/Navbar";
// import Footer from "./component/Footer/Footer";
// import Home from "./pages/Home/Home";
// import About from "./pages/About/About";
// import Contact from "./pages/Contact/Contact";
// import NotFound from "./pages/NotFound/NotFound"; // 404 Page
// import TermsAndCondition from "./pages/TermsAndCondition/TermsAndCondition";
// import IndexPage from "./pages/IndexPage/IndexPage";
// import LoginPage from "./pages/LoginPage/LoginPage";
// import RegisterPage from "./pages/RegisterPage/RegisterPage";
// import Layout from "./Layout";
// import axios from "axios";

// // Set the base URL for axios globally
// axios.defaults.baseURL = 'http://localhost:4000';

// function App() {
//   return (
//     <Router>
//       {/* <Navbar /> */}
//       <Routes>
//         {/* Main layout with nested routes */}
//         <Route path="/" element={<Layout />}>
//           <Route index element={<IndexPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Route>

//         {/* Other static routes */}
//         <Route path="/home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacy-policy" element={<TermsAndCondition />} />

//         {/* Catch-all route for undefined paths */}
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// }

// export default App;
