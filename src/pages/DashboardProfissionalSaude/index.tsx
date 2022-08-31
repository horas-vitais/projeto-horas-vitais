import fundo from "../../assets/fundo.png";
import fotoPerfil from "../../assets/fotoperfil.png";
import {
  Container,
  DivSections,
  ImagemFundo,
  ImagemPerfil,
  Section,
  SectionContato,
} from "./style";
import { useEffect } from "react";

export const DashboardProfissionalSaude = () => {
  useEffect(() => {});

  return (
    <>
      <Container>
        <div>
          <ImagemFundo src={fundo} alt="fundo" />
        </div>
        <div>
          <ImagemPerfil src={fotoPerfil} alt="Foto perfil" />
        </div>
        <div>
          <h2>Nome do doutor</h2>
        </div>
        <DivSections>
          <Section>
            <span>Especialidade</span>
            <p>Localidade</p>
          </Section>
          <SectionContato>
            <span>contato</span>
            <p>Registro profissional:</p>
          </SectionContato>
        </DivSections>
      </Container>
    </>
  );
};
