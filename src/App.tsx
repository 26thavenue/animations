import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectOne from "./pages/Project_One"
import ProjectTwo from "./pages/Project_Two";
import Project_Three from "./pages/Project_Three";
import Project_Four from "./pages/Project_Four";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProjectOne />} />
        <Route path="/two" element={<ProjectTwo />} />
        <Route path="/three" element={<Project_Three />} />
        <Route path="/four" element={<Project_Four />} />
      </Routes>
    </Router>
  );
};

export default App;
