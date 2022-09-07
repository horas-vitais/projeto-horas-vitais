import { useContext, useEffect, useState } from "react";
import { ProfissionalContext } from "../../Providers/contextProfissional";
import { DivClientReview, Doctors } from "./style";
import Profissional from "../../components/Profissional";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { api } from "../../services/api";

import * as React from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

import Card from "../../components/Card";
import FiltroDoadores from "../../components/FiltroDoadores";
import MeuProfissional from "../../components/MeuProfissional";
import "./style";


interface IProfissional {
  name?: string;
  CPF: string;
  areaDeAtuacao: string;
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
  disponivel?: string;
  userId?: string;
}

interface Review {
  review: string;
}

function ListaDeProfissionais() {

  const { filtroDeProfissionais, setListaDeProfissionais } =
  useContext(ProfissionalContext);

  const token = localStorage.getItem("@HorasDeVida:Token")
  const ongId = localStorage.getItem("@HorasDeVida:Id")

  const [meusMedicos, setMeusMedicos] = useState([])

  useEffect(() => {
    api.get("https://horasvitais.herokuapp.com/medics", 
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    )
    .then((res) => setMeusMedicos(res.data))
    .catch((err) => console.log(err))
  },[])

  const [comentario, setComentario] = useState([]);
  
  // useEffect(() => {
  //   const token = localStorage.getItem("@HorasDeVida:Token");

  //   if (token) {
  //     api.defaults.headers.common["Authorization"] = token;
  //   }
  //   api
  //     .get("/users")
  //     .then((res) => {
  //       setListaDeProfissionais(res.data);
  //     })
  //     .catch((err) => console.log(err));

  //   api
  //     .get("/db")
  //     .then((res) => setComentario(res.data.reviews))
  //     .catch((err) => console.error(err));
  // }, []);



  const ongId = localStorage.getItem("@HorasDeVida:Id");
  const { listaDeProfissionais, setListaDeProfissionais } =
    useContext(ProfissionalContext);

  const [meusMedicos, setMeusMedicos] = useState([]);
  const [comentario, setComentario] = useState([]);

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

    api
      .get("https://horasvitais.herokuapp.com/medics")
      .then((res) => setMeusMedicos(res.data))
      .catch((err) => console.log(err));
  }, [meusMedicos]);


  return (
    <>
      <Header />
      <Doctors>
        <div className="row">
          <h2>Doadores</h2>
          <FiltroDoadores />
        </div>
        <ul>
          {filtroDeProfissionais ? (
            filtroDeProfissionais.map((profissional: IProfissional) => (
              <li key={profissional.id}>
                <Profissional
                  key={profissional.id}
                  profissional={profissional}
                  description={profissional.description}
                />
              </li>
            ))
          ) : (
            <p>Carregando...</p>
          )}
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
            <p>Parece que ainda não há comentários por aqui...</p>
          )}
        </ul>
      </DivClientReview>
      <Doctors>
        <h2>Meus médicos</h2>
        <ul>
          {meusMedicos.length > 0 ? (
            meusMedicos.map(
              (profissional: IProfissional) =>
                profissional.userId === ongId && (
                  <li key={profissional.id}>
                    <MeuProfissional
                      key={profissional.id}
                      profissional={profissional}
                      description={profissional.description}
                    />
                  </li>
                )
            )
          ) : (
            <p>Carregando...</p>
          )}
        </ul>
      </Doctors>

      <Footer />
    </>
  );
}

export default ListaDeProfissionais;
