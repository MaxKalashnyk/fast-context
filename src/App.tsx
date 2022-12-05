import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Default from "./Default";
import Fast from "./Fast";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter basename="/fast-context">
      <Navbar />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/fast" element={<Fast />} />
        <Route path="*" element={<div>Not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
