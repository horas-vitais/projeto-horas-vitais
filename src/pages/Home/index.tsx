import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Relogio from "../../components/Relogio";
import imgOngs from "../../assets/home.svg";
import { HomeContainer } from "./styles";
import { MdOutlineNavigateNext } from "react-icons/md";

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <div className="Container">
        <section className="home" id="home">
          <h3 className="heading">
            Para o profissional de <span>saúde</span>
          </h3>
          <Relogio />

          <div className="content">
            <h2>Doe suas horas livres e as tranforme em vida para alguém.</h2>
            <button>
              DOAR
              <span>
                <MdOutlineNavigateNext />
              </span>
            </button>
          </div>
        </section>

        <section className="about" id="about">
          <h1 className="heading">
            <span>Para </span> ONG´S
          </h1>

          <div className="caixa">
            <div className="image">
              <img src={imgOngs} alt="" />
            </div>

            <div className="content">
              <h3>Procure por profissionais</h3>
              <p>
                Registre-se como instituição e procure o profissional que
                precisa mais próximo possível.
              </p>
              <p>
                Entre aqui, cadastre a instituição e faça uma seleção de
                profissionais da saúde que necessita. É só entrar, escolher o
                profissional e pronto, ele reeberá seu chamado para atender no
                horário requerido.
              </p>
              <button>
                Registrar ONG
                <span>
                  <MdOutlineNavigateNext />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </HomeContainer>
  );
};

export default Home;
