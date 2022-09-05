import { useContext, useEffect } from "react";
import axios from "axios";
import "./style";
import { ProfissionalContext } from "../../Providers/contextProfissional";
import { DivClientReview, Doctors } from "./style";
import Profissional from "../../components/Profissional";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
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
                  <Link to="/visualizarPerfil">{profissional.name}</Link>
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
        <h2>
          Review dos <span id="colorVerde"> Clientes</span>
        </h2>

        <ul>
          <li>
            <img src="" alt=""></img>
            <h3>Dr. Cuca Beludo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sapiente nihil aperiam? Repellat sequi nisi aliquid
              perspiciatis libero nobis rem numquam nesciunt alias sapiente
              minus voluptatem, reiciendis consequuntur optio dolorem!
            </p>
          </li>
        </ul>
      </DivClientReview>
      <Footer />
    </>
  );
}

export default ListaDeProfissionais;
