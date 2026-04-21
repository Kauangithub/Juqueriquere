import { Link } from 'react-router-dom';
import capa from '../../assets/img/Capivara.png';
import data from '../../data.json';

export default function Trilhas(){
    const trilhas = data.trilhas;
    const trilhasList = trilhas.map((trilha, index) => {
        return(
            <div>
                <h3>{trilha.nome}</h3>
                <Link to={`/trilha/${index}`}>Ver detalhes</Link>
            </div>
        )
    })
    return(
        <>
            <section>
                <div className="capa"><img src={capa}/></div>
                <h1>Trilhas</h1>
                <p>Explore caminhos serenos, admire vistas deslumbrantes e encontre a paz na jornada.</p>
                <br/>
                <h2>Todas as Trilhas</h2>
                {trilhasList}
            </section>
        </>
    )
}