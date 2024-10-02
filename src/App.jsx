import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Skills from "./Pages/Skills";
import NavBar from "./Components/Common/NavBar";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="sticky top-0 w-full z-50 bg-white">
        <NavBar isModalOpen={isModalOpen} />
      </div>
      <div className="flex-1 overflow-y-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/skills"
            element={<Skills openModal={openModal} closeModal={closeModal} isModalOpen={isModalOpen} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
