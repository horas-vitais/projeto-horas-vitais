import { createContext, useState, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

export const ProfissionalContext = createContext([]);

export const ProfissionalProvider = ({ children }) => {
  const [ListaDeprofissionais, setListaDeProfissionais] = useState([]);
  const [filtroDeProfissionais, setFiltroDeProfissionais] = useState([]);

  const base_URL = "https://horasvitais.herokuapp.com";

  const token = localStorage.getItem("token");

  const notificacaoDeErroToken = () =>
    toast.error("Você precisa estar logado para selecionar um profissional.");

  const notificacaoDeSucesso = () =>
    toast.success("Profissional selecionado com sucesso!");

  const notificacaoDeretirar = () =>
    toast.warning("Profissional removido da lista seleções.");

  const notificacaoDeJaSelecionado = () =>
    toast.warning("Profissional já foi selecionado.");

  const profissionalsRequest = () => {
    axios
      .get(`${base_URL}/users?isOng=false`)
      .then((response) => setProfissionalList(response.data))
      .catch((err) => console.log(err));
  };

  const addSelecao = (profissional) => {
    const idUser = localStorage.getItem("id");
    const token = localStorage.getItem("token");

    const novoUsuarioProfissional = {
      image: profissional.image,
      name: profissional.name,
      category: profissional.category,
      description: profissional.description,
      crm: profissional.crm,
      id: profissional.id,
    };

    if (token === null) {
      notificacaoDeErroToken();
    } else {
      axios
        .post(`${base_URL}/selecionado`, novoUsuarioProfissional, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          notificacaoDeSucesso();
          return response;
        })
        .catch((err) => {
          console.log(err);
          notificacaoDeJaSelecionado();
        });
    }
  };

  const removerDaAreaSelecionados = (profissionalId) => {
    axios
      .delete(`${base_URL}/reserved/${profissionalId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        notificacaoDeretirar();
        return response;
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    profissionalsRequest();
  }, []);

  return (
    <ProfissionalContext.Provider
      value={{
        ListaDeprofissionais,
        profissionalsRequest,
        addSelecao,
        removerDaAreaSelecionados,
        setListaDeProfissionais,
        filtroDeProfissionais,
        setFiltroDeProfissionais,
      }}
    >
      {children}
    </ProfissionalContext.Provider>
  );
};
