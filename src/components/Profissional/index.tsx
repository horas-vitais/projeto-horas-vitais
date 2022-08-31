import { useNavigate } from "react-router-dom";

import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Profissional({ profissional }) {
  const token = localStorage.getItem("token");

  function sucessoAoDeletar() {
    toast.success("Seleção feita com sucesso!");
  }

  const base_URL = "https://horasvitais.herokuapp.com";
  const navigate = useNavigate();

  const deleteProfissional = (id) => {
    axios
      .delete(`${base_URL}/users?isOng=false/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => sucessoAoDeletar())
      .catch((err) => console.log(err));
  };

  const navigateProfissionalPage = () => {
    navigate(`/users?isOng=false/${profissional.id}`);
  };

  return (
    <div class="box-container">
      <div
        className="profissionalImgContainer"
        onClick={navigateProfissionalPage}
      >
        <img
          className="profissionalImg"
          src={profissional.image}
          alt={profissional.name}
        />
      </div>
      <div className="informacoesDoProfissional">
        <h3 className="nomeDoProfissional" onClick={navigateProfissionalPage}>
          {profissional.name}
        </h3>
        <span>{profissional.especialidade}</span>
        <h4 className="escritaDoHorario">Horário disponível</h4>
        <p className="horarioDisponivel">{profissional.disposicao}</p>
      </div>
      <button>Selecionar</button>
    </div>
  );
}

export default Profissional;
