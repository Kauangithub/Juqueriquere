import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFound from '../NotFound';

export default function Trilha(){
    let params = useParams();
    let id = parseInt(params.id || ``) ;
    if (!data.trilhas[id]) return(<NotFound/>);
    let trilha = data.trilhas[id];
    return(
        <>
            <h1>{trilha.nome}</h1>
            <p>{trilha.descricao}</p>
        </>
    )
}