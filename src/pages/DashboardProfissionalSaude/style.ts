import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  border: solid 1px #16a085;
  border-radius: 20px;
  margin-top: 10rem;
  position: relative;

  @media (max-width: 720px) {
    width: 95%;
    height: 600px;
  }
`;

export const BotaoAlterarFoto = styled.button`
  border: 1px solid #50f6c1;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  left: 22%;
  bottom: 49%;

  :hover {
    background-color: #50f6c1;
  }

  @media (max-width: 1500px) {
    position: absolute;
    left: 30%;
    bottom: 87%;
  }
`;

export const ImagemFundo = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export const DivUsuarioBotao = styled.div`
  h2 {
    margin: 0;
  }
  margin-left: 10%;

  @media (max-width: 720px) {
    margin-top: 5%;
  }
`;

export const ImagemPerfil = styled.img`
  width: 10%;

  border: solid 7px black;
  border-radius: 40%;

  position: absolute;
  bottom: 290px;
  left: 10%;

  @media (max-width: 1500px) {
    top: 5%;
    width: 15%;
  }
`;

export const Section = styled.section`
  margin-top: 3rem;
  margin-bottom: 2rem;
  margin-left: 5%;
  span {
    color: #16a085;
  }
  p {
    margin-bottom: 0;
  }
  @media (max-width: 720px) {
    position: absolute;
    left: 0;
    margin-left: 10%;
    bottom: 45%;
  }
`;

export const SectionContato = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin-top: 3rem;
  margin-bottom: 2rem;
  position: absolute;
  left: 45%;
  @media (max-width: 720px) {
    left: 0;
    margin-left: 10%;
    bottom: 20%;
  }
`;

export const DivSections = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: row;
`;

export const ModalFotoPerfil = styled.div`
  width: 400px;
  height: 100px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #baf4cc;

  position: absolute;
`;

export const ContainerModal = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const BotaoAlterar = styled.button`
  border: 1px solid #50f6c1;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;

  :hover {
    background-color: #50f6c1;
  }
`;

export const AreaAtuacao = styled.span`
  position: absolute;
  margin-left: 15%;
`;

export const DivNomeUsuario = styled.div`
  margin-top: 2rem;
`;
