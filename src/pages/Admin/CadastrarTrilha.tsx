import SimpleButton from "../../components/ui/buttons/SimpleButton";

export default function CadastrarTrilha() {

    return (

        <>
            <div className="paddingHeader"></div>

            <section className="conteudo vertical gap15">

                <SimpleButton
                    path="/admin/trilhas"
                    type="back"
                    icon="setaBack"
                >
                    Voltar
                </SimpleButton>

                <h1>
                    Cadastrar Trilha
                </h1>

                <form className="card form vertical gap15">

                    <div className="vertical gap5">

                        <label>
                            Nome:
                        </label>

                        <input
                            name="nome"
                            required
                        />

                    </div>

                    <div className="vertical gap5">

                        <label>
                            Cor:
                        </label>

                        <input
                            name="cor_identificacao"
                        />

                    </div>

                    <div className="horizontal gap15">

                        <div>

                            <label>
                                Dificuldade:
                            </label>

                            <select name="dificuldade">

                                <option>
                                    Fácil
                                </option>

                                <option>
                                    Moderada
                                </option>

                                <option>
                                    Difícil
                                </option>

                            </select>

                        </div>

                        <div>

                            <label>
                                Extensão:
                            </label>

                            <input
                                name="extensao"
                            />

                        </div>

                        <div>

                            <label>
                                Duração:
                            </label>

                            <input
                                name="duracao"
                            />

                        </div>

                    </div>

                    <label>
                        Descrição curta:
                    </label>

                    <textarea
                        name="descricao_curta"
                    />

                    <label>
                        Descrição:
                    </label>

                    <textarea
                        name="descricao"
                        rows={8}
                    />

                    <label>
                        Equipamento recomendado:
                    </label>

                    <textarea
                        name="equipamento_recomendado"
                    />

                    <label>
                        Atenção:
                    </label>

                    <textarea
                        name="atencao"
                    />

                    <button>
                        Cadastrar
                    </button>

                </form>

            </section>

        </>

    );
}