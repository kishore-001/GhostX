import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./pages/Image";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation";

function App() {
  return (
    <Router basename="/GhostX">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/image" element={<Image />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
