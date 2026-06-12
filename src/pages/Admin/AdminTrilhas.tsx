import SimpleButton from "../../components/ui/buttons/SimpleButton";

export default function Admin() {

    return (
        <>
            <div className="paddingHeader"></div>
            <section className="conteudo vertical gap15" id="adminHome">
                <SimpleButton path="/admin/" type='back'>Voltar para Mapa</SimpleButton>
                
                <div className="card vertical gap5">
                    <h2>Trilhas</h2>
                    <p>Cadastre, edite e organize as trilhas do parque, mantendo informações como descrição, dificuldade, distância e duração sempre atualizadas.</p>
                </div>
            </section>
        </>
    );
}