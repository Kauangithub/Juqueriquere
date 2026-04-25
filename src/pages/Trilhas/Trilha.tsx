import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFound from '../NotFound';
import TrilhaInfo, { type Trilha } from '../../components/ui/TrilhaInfo';

export default function Trilha(){
    let params = useParams();
    let id = parseInt(params.id || ``) ;
    if (!data.trilhas[id]) return(<NotFound/>);
    let trilha = data.trilhas[id] as Trilha;
    return(
        <>
            <div className="paddingHeader"></div>
            <section>
                <h1>{trilha.nome}</h1>
                <p>{trilha.descricao}</p>
                <TrilhaInfo trilha={trilha}/>
            </section>
        </>
    )
}