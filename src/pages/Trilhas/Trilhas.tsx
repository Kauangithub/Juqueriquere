import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFound from '../NotFound';

export default function Trilha(){
    let params = useParams();
    let id = parseInt(params.id || ``) ;
    if (!data.trilhas[id]) return(<NotFound/>);
    else
    return(
        <>
            <h1>{data.trilhas[id].nome}</h1>
        </>
    )
}