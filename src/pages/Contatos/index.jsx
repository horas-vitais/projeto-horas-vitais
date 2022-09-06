import { Container } from "@mui/material";
import FotoLucas from "../../assets/lucas.png";
import FotoKaleb from "../../assets/kalebe.png";
import FotoWilson from "../../assets/wilson.png";
import FotoJoao from "../../assets/joao.png";
import FotoArthur from "../../assets/arthur.png";
import { Imagem, Li, Ul } from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const Contatos = () => {
  return (
    <>
      <Header />
      <Container>
        <Ul>
          <Li>
            <Imagem src={FotoLucas} alt="Lucas Maciel" />
            <a href="https://github.com/maciellucas0">GitHub</a>
          </Li>
          <Li>
            <Imagem src={FotoJoao} alt="João victor de Souza Lemos" />
            <a href="https://github.com/jhonlemos">GitHub</a>
          </Li>
          <Li>
            <Imagem src={FotoKaleb} alt="Kalebe Pereira Sampaio da Silva" />
            <a href="https://github.com/KalebeSampaio">GitHub</a>
          </Li>
          <Li>
            <Imagem src={FotoArthur} alt="Arthur Ribeiro Gonçalves" />
            <a href="https://github.com/ArthurRibeiro04">GitHub</a>
          </Li>
          <Li>
            <Imagem src={FotoWilson} alt="Wilson Mesquita" />
            <a href="https://github.com/wilsonmesquita03">GitHub</a>
          </Li>
        </Ul>
        <h1>
          Horas <span>Vitais</span>
        </h1>
      </Container>

      <Footer />
    </>
  );
};
