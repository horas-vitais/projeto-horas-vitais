import { useContext, useEffect } from "react";
import axios from "axios";

import "./style";
import { ProfissionalContext } from "../../Providers/profissional";
import { Doctors } from "./style";
import Profissional from "../../components/Profissional";

interface IListaDeProfissionaisProps{
  type: string,
}

interface IProfissional{
  image: string,
  name: string,
  category: string,
  description: string,
  crm: string,
  id: number,
  especialidade: string
  disposicao: string,
}

function ListaDeProfissionais({ type }: IListaDeProfissionaisProps) {
  const { profissionaisLista, setProfissionaisLista, filtroDeProfissionais, setfiltroDeProfissionais } =
    useContext(ProfissionalContext);

  useEffect(() => {
    axios
      .get("https://horasvitais.herokuapp.com/users?isOng=false")
      .then((res) => {
        setProfissionaisLista(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    
    <Doctors>
      <ul>
        {filtroDeProfissionais.length > 0
          ? filtroDeProfissionais.map((profissional: IProfissional) => (
               <li key={profissional.id}>
                <h1>{profissional.name}</h1>
                <Profissional key={profissional.id} type={type} profissional={profissional} />
                </li>
            ))
          : profissionaisLista.map((profissional: IProfissional) => (
               <li key={profissional.id}>
                <h1>{profissional.name}</h1>
                <Profissional key={profissional.id} type={type} profissional={profissional} />
                </li>
            ))}
      </ul>
    </Doctors>
    
  );
}

export default ListaDeProfissionais;
