import fundo from "../../assets/fundo.png";
import fotoPerfil from "../../assets/perfil.png";
import {
  BotaoAlterar,
  BotaoAlterarFoto,
  Container,
  ContainerModal,
  DivHorasDeVida,
  DivNomeUsuario,
  DivSections,
  DivUsuarioBotao,
  ImagemFundo,
  ImagemPerfil,
  ModalDescription,
  ModalFotoPerfil,
  Review,
  Section,
  SectionContato,
} from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { toast } from "react-toastify";
import Switch from "@mui/material/Switch";
import * as React from "react";
interface PerfilUsuario {
  CPF: number;
  areaAtuacao: string;
  email: string;
  id: number;
  isOng: boolean;
  name: string;
  password: string;
  registroProfissional: string;
  img?: string;
  localidade?: string;
  contato?: string;
  disponivel: boolean;
  description: string;
}

export const DashboardProfissionalSaude = () => {
  const [checked, setChecked] = React.useState(true);

  const [usuario, setUsuario] = useState<PerfilUsuario>();

  const [modalDescription, setModalDescription] = useState(false)
  const [inputDescription, setInputDescription] = useState("");

  const [modalFotoPerfil, setModalFotoPerfil] = useState(false);
  const [inputFotoPerfil, setInputFotoPerfil] = useState("");

  const [modalNomePerfil, setModalNomePerfil] = useState(false);
  const [inputNome, setInputNome] = useState("");

  const [modalLocalidade, setModalLocalidade] = useState(false);
  const [inputLocalidade, setInputLocalidade] = useState("");

  const [modalContato, setModalContato] = useState(false);
  const [inputContato, setInputContato] = useState("");

  const [reaload, setReload] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("@HorasDeVida:Id");
    api.get(`/users/${id}`).then((response) => setUsuario(response.data));
  }, [reaload]);

  function trocarFotoDePerfil() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .patch(
        `/users/${usuario?.id}`,
        {
          img: `${inputFotoPerfil}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Foto alterada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalFotoPerfil(!ModalFotoPerfil);
        setReload(!reaload);
      })
      .catch((res) => {
        toast.error("Ops , algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalFotoPerfil(!ModalFotoPerfil);
      });
  }

  function trocarNome() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .patch(
        `/users/${usuario?.id}`,
        {
          name: `${inputNome}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Nome alterado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalNomePerfil(!modalNomePerfil);
        setReload(!reaload);
      })
      .catch((res) => {
        toast.error("Ops , algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalNomePerfil(!modalNomePerfil);
      });
  }

  function trocarLocalidade() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .patch(
        `/users/${usuario?.id}`,
        {
          localidade: `${inputLocalidade}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Localidade alterada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalLocalidade(!modalLocalidade);
        setReload(!reaload);
      })
      .catch((res) => {
        toast.error("Ops , algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalLocalidade(!modalLocalidade);
      });
  }

  function trocarDescricao() {
    const token = localStorage.getItem("@HorasDeVida:Token")

    api.patch(
      `/users/${usuario?.id}`,
      {
        description: `${inputDescription}`
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        },
      }
    )
    .then((res) => {
      toast.success("Descrição alterada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setModalDescription(!modalDescription);
      setReload(!reaload);
    })
    .catch((err) => {
      toast.error("Ops , algo deu errado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      console.log(err)
    })
  }

  function trocarContato() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .patch(
        `/users/${usuario?.id}`,
        {
          contato: `${inputContato}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Contato alterada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalContato(!modalContato);
        setReload(!reaload);
      })
      .catch((res) => {
        toast.error("Ops , algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalContato(!modalContato);
      });
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);

    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .patch(
        `/users/${usuario?.id}`,
        {
          disponivel: `${checked}`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Disponibilidade alterada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((res) => {
        toast.error("Ops , algo deu errado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
  console.log(checked);
  return (
    <>
      <Header />
      <Container>
        <div>
          <ImagemFundo src={fundo} alt="fundo" />
        </div>

        <DivNomeUsuario>
          {usuario?.img ? (
            <>
              <ImagemPerfil src={usuario?.img} alt="Foto perfil" />
              <BotaoAlterarFoto
                id="alterarFoto"
                onClick={() => setModalFotoPerfil(!modalFotoPerfil)}
              >
                Alterar Foto
              </BotaoAlterarFoto>
            </>
          ) : (
            <>
              <ImagemPerfil src={fotoPerfil} alt="Foto perfil" />
              <BotaoAlterarFoto
                id="alterarFoto"
                onClick={() => setModalFotoPerfil(!modalFotoPerfil)}
              >
                Alterar Foto
              </BotaoAlterarFoto>
            </>
          )}

          {modalFotoPerfil ? (
            <ContainerModal>
              <ModalFotoPerfil>
                <div>
                  <h3>Envie o caminho da foto :</h3>
                  <input
                    type="text"
                    placeholder="Envie o caminho da foto"
                    onChange={(e) => setInputFotoPerfil(e.target.value)}
                  />
                  <button onClick={trocarFotoDePerfil}>Enviar</button>
                  <button
                    id="botaox"
                    onClick={() => setModalFotoPerfil(!modalFotoPerfil)}
                  >
                    X
                  </button>
                </div>
              </ModalFotoPerfil>
            </ContainerModal>
          ) : (
            <></>
          )}
        </DivNomeUsuario>

        <DivUsuarioBotao>
          <h2>Usuário: {usuario?.name}</h2>
          <BotaoAlterar onClick={() => setModalNomePerfil(!modalNomePerfil)}>
            Alterar Nome
          </BotaoAlterar>
          {modalNomePerfil ? (
            <ContainerModal>
              <ModalFotoPerfil>
                <div>
                  <h2>Alterar nome de perfil</h2>
                  <input
                    type="text"
                    placeholder="Nome de peril desejado"
                    onChange={(e) => setInputNome(e.target.value)}
                  />
                  <button onClick={trocarNome}>Enviar</button>
                  <button
                    id="botaox"
                    onClick={() => setModalNomePerfil(!modalNomePerfil)}
                  >
                    X
                  </button>
                </div>
              </ModalFotoPerfil>
            </ContainerModal>
          ) : (
            <></>
          )}
        </DivUsuarioBotao>

        <DivSections>
          <Section>
            <span>Área de atuação: {usuario?.areaAtuacao}</span>

            {usuario?.localidade ? (
              <p>Localização: {usuario.localidade}</p>
            ) : (
              <p>Localização: Cidade...</p>
            )}

            <BotaoAlterar onClick={() => setModalLocalidade(!modalLocalidade)}>
              Alterar Cidade
            </BotaoAlterar>
            {modalLocalidade ? (
              <ContainerModal>
                <ModalFotoPerfil>
                  <div>
                    <h2>Alterar Cidade</h2>
                    <input
                      type="text"
                      placeholder="Alterar Localidade"
                      onChange={(e) => setInputLocalidade(e.target.value)}
                    />
                    <button onClick={trocarLocalidade}>Enviar</button>
                    <button
                      id="botaox"
                      onClick={() => setModalLocalidade(!modalLocalidade)}
                    >
                      X
                    </button>
                  </div>
                </ModalFotoPerfil>
              </ContainerModal>
            ) : (
              <></>
            )}
          </Section>

          <SectionContato>
            <span>
              {usuario?.contato ? (
                <span>Contato: {usuario.contato}</span>
              ) : (
                <span>Contato: (xx)xxxxx-xxxx</span>
              )}
            </span>
            <BotaoAlterar onClick={() => setModalContato(!modalContato)}>
              Alterar Telefone
            </BotaoAlterar>
            {modalContato ? (
              <ContainerModal>
                <ModalFotoPerfil>
                  <div>
                    <h2>Alterar contato</h2>
                    <input
                      type="text"
                      placeholder="Alterar contato"
                      onChange={(e) => setInputContato(e.target.value)}
                    />
                    <button onClick={trocarContato}>Enviar</button>
                    <button
                      id="botaox"
                      onClick={() => setModalContato(!modalContato)}
                    >
                      X
                    </button>
                  </div>
                </ModalFotoPerfil>
              </ContainerModal>
            ) : (
              <></>
            )}
            <p>Registro Profissional: {usuario?.registroProfissional}</p>
            <DivHorasDeVida>
              <h2>Disponível para doar Horas de vida?</h2>
              <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
            </DivHorasDeVida>
          </SectionContato>
          <Review>
            <h1>Descrição do Profissional:</h1>
            <div>
              <p>{usuario?.description}</p>
            </div>
            <button onClick={() =>setModalDescription(!modalDescription)}>Adicionar Descrição</button>
            
          </Review>
          {modalDescription &&
              <ContainerModal>
                <ModalDescription>
                  <div>
                    <h2>Alterar Descrição</h2>
                    <textarea
                      placeholder="Alterar contato"
                      onChange={(e) => setInputDescription(e.target.value)}
                    />
                    <button onClick={trocarDescricao}>Enviar</button>
                    <button
                      id="botaox"
                      onClick={() => setModalDescription(!modalDescription)}
                    >
                      X
                    </button>
                  </div>
                </ModalDescription>
              </ContainerModal>
            }
        </DivSections>
      </Container>
      <Footer />
    </>
  );
};
