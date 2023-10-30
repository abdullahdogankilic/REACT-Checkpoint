import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Address from "./components/Address";
import Details from "./components/Details";
import { useState } from "react";

function App() {
  const [id, setId] = useState();
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />

      <BrowserRouter>
        <div>
          <Link to={`/users/${id}`}>Address</Link> |
          <Link to="/Details">Details</Link> |
        </div>
        <Routes>
          <Route path="/users/:userid" element={<Address />} />
          <Route path="/users/:username" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
