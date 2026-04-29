import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Trilha from './pages/Trilhas/Trilha.tsx';
import NotFound from './pages/NotFound.tsx';
import Header from './components/ui/Header.tsx';
import Trilhas from "./pages/Trilhas/Trilhas.tsx";
import Footer from "./components/ui/Footer.tsx";
import SimpleButton from "./components/ui/buttons/SimpleButton.tsx";

const HomePage = () => {
  return (
    <>
      <div className="paddingHeader"></div>
      <section className="conteudo vertical">
        <h1>Página inicial!</h1>
        <SimpleButton path="/trilhas/">Ir para Trilhas</SimpleButton>
      </section>
    </>
  );
};


export default function App(){
  return(
    <>
      <Router>
        <Header/>
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/trilhas/" element={<Trilhas />} />
            <Route path="/trilha/:id" element={<Trilha />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <div id='reader'></div>
        </div>
        <Footer />
      </Router>
      
    </>
  )
};


