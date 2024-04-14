import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import { Detail } from "./routes/Deatil";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
