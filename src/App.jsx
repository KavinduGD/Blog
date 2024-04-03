import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-[10px] ">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
