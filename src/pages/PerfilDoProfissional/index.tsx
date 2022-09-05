import fundo from "../../assets/fundo.png";
import fotoPerfil from "../../assets/perfil.png";
import { Container, Review } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { toast } from "react-toastify";
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
  review: string;
}

export const PerfilDoProfissional = () => {
  const [usuario, setUsuario] = useState<PerfilUsuario>();

  const [modalReview, setModalReview] = useState(false);
  const [inputReview, setInputReview] = useState("");

  const [reaload, setReload] = useState(false);

  useEffect(() => {
    const id = localStorage.getItem("@HorasDeVida:Id");
    api.get(`/users/${id}`).then((response) => setUsuario(response.data));
  }, [reaload]);

  function postarReview() {
    const token = localStorage.getItem("@HorasDeVida:Token");

    api
      .post(
        `/reviews`,
        {
          review: `${inputReview}`,
          receiverId: 1,
          userId: usuario?.id,
        },

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      )
      .then((res) => {
        toast.success("Review postado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setModalReview(!modalReview);
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
        setModalReview(!modalReview);
      });
  }

  return (
    <>
      <Header />
      <Container>
        <div className="imagemDeFundo">
          <img className="imagemFundo" src={fundo} alt="fundo" />
        </div>

        <section className="secaoDeInformacoes">
          <div className="imagemDePerfil">
            {usuario?.img ? (
              <>
                <img src={usuario?.img} alt="Foto perfil" />
              </>
            ) : (
              <>
                <img src={fotoPerfil} alt="Foto perfil" />
              </>
            )}
          </div>

          <div className="nomeDeusuario">
            <h2>Usuário: {usuario?.name}</h2>
          </div>
          <div className="areaDeAtuacao">
            <span>Área de atuação: {usuario?.areaAtuacao}</span>
          </div>

          <div className="localidade">
            {usuario?.localidade ? (
              <h3>Localização: {usuario.localidade}</h3>
            ) : (
              <p>Localização: Cidade...</p>
            )}

            <span>
              {usuario?.contato ? (
                <span>Contato: {usuario.contato}</span>
              ) : (
                <span>Contato: (xx)xxxxx-xxxx</span>
              )}
            </span>
          </div>

          <div className="registro">
            <p>Registro Profissional: {usuario?.registroProfissional}</p>
          </div>

          <h2>Opinar sobre o profissional</h2>
          <button onClick={() => setModalReview(!modalReview)}> + </button>
          {modalReview ? (
            <Review>
              <div>
                <input
                  type="text"
                  placeholder="Dê sua opinião sobre esse profissional"
                  onChange={(e) => setInputReview(e.target.value)}
                />
                <button onClick={postarReview}>Salvar</button>
                <button
                  id="botaox"
                  onClick={() => setModalReview(!modalReview)}
                >
                  X
                </button>
              </div>
            </Review>
          ) : (
            <></>
          )}
        </section>
      </Container>
      <Footer />
    </>
  );
};
