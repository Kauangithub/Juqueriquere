import SimpleButton from "./buttons/SimpleButton";
import { useState } from 'react';
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
    const [mode, setMode] = useState("default");
    const Conteudo = () => {
        return(
            <div>
                
                <h1>{trilha.nome}</h1>
                <p>{trilha.descricao}</p>
            </div>
        )
    }
    const Pontos = () => {
        return(
            <h1>Pontos da {trilha.nome}</h1>
        )
    }

    return(
        <>
            <div className="horizontal">
                <SimpleButton 
                icon="none" 
                tema={mode == "default" ? 'dark' : ''}
                onClick={() => setMode("default")}
                >Informações</SimpleButton>
                <SimpleButton 
                icon="none" 
                tema={mode == "default" ? '' : 'dark'}
                onClick={() => setMode("")}
                >Pontos no mapa</SimpleButton>
            </div>
            <div>
                {mode == "default" ? <Conteudo /> : <Pontos />}
            </div>
        </>
    )
}