import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import routers
import Home from "./routers/Home";
import About from "./routers/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
