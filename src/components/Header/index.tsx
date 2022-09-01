import Logo from "../Logo";
import { HeaderContainer } from "./styles";
import { AiOutlineMenu } from "react-icons/ai";
import "react-dropdown/style.css";
import { useState } from "react";

const Header = () => {
  const [openModal, setIsOpenModal] = useState(false);
  return (
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
