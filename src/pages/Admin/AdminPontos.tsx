import SimpleButton from "../../components/ui/buttons/SimpleButton";

export default function Admin() {

    return (
        <>
            <div className="paddingHeader"></div>
            <section className="conteudo vertical gap15" id="adminHome">
                <SimpleButton path="/admin/" type='back' icon="setaBack">Voltar</SimpleButton>
                
                <div className="card vertical gap5">
                    <h2>Pontos de Interesse</h2>
                    <p>Administre os pontos de interesse disponíveis no catálogo, incluindo informações, imagens e conteúdos educativos para os visitantes.</p>
                </div>
            </section>
        </>
    );
}