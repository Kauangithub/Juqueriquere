import { useParams } from 'react-router-dom';
import { useState } from 'react';
import data from '../../data.json';
import NotFound from '../NotFound';
import type TrilhaType from './TrilhaInfo';
import SimpleButton from '../../components/ui/buttons/SimpleButton';
import TrilhasMap from '../../components/ui/TrilhasMap';
import DraggableCarousel from '../../components/ui/DraggableCarousel.tsx';
import { icons } from '../../components/ui/icons';
import CardPonto from '../../components/ui/CardPonto';
import Switch from '../../components/ui/buttons/Switch.tsx';

export default function Trilha() {
    const { Distancia, Tempo, Dificuldade } = icons.default;
    let params = useParams();
    let id = parseInt(params.id || ``);


    const trilha = data.trilhas.find(t => t.id === id) as TrilhaType;
    if (!trilha) return <NotFound />;

    const pontosList = trilha.pontos_interesse.map((ponto, index) => (
        <CardPonto
            key={index}
            ponto={ponto}
            trilha={trilha.nome}
        />
    ));
    const [hl, setHl] = useState([id]) as unknown as [number | string | (number | string)[], (id: number | string | (number | string)[]) => void];
    const options = {
    "Mapa completo" : id,
    ...Object.fromEntries(trilha.ramais.map(r => [r.nome, r.id]))
    } as Record<string, number | string>    ;
    
    

    return (
        <>
            <div className="paddingHeader"></div>

            <section className='conteudo desktopWrap'>

                <div className="vertical gap15">
                    <SimpleButton path="/explorar/" type='back' icon='setaBack'>Voltar para Mapa</SimpleButton>
                    <div className="mapa">
                        <Switch
                        options={Object.keys(options)}
                        onChange={(newValue) => setHl([options[newValue] as string])}
                        value={Object.keys(options).find(key => options[key] == hl) || Object.keys(options)[0]}
                        ></Switch>
                        
                         {/*optionsList.length > 1 && (
                                    <div>
                                        {optionsList}
                                    </div>
                                )*/}
                        <TrilhasMap highlight={hl} id={[id]}></TrilhasMap>
                    </div>
                </div>
                <div className="vertical gap15">
                    <div className='vertical gap5'>
                        <h1>{trilha.nome}</h1>
                               
                        <p>{trilha.descricao_curta}</p>
                    </div>
                    <div className="horizontal destaquesTrilha">
                        <div className="vertical gap5">
                            <div className="horizontal gap5">
                                <img src={Distancia}/>
                                <p>Distância</p>
                            </div>
                            <p>{trilha.extensao}</p>
                        </div>
                        <div className="linhaVertical"></div>
                        <div className="vertical gap5">
                            <div className="horizontal gap5">
                                <img src={Tempo}/>
                                <p>Duração</p>
                            </div>
                            <p>{trilha.duracao}</p>
                        </div>
                        <div className="linhaVertical"></div>
                        <div className="vertical gap5">
                            <div className="horizontal gap5">
                                <img src={Dificuldade}/>
                                <p>Dificuldade</p>
                            </div>
                            <p>{trilha.dificuldade}</p>
                        </div>
                    </div>
                    <div className="vertical gap5">
                        <h1>Descrição</h1>
                        <p>{trilha.descricao}</p>
                    </div>
                    <div className="vertical gap5">
                        <h1>Pontos de Interesse</h1>
                        <DraggableCarousel items={pontosList}/>
                    </div>
                </div>
                
            </section>
        </>
    )
}
