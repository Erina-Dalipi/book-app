import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Books from "../pages/Products";
import About from "../pages/About";
import Contact from "../pages/Contact";
import BookDetails from "../pages/BookDetails.jsx";

function AppRoutes() {
    return (
        <>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Books />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/book/*" element={<BookDetails />} />
            </Routes>
        </>
    );
}

export default AppRoutes;