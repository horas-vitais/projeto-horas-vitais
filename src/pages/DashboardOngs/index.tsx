import { useContext, useEffect } from "react";
import axios from "axios";

import "./style";
import { useState } from "react";
import { ProfissionalContext } from "../../Providers/profissional";

import Profissional from "../Profissional";

function ListaDeProfissionais({ type }) {
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
          ? filtroDeProfissionais.map((profissional) => (
               <li key={profissional.id}>{profissional.name}</li>
              <Profissional key={profissional.id} type={type} profissional={profissional} />
            ))
          : profissionaisLista.map((profissional) => (
               <li key={profissional.id}>{profissional.name}</li>
              <Profissional key={profissional.id} type={type} profissional={profissional} />
            ))}
      </ul>
    </Doctors>
  );
}

export default ListaDeProfissionais;
