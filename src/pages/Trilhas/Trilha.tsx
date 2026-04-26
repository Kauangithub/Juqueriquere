import { useParams } from 'react-router-dom';
import data from '../../data.json';
import NotFound from '../NotFound';
import TrilhaInfo, { type Trilha } from './TrilhaInfo';
import SimpleButton from '../../components/ui/buttons/SimpleButton';

export default function Trilha(){
    let params = useParams();
    let id = parseInt(params.id || ``) ;
    const trilha = data.trilhas.find(t => t.id === id) as Trilha;
    if (!trilha) return <NotFound />;
    return(
        <>
            <div className="paddingHeader"></div>
            <section>
                <div className='horizontal'>
                    <SimpleButton tema='none' path="/trilhas/" type='back'></SimpleButton>
                    <h1>{trilha.nome}</h1>
                </div>
                <p>{trilha.descricao}</p>
                <TrilhaInfo trilha={trilha}/>
            </section>
        </>
    )
}