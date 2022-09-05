import { createContext, ReactNode, useState } from "react";
import axios from "axios";
import { FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface ProviderChildren {
  children: ReactNode;
}

interface IUser {
  email: string;
  id: number;
}
interface ContextProviderData {
  onSubmitFunction: (data: FieldValues) => void;
  user: IUser;
  functionVoltar: () => void;
}

export const Context = createContext({} as ContextProviderData);

export const ContextProvider = ({ children }: ProviderChildren) => {
  const [user, setUser] = useState({} as IUser);
  const navigate = useNavigate();

  const functionVoltar = () => {
    navigate("/", { replace: true });
  };

  const onSubmitFunction = (data: FieldValues) => {
    axios
      .post("https://horasvitais.herokuapp.com/login", data)
      .then((res) => {
        setUser(res.data.user);
        localStorage.setItem("@HorasDeVida:Token", res.data.accessToken);
        localStorage.setItem("@HorasDeVida:Id", res.data.user.id);
        toast.success("Logado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        if (res.data.user.isOng) {
          navigate("/dashboard", { replace: true });
        } else {
          navigate("/perfil", { replace: true });
        }
      })
      .catch((err) =>
        toast.error("Ops! Algo deu errado.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );
  };
  return (
    <Context.Provider value={{ onSubmitFunction, user, functionVoltar }}>
      {children}
    </Context.Provider>
  );
};
