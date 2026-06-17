import { useParams } from "react-router-dom";
import data from "../../data.json";
import SimpleButton from "../../components/ui/buttons/SimpleButton";

export default function EditarTrilha() {

    const { id } = useParams();

    const trilha = data.trilhas.find(
        (item) =>
            item.id === Number(id)
    );

    if (!trilha) {

        return (
            <h1>
                Trilha não encontrada
            </h1>
        );

    }

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
                    Editar {trilha.nome}
                </h1>

                <form className="card form vertical gap15">

                    <label>
                        Nome:
                    </label>


                    <input
                        defaultValue={trilha.nome}
                    />

                    <label>
                        Cor:
                    </label>


                    <input
                        defaultValue={
                            trilha.cor_identificacao
                        }
                    />

                    <label>
                        Dificuldade:
                    </label>

                    <select
                        defaultValue={
                            trilha.dificuldade
                        }
                    >

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

                    <label>
                        Extensão:
                    </label>


                    <input
                        defaultValue={
                            trilha.extensao
                        }
                    />
                    <label>
                        Duração:
                    </label>

                    <input
                        defaultValue={
                            trilha.duracao
                        }
                    />
                    <label>
                        Descrição curta:
                    </label>


                    <textarea
                        defaultValue={
                            trilha.descricao_curta
                        }
                    />
                    <label>
                        Descrição:
                    </label>


                    <textarea
                        rows={8}
                        defaultValue={
                            trilha.descricao
                        }
                    />

                    <label>
                        Equipamento recomendado:
                    </label>


                    <textarea
                        defaultValue={
                            trilha.equipamento_recomendado
                        }
                    />

                    <label>
                        Atenção:
                    </label>


                    <textarea
                        defaultValue={
                            trilha.atencao
                        }
                    />
                    <button>
                        Salvar alterações
                    </button>

                </form>
            </section>

        </>

    );
}