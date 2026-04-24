import SimpleButton from '../../components/ui/buttons/SimpleButton.tsx';
import data from '../../data.json';

export default function Trilhas(){
    const trilhas = data.trilhas;
    const trilhasList = trilhas.map((trilha, index) => {
        return(
            <div className='cardTrilha' key={index}>
                <h3>{trilha.nome}</h3>
                <SimpleButton
                tema='dark'
                path={`/trilha/${index}`}
                >Ver detalhes</SimpleButton>
            </div >
        )
    })
    return(
        <>
            <div className="paddingHeader" id='paddingImgFade'></div>
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