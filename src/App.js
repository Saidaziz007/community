import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Career from "./pages/careers1/Career";
import Blog from "./pages/blog/Blog";
import BlogInner from "./pages/bloginner/Bloginner";
import Careers from "./pages/careers/Careers";
import Contact from "./pages/contactus/Contact";
import PrivacyPolicy from "./pages/privacypolicy/Private";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Career />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog-inner" element={<BlogInner />} />
        <Route path="/careers/:id" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
