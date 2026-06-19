import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFound from '../NotFound';
import SimpleButton from '../../components/ui/buttons/SimpleButton';

export default function Ponto() {
    const { id, nomePonto } = useParams<{ id: string; nomePonto: string }>();

    // carrega o objeto ponto
    const trilha = data.trilhas
        .find(t => t.id === parseInt(id || ''))
    const ponto = trilha?.pontos_interesse.find(p => String(Object.values(p)[0]) === nomePonto);
    console.log(id, nomePonto);
    console.log(ponto);
    if (!trilha || !ponto) {return (<NotFound/>);}

    return (
        <>
            <div className="paddingHeader"></div>
            
            <section className='conteudo desktopWrap'>
                <div className="vertical gap15">
                    <div className="horizontal gap5">
                        <SimpleButton path="/explorar/" type='back' icon='setaBack'>Voltar para Mapa</SimpleButton>
                        <SimpleButton path={`/trilha/${id}`} type='back' icon='setaBack'>{trilha.nome}</SimpleButton>
                    </div>
                    <h1>{Object(ponto).nome}</h1>
                    <h1>{trilha.nome}</h1>
                    {
                        ponto.latitude && ponto.longitude && (
                            <p>Coordenadas: {ponto.latitude}, {ponto.longitude}</p>
                        )
                    }
                </div>
            </section>

        </>
);}