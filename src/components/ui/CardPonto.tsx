import { Link } from 'react-router-dom';
import './CardPonto.css'
import type TrilhaType from '../../pages/Trilhas/TrilhaInfo';

interface Ponto {
    nome: string;
    latitude?: string;
    longitude?: string;
}

interface Props {
    ponto: Ponto;
    trilha: TrilhaType; // Pode ser do tipo TrilhaType
}

export default function CardPonto({ ponto, trilha: trilha  /*Temporário*/ }: Props) {
    if (!ponto.nome) return null; // Retorna null se o ponto não tiver nome
    
    console.log(Object(trilha).nome);
    return (
        <Link to={`/trilha/${Object(trilha).id}/ponto/${ponto.nome}`}>
            <div className='cardTrilha cardPonto carrosselCard'>
                <div className="info vertical">
                <h2>{ponto.nome}</h2>
                {ponto.latitude && ponto.longitude && (
                    <p>Coordenadas: {ponto.latitude}, {ponto.longitude}</p>
                )}
                {!ponto.latitude && !ponto.longitude && (
                    <p>Coordenadas: Não disponíveis</p>
                )}
                </div>
            </div>
        </Link>
    );
}