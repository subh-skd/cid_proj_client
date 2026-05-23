import { Link, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>
        }
      />
      <Route path="/about" element={<div>About</div>} />
      <Route path="/contact" element={<div>Contact</div>} />
    </Routes>
  );
};

export default App;
