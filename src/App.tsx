import Scanner from './components/Scanner';
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trilha from './pages/Trilhas/Trilhas.tsx';
const HomePage = () => {
  return (
    <>
      <h1>Página inicial!</h1>
      <button onClick={Scanner}>Scanner</button>
      <div id='reader'>

      </div>
    </>
  );
};


export default function App(){
  return(
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trilha/:id" element={<Trilha />} />
        </Routes>
      </Router>
    </>
  )
};


