import { useContext, useEffect } from "react";
import axios from "axios";
import "./style";
import { ProfissionalContext } from "../../Providers/contextProfissional";
import { DivClientReview, Doctors } from "./style";
import Profissional from "../../components/Profissional";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

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

function ListaDeProfissionais() {
  const {
    listaDeProfissionais,
    setListaDeProfissionais,
    filtroDeProfissionais,
    setFiltroDeProfissionais,
  } = useContext(ProfissionalContext);

  useEffect(() => {
    axios
      .get("https://horasvitais.herokuapp.com/users?isOng=false")
      .then((res) => {
        setListaDeProfissionais(res.data);
      })
      .catch((err) => console.log(err));
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
                  <h1>{profissional.name}</h1>
                  <Profissional
                    key={profissional.id}
                    profissional={profissional}
                  />
                </li>
              ))
            : listaDeProfissionais.map((profissional: IProfissional) => (
                <li key={profissional.id}>
                  <Profissional
                    key={profissional.id}
                    profissional={profissional}
                  />
                </li>
              ))}
        </ul>
      </Doctors>
      <DivClientReview>
        <h2>Client</h2>
        <h2 id="colorVerde">Review</h2>
      </DivClientReview>
      <Footer />
    </>
  );
}

export default ListaDeProfissionais;
