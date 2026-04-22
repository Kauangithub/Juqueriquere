import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trilha from './pages/Trilhas/Trilha.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './components/ui/Header.tsx';
import Trilhas from "./pages/Trilhas/Trilhas.tsx";
const HomePage = () => {
  return (
    <>
      <div className="paddingHeader"></div>
      <section>
        <h1>Página inicial!</h1>
        <Link to="/trilhas/">
          <h2>Ver trilhas</h2>
        </Link>
      </section>
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
          <Route path="/trilhas/" element={<Trilhas />} />
          <Route path="/trilha/:id" element={<Trilha />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
      <div id='reader'></div>
    </>
  )
};


