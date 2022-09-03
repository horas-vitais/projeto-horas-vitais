import fundo from "../../assets/fundo.png";
import fotoPerfil from "../../assets/perfil.png";
import {
  BotaoAlterar,
  BotaoAlterarFoto,
  Container,
  ContainerModal,
  DivNomeUsuario,
  DivSections,
  DivUsuarioBotao,
  ImagemFundo,
  ImagemPerfil,
  ModalFotoPerfil,
  Section,
  SectionContato,
} from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
}

export const DashboardProfissionalSaude = () => {
  const [usuario, setUsuario] = useState<PerfilUsuario>();

  const [modalFotoPerfil, setModalFotoPerfil] = useState(false);
  const [inputFotoPerfil, setInputFotoPerfil] = useState("");

  const [modalNomePerfil, setModalNomePerfil] = useState(false);
  const [inputNome, setInputNome] = useState("");

  const [modalLocalidade, setModalLocalidade] = useState(false);
  const [inputLocalidade, setInputLocalidade] = useState("");

  const [modalContato, setModalContato] = useState(false);
  const [inputContato, setInputContato] = useState("");

  useEffect(() => {
    const id = localStorage.getItem("@HorasDeVida:Id");
    api.get(`/users/${id}`).then((response) => setUsuario(response.data));
  }, []);

  function trocarFotoDePerfil() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api.patch(
      `/users/${usuario?.id}`,
      {
        img: `${inputFotoPerfil}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  function trocarNome() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api.patch(
      `/users/${usuario?.id}`,
      {
        name: `${inputNome}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  function trocarLocalidade() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api.patch(
      `/users/${usuario?.id}`,
      {
        localidade: `${inputLocalidade}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

  function trocarContato() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api.patch(
      `/users/${usuario?.id}`,
      {
        contato: `${inputContato}`,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
  }

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
            <p>
              {usuario?.localidade ? (
                <p>Localização: {usuario.localidade}</p>
              ) : (
                <p>Localização: Cidade...</p>
              )}
            </p>
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
          </SectionContato>
        </DivSections>
      </Container>
      <Footer />
    </>
  );
};
