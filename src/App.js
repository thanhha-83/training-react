import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'
import Phase1 from "./Phase1";
import Phase2 from "./Phase2";
import Phase3 from "./Phase3";

function App() {
  return (
    <>
      <h1 className='text-center'>Training ReactJS</h1>
      <nav className="nav-menu">
        <Link className="nav-item" to="/">Phase 1</Link>
        <Link className="nav-item" to="/phase2">Phase 2</Link>
        <Link className="nav-item" to="/phase3">Phase 3</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Phase1 />} />
        <Route path="/phase2" element={<Phase2 />} />
        <Route path="/phase3" element={<Phase3 />} />
      </Routes>
    </>
  );
}

export default App;
