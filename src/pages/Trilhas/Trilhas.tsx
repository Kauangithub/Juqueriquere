import { useParams } from 'react-router-dom';
import data from '../../data.json';

interface PontoInteresse {
  planta: string;
  latitude: string;
  longitude: string;
}

interface Trilha {
  id: number;
  nome: string;
  cor_identificacao: string;
  descricao: string;
  pontos_interesse: PontoInteresse[];
  pontos_no_mapa: number[];
}

export default function Trilha(){
    let params = useParams();
    let id = parseInt(params.id);
    if (!data.trilhas[id]) return(<>404</>);
    return(
        <>
            <h1>Trilha {id}</h1>
        </>
    )
}