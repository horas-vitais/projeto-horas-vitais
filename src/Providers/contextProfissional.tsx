import {
  createContext,
  useState,
  useEffect,
  ReactNode,
  SetStateAction,
} from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

interface ProfissionalContextProps {
  children: ReactNode;
}

interface ProfissionalContextData {
  listaDeProfissionais: IProfissional[];
  profissionalsRequest: () => void;
  addSelecao: (profissional: IProfissional) => void;
  removerDaAreaSelecionados: (profissionalId: string) => void;
  setListaDeProfissionais: React.Dispatch<SetStateAction<IProfissional[]>>;
  filtroDeProfissionais: IProfissional[];
  filtrar: (newValue: string) => void; 
}

export interface IProfissional {
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
}

export const ProfissionalContext = createContext({} as ProfissionalContextData);

export const ProfissionalProvider = ({
  children,
}: ProfissionalContextProps) => {
  const [listaDeProfissionais, setListaDeProfissionais] = useState<
    IProfissional[]
  >([]);

  const [filtroDeProfissionais, setFiltroDeProfissionais] = useState<
    IProfissional[]
  >([]);

  function filtrar(filtrarPor: string){
    const newArr = listaDeProfissionais.filter(elem => elem.areaDeAtuacao.toLowerCase().includes(filtrarPor.trim()))
    
    setFiltroDeProfissionais(newArr)
  }

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
      .then((response) => {
        setListaDeProfissionais(response.data)
        setFiltroDeProfissionais(response.data)
      })
      .catch((err) => console.log(err));
  };

  const addSelecao = (profissional: IProfissional) => {
    const token = localStorage.getItem("token");

    const novoUsuarioProfissional = {
      image: profissional.img,
      name: profissional.name,
      areaAtuacao: profissional.areaDeAtuacao,
      description: profissional.description,
      registroProfissional: profissional.registroProfissional,
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
        listaDeProfissionais,
        profissionalsRequest,
        addSelecao,
        removerDaAreaSelecionados,
        setListaDeProfissionais,
        filtroDeProfissionais,
        filtrar
      }}
    >
      {children}
    </ProfissionalContext.Provider>
  );
};
