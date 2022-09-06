import "react-toastify/dist/ReactToastify.css";
import { DropDownMenu } from "../DropDownMenu";
import { Link } from "react-router-dom";
import { Div } from "./style";

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
  disponivel?: string;
}

interface ProfissionalProps {
  profissional: IProfissional;
  description: string | undefined;
}
function Profissional({ profissional, description }: ProfissionalProps) {
  console.log(profissional.disponivel);
  return (
    <>
      <div className="profissionalImgContainer">
        <img
          className="profissionalImg"
          src={profissional.img}
          alt={profissional.name}
        />
      </div>
      <div className="informacoesDoProfissional">
        <Link to={`/visualizarPerfil/${profissional.id}`}>
          <h3 className="nomeDoProfissional">{profissional.name}</h3>
        </Link>
        <span>{profissional.areaAtuacao}</span>
        <Div>
          {profissional.disponivel === "true" ? (
            <h4 className="disponivel">Disponível</h4>
          ) : (
            <h4 className="indisponivel">Indisponível</h4>
          )}

          <DropDownMenu description={description}></DropDownMenu>
        </Div>
      </div>
      <button>SELECIONAR</button>
    </>
  );
}

export default Profissional;
