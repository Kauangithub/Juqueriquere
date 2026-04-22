import { Link } from 'react-router-dom';
import data from '../../data.json';
import seta1 from '../../assets/icons/seta12.png';

export default function Trilhas(){
    const trilhas = data.trilhas;
    const trilhasList = trilhas.map((trilha, index) => {
        return(
            <div className='cardTrilha'>
                <h3>{trilha.nome}</h3>
                <Link to={`/trilha/${index}`}><div className="btnDark">Ver detalhes <img src={seta1} alt="" /></div></Link>
            </div>
        )
    })
    return(
        <>
            <section className='img-fade' id='capivara'>
                <div className="conteudo vertical">
                    <div className="info">
                        <h1>Trilhas</h1>
                        <p>Explore caminhos serenos, admire vistas deslumbrantes e encontre a paz na jornada.</p>
                    </div>
                    <div className="lista vertical">
                        <h2>Todas as Trilhas</h2>
                        {trilhasList}
                    </div>
                </div>
            </section>
        </>
    )
}