import Logo from "../Logo";
import { HeaderContainer } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import "react-dropdown/style.css";
import { useState } from "react";

const Header = () => {
  const [openModal, setIsOpenModal] = useState(false);
  const user = localStorage.getItem("@HorasDeVida:Token");
  return user ? (
    <HeaderContainer>
      <a href="#">
        <Logo />
      </a>
      <button className="btn-login" onClick={() => setIsOpenModal(!openModal)}>
        <FaUser />
      </button>
      {openModal ? (
        <div className="dropdown-login">
          <section>
            <a href="#">Home</a>
            <a href="#">Contato</a>
            <a href="#">Sobre</a>
            <button
              className="logout"
              onClick={() => {
                localStorage.clear();
                document.location.reload();
              }}
            >
              Sair
            </button>
          </section>
        </div>
      ) : (
        <></>
      )}
    </HeaderContainer>
  ) : (
    <HeaderContainer>
      <a href="#">
        <Logo />
      </a>
      <nav>
        <a href="#">Home</a>
        <a href="#">Contato</a>
        <a href="#">Sobre</a>
      </nav>
      <button onClick={() => setIsOpenModal(!openModal)}>
        <AiOutlineMenu />
      </button>
      {openModal ? (
        <div className="dropdown">
          <section>
            <a href="#">Home</a>
            <a href="#">Contato</a>
            <a href="#">Sobre</a>
          </section>
        </div>
      ) : (
        <></>
      )}
    </HeaderContainer>
  );
};

export default Header;
