import { useState } from 'react';
import SimpleButton from '../../components/ui/buttons/SimpleButton.tsx';
import data from '../../data.json';
import Switch from '../../components/ui/buttons/Switch.tsx';
import Select from '../../components/ui/form/Select.tsx';

export default function Trilhas() {
    const order = {
        "Nome A-Z": (a: any, b: any) => a.nome.localeCompare(b.nome),
        "Nome Z-A": (a: any, b: any) => b.nome.localeCompare(a.nome),
    } as const;

    type OrderKey = keyof typeof order;
    const [orderKey, setOrderKey] = useState<OrderKey>("Nome A-Z");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const trilhas = [...data.trilhas].sort(order[orderKey]);

    const trilhasList = trilhas.map((trilha) => (
        <div className='cardTrilha' key={trilha.id}>
            <h3>{trilha.nome}</h3>
            <SimpleButton tema='dark' path={`/trilha/${trilha.id}`}>
                Ver detalhes
            </SimpleButton>
        </div>
    ));
    const OrderByList = () => (
        <div className='orderByList'>
            <Switch
                options={Object.keys(order)}
                onChange={(newValue) => {
                    setOrderKey(newValue as OrderKey);
                }}
                value={orderKey}
                style='traced'
            />
        </div>
    );

    return (
        <>
            <div className="paddingHeader" id='paddingImgFade'></div>
            <section className='img-fade' id='capivara'>
                <div className="conteudo vertical">
                    <div className="info vertical gap5">
                        <h1>Trilhas</h1>                        
                        <p>Explore caminhos serenos, admire vistas deslumbrantes e encontre a paz na jornada.</p>
                    </div>

                    <div className="lista vertical">
                        <h3>Todas as Trilhas:</h3>
                        
                        <div className='horizontal' id='filtros'>
                            <p>Exibindo {trilhasList.length} trilhas</p>
                            <div className="horizontal gap5">
                                <p>Ordenar por: </p>
                                <SimpleButton
                                    tema='none'
                                    icon='none'
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                >
                                    {isMenuOpen? orderKey + ' ▲': orderKey + ' ▼'}
                                </SimpleButton>
                                <Select 
                                options={Object.keys(order)}
                                onChange={(newValue) => {
                                    setOrderKey(newValue as OrderKey);
                                }}
                                value={orderKey}
                                ></Select>
                            </div>
                        </div>
                        {isMenuOpen && <OrderByList />}
                        {trilhasList}
                    </div>
                </div>
            </section>
        </>
    );
}