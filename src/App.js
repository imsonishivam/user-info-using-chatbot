import Enroll from "./components/Enroll";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./style/App.scss";
import Chatbot from "./components/Chatbot";
import Studentdata from "./components/Studentdata";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Enroll />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/studentdata" element={<Studentdata />} />
      </Routes>
    </Router>
  );
}

export default App;
