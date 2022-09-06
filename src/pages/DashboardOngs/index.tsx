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
import * as React from "react";

import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Card from "../../components/Card";

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

  const { listaDeProfissionais, setListaDeProfissionais } =
    useContext(ProfissionalContext);

  useEffect(() => {
    const token = localStorage.getItem("@HorasDeVida:Token");

    if (token) {
      api.defaults.headers.common["Authorization"] = token;
    }
    api
      .get("/users")
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
          {listaDeProfissionais.length > 0
            ? listaDeProfissionais.map((profissional: IProfissional) => (
                <li key={profissional.id}>
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
                <h3>Reviews das Ongs</h3>

                <Card />
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
