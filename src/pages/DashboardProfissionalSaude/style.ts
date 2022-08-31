import styled from "styled-components";

export const Container = styled.div`
  width: 85%;
  max-height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  border: solid 1px #16a085;
  border-radius: 20px;
  margin-top: 10rem;
  position: relative;

  h2 {
    margin-top: 2rem;
    margin-left: 5%;
  }

  @media (max-width: 720px) {
    width: 95%;
    height: 600px;
  }
`;

export const ImagemFundo = styled.img`
  width: 100%;
  border-radius: 20px 20px 0 0;
`;

export const ImagemPerfil = styled.img`
  width: 8%;

  border: solid 12px white;
  border-radius: 50%;

  position: absolute;
  bottom: 130px;
  left: 5%;

  @media (max-width: 720px) {
    top: 5%;
    width: 10%;
  }
`;

export const Section = styled.section`
  span {
    color: #16a085;
  }
  @media (max-width: 720px) {
    position: absolute;
    left: 0;
    margin-left: 5%;
    bottom: 45%;
  }
`;

export const SectionContato = styled.section`
  position: absolute;
  left: 30%;

  @media (max-width: 720px) {
    left: 0;
    margin-left: 5%;
    bottom: 25%;
  }
`;

export const DivSections = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: row;
`;
