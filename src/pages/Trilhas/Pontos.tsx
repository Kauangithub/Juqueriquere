import { useState } from 'react';
import data from '../../data.json';
import Select from '../../components/ui/form/Select.tsx';
import CardPonto from '../../components/ui/CardPonto.tsx';


export default function Pontos() {
    const order = {
        "Nome A-Z": (a: any, b: any) => a.nome.localeCompare(b.nome),
        "Nome Z-A": (a: any, b: any) => b.nome.localeCompare(a.nome),
    } as const;


    type OrderKey = keyof typeof order;


    const [orderKey, setOrderKey] = useState<OrderKey>("Nome A-Z");


    const pontosList = data.trilhas.flatMap((trilha, trilhaIndex) =>
    trilha.pontos_interesse.map((ponto, pontoIndex) => (
        <CardPonto
            key={`${trilhaIndex}-${pontoIndex}`}
            ponto={ponto}
            trilha={trilha.nome}
        />
    ))
);




    return (
        <>
            <div className="paddingHeader"></div>
            <section>
                <div className="conteudo vertical">
                    <div className='img-fade' id='capivara'></div>
                    <div className="info vertical gap5">
                        <h1>Pontos</h1>
                        <p>
							Descubra as espécies nativas do parque e aprenda mais sobre os seres que habitam esse espaço.
						</p>
                    </div>


                    <div className="lista vertical">
                        <h3>Todos os Pontos:</h3>


                        <div className='horizontal' id='filtros'>
                            <p>Exibindo {pontosList.length} pontos</p>
                            <div className="horizontal gap5">
                                <p>Ordenar por: </p>
                                <Select
                                    options={Object.keys(order)}
                                    onChange={(newValue) => {
                                        setOrderKey(newValue as OrderKey);
                                    }}
                                    value={orderKey}
                                    style='none'
                                />
                            </div>
                        </div>
                        <div className="listaGrid">{pontosList}</div>
                    </div>
                       


                </div>
            </section>
        </>
    );
}
