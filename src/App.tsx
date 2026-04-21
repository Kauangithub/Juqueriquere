import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trilha from './pages/Trilhas/Trilhas.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './components/ui/Header.tsx';
const HomePage = () => {
  return (
    <>
      <h1>Página inicial!</h1>
      
    </>
  );
};


export default function App(){
  return(
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/trilha/:id" element={<Trilha />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <div id='reader'></div>
    </>
  )
};


