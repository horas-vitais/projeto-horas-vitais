import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

interface ProfissionalProps {
  profissional: IProfissional;
}

function Profissional({ profissional }: ProfissionalProps) {
  const token = localStorage.getItem("token");

  function sucessoAoDeletar() {
    toast.success("Seleção feita com sucesso!");
  }

  const base_URL = "https://horasvitais.herokuapp.com";

  const deleteProfissional = (id: string) => {
    axios
      .delete(`${base_URL}/users?isOng=false/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => sucessoAoDeletar())
      .catch((err) => console.log(err));
  };

  return (
    <div className="box-container">
      <div className="profissionalImgContainer">
        <img
          className="profissionalImg"
          src={profissional.img}
          alt={profissional.name}
        />
      </div>
      <div className="informacoesDoProfissional">
        <h3 className="nomeDoProfissional">{profissional.name}</h3>
        <span>{profissional.areaAtuacao}</span>
        <h4 className="escritaDoHorario">Horário disponível</h4>
        <p className="horarioDisponivel">{profissional.disposicao}</p>
      </div>
      <button>Selecionar</button>
    </div>
  );
}

export default Profissional;
