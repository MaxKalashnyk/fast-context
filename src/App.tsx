import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import "./App.css";
import Default from "./Default";
import Fast from "./Fast";

function App() {
  return (
    <BrowserRouter basename="/fast-context">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Default />} />
          <Route path="/fast" element={<Fast />} />
        </Route>
        <Route path="*" element={<div>Not found!</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
