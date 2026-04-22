import capa from '../assets/img/Capivara.png';
import SimpleButton from '../components/UI/buttons/simpleButton';

export default function NotFound(){
    return(
        <>
            <section>
                <div className="capa"><img src={capa}/></div>
                <h1>Ops! Página não encontrada</h1>
                <p>Parece que você se perdeu na trilha.</p>
                <p>Não se preocupe, até os exploradores mais experientes se confundem às vezes. Vamos ajudar você a voltar ao caminho certo!</p>
                <br/>
                <p>Aqui estão algumas sugestões para você se reencontrar:</p>
            </section>
            <section id="linksSugeridos">
            <nav className="vertical">
                <SimpleButton>bleh</SimpleButton>
                <SimpleButton></SimpleButton>
            </nav>
        </section>
        </>
    )
}