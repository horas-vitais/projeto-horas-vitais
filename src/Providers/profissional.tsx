import { createContext, useState, useEffect, ReactNode, SetStateAction} from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

interface ProfissionalContextProps{
  children: ReactNode
}

interface ProfissionalContextData{
  ListaDeprofissionais: IProfissional[],
  profissionalsRequest: () => void,
  addSelecao: (profissional: IProfissional) => void,
  removerDaAreaSelecionados: (profissionalId: string) => void,
  setListaDeProfissionais: React.Dispatch<SetStateAction<IProfissional[]>>
  filtroDeProfissionais: IProfissional[],
  setFiltroDeProfissionais: React.Dispatch<SetStateAction<IProfissional[]>>
}

interface IProfissional{
  image: string,
  name: string,
  category: string,
  description: string,
  crm: string,
  id: number,
}

export const ProfissionalContext = createContext({} as ProfissionalContextData);

export const ProfissionalProvider = ({ children }: ProfissionalContextProps) => {
  const [ListaDeprofissionais, setListaDeProfissionais] = useState<IProfissional[]>([]);
  const [filtroDeProfissionais, setFiltroDeProfissionais] = useState<IProfissional[]>([]);

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
      .then((response) => setListaDeProfissionais(response.data))
      .catch((err) => console.log(err));
  };

  const addSelecao = (profissional: IProfissional) => {
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

  const removerDaAreaSelecionados = (profissionalId: string) => {
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
