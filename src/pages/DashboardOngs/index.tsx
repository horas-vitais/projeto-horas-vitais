import { useContext, useEffect, useState } from "react";
import axios from "axios";
import "./style";
import { ProfissionalContext } from "../../Providers/contextProfissional";
import { DivClientReview, Doctors } from "./style";
import Profissional from "../../components/Profissional";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { api } from "../../services/api";

interface IProfissional {
  name?: string;
  CPF: string;
  areaAtuacao: string;
  contato: string;
  email: string;
  id: number;
  img: string;
  isOng: boolean;
  localidade?: string;
  endereco?: string;
  bairro?: string;
  cidade?: string;
  password: string;
  registroProfissional: string;
  description?: string;
  disposicao: string;
}

interface Review {
  review: string;
}

function ListaDeProfissionais() {
  const [comentario, setComentario] = useState([]);

  const {
    listaDeProfissionais,
    setListaDeProfissionais,
    filtroDeProfissionais,
    setFiltroDeProfissionais,
  } = useContext(ProfissionalContext);

  useEffect(() => {
    api
      .get("/users?isOng=false")
      .then((res) => {
        setListaDeProfissionais(res.data);
      })
      .catch((err) => console.log(err));

    api
      .get("/db")
      .then((res) => setComentario(res.data.reviews))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <Doctors>
        <h2>Doadores</h2>
        <ul>
          {filtroDeProfissionais.length > 0
            ? filtroDeProfissionais.map((profissional: IProfissional) => (
                <li key={profissional.id}>
                  <Link to="/visualizarPerfil">{profissional.name}</Link>
                  <Profissional
                    key={profissional.id}
                    profissional={profissional}
                    description={profissional.description}
                  />
                </li>
              ))
            : listaDeProfissionais.map((profissional: IProfissional) => (
                <li key={profissional.id}>
                  <Profissional
                    key={profissional.id}
                    profissional={profissional}
                    description={profissional.description}
                  />
                </li>
              ))}
        </ul>
      </Doctors>
      <DivClientReview>
        <h2>
          Review dos <span id="colorVerde"> Clientes</span>
        </h2>
        <ul>
          {comentario.length > 0 ? (
            comentario.map((coment: Review) => (
              <li>
                <p>{coment?.review}</p>
              </li>
            ))
          ) : (
            <p>teste</p>
          )}
        </ul>
      </DivClientReview>

      <Footer />
    </>
  );
}

export default ListaDeProfissionais;
