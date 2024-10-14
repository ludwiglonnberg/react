import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Zoomtkl from "./pages/zoomtkl";
import Guide from "./pages/guide";
import Contact from "./pages/contact";

import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <Router>

        <Header />
      
        <Routes>

          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/products" element={<Products/>} />
          <Route path="/zoomtkl" element={<Zoomtkl/>} />
          <Route path="/guide" element={<Guide/>} />
          <Route path="/contact" element={<Contact/>} />

        </Routes>

        <Footer />

      </Router>
    </div>
  );
}

export default App;
