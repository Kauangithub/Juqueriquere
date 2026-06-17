import { useState } from "react";
import data from "../../data.json";
import SimpleButton from "../../components/ui/buttons/SimpleButton";
import Select from "../../components/ui/form/Select";
import { createPortal } from "react-dom";

export default function AdminTrilhas() {

    const order = {
        "Nome A-Z": (a: any, b: any) => a.nome.localeCompare(b.nome),
        "Nome Z-A": (a: any, b: any) => b.nome.localeCompare(a.nome),
    } as const;

    type OrderKey = keyof typeof order;

    const [orderKey, setOrderKey] = useState<OrderKey>("Nome A-Z");
    const [search, setSearch] = useState("");

    const [modalDelete, setModalDelete] = useState(false);
    const [trilhaSelecionada, setTrilhaSelecionada] = useState<any>(null);

    const trilhas = [...data.trilhas]
        .filter((trilha) =>
            trilha.nome
                .toLowerCase()
                .includes(search.toLowerCase())
        )
        .sort(order[orderKey])
    ;

    const abrirExcluir = (trilha: any) => {
        setTrilhaSelecionada(trilha);
        setModalDelete(true);
    };

    const cancelar = () => {
        setModalDelete(false);
        setTrilhaSelecionada(null);
    };

    return (
        <>
            <div className="paddingHeader"></div>

            <section className="conteudo vertical gap15">

                <SimpleButton
                    path="/admin/"
                    type="back"
                    icon="setaBack"
                >
                    Voltar
                </SimpleButton>

                <div className="card vertical gap5">

                    <h1>
                        Gerenciar Trilhas
                    </h1>

                    <p>
                        Cadastre, edite e organize as trilhas
                        do parque.
                    </p>

                </div>

                {createPortal(

                    <div
                        className="horizontal gap5"
                        id="filtros"
                    >
                        <div className="pesquisa horizontal">

                            <div className="pesquisaIcon"></div>

                            <input
                                type="text"
                                placeholder="Pesquisar trilha..."
                                value={search}
                                onChange={(e) =>
                                    setSearch(e.target.value)
                                }
                            />

                        </div>

                        <Select
                            options={Object.keys(order)}
                            value={orderKey}
                            onChange={(value) =>
                                setOrderKey(value as OrderKey)
                            }
                            style="none"
                        />

                        <SimpleButton
                            path="/admin/trilhas/cadastrar"
                        >
                            + Nova
                        </SimpleButton>

                    </div>,
                    document.body
                )}

                {modalDelete && (
                    <div className="modal">
                        <div className="modal-content">

                            <h2>
                                Deseja excluir:
                                <br />

                                {trilhaSelecionada?.nome}?
                            </h2>

                            <button>
                                Excluir
                            </button>

                            <button
                                onClick={cancelar}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>

                )}

                    <div className="vertical gap5">
                        <h2>Trilhas cadastradas</h2>

                        <div className="vertical gap5">
                            {trilhas.map((trilha) => (
                                <div
                                    className="card horizontal gap5 justify"
                                    key={trilha.id}
                                >
                                    <div className="cardTrilhaCompacto vertical gap5">
                                        <h3>{trilha.nome}</h3>
                                        <p>{trilha.dificuldade}</p>
                                        <p>{trilha.extensao}</p>
                                    </div>

                                    <div className="vertical gap5">
                                        <SimpleButton tema="dark" path={`/admin/trilhas/editar/${trilha.id}`}                                        >
                                            Editar
                                        </SimpleButton>
                                        <button
                                            onClick={() =>
                                                abrirExcluir(trilha)
                                            }
                                        >
                                            Excluir
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

            </section>

        </>
    );
}