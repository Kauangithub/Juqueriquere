import { useState } from 'react';
import Switch from "../../components/ui/buttons/Switch";
import SimpleButton from '../../components/ui/buttons/SimpleButton';
interface PontoInteresse {
    planta: string;
    latitude: string;
    longitude: string;
}
export interface Trilha {
    id: number;
    nome: string;
    cor_identificacao: string;
    descricao: string;
    pontos_interesse: PontoInteresse[];
    pontos_no_mapa: number[];
}
interface TrilhaProps {
    trilha: Trilha;
}

export default function TrilhaInfo({trilha}: TrilhaProps){
    const options = ["Informações", "Pontos no mapa"];
    const [mode, setMode] = useState(options[0]);
    const Conteudo = () => {
        return(
            <div>
                <h1>{trilha.nome}</h1>
                <p>{trilha.descricao}</p>
            </div>
        )
    }
    const Pontos = () => {
        const rendderPontos = trilha.pontos_interesse.map((ponto, index) => (
            <SimpleButton key={index} icon='none' tema='dark'>
                <h2>{ponto.planta}</h2>
            </SimpleButton>
        ));
        return(
            <div className="pontosTrilha">
                <h1>Pontos da {trilha.nome}</h1>
                {rendderPontos}
            </div>
        )
    }
    const render = () =>{
        const componentes = {
            [options[0]]: <Conteudo />,
            [options[1]]: <Pontos />
        };
        return componentes[mode] || null;
    }

    return(
        <>
            <Switch
            options={options}
            onChange={(newValue) => setMode(newValue)}
            value={mode}
            ></Switch>
            <div className="cardTrilhaInfo conteudo">
                {render()}
            </div>
        </>
    )
}