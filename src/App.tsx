import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Menu from "./pages/Menu";
import WhatNew from "./pages/WhatNew";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
function App() {
    return (
        <div className="w-full flex justify-center items-center flex-col">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/what-new" element={<WhatNew />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Notfound />} />
            </Routes>
        </div>
    );
}

export default App;
