import './CardPonto.css'
interface Ponto {
    nome: string;
    latitude?: string;
    longitude?: string;
}

interface Props {
    ponto: Ponto;
    trilha: string;
}

export default function CardPonto({ ponto, trilha: _trilha  /*Temporário*/ }: Props) {
    return (
        <div className='cardTrilha cardPonto carrosselCard'>
            <div className="info vertical">
            <h2>{ponto.nome}</h2>
            </div>
        </div>
        
    );
}