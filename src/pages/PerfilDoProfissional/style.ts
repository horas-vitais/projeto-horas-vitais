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

  .imagemFundo {
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
  }

  .secaoDeInformacoes {
    width: 100%;
    height: 100%;
    display: flex;
    border-radius: 20px 20px 0 0;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    align-content: space-between;
  }

  .imagemDePerfil img {
    width: 15%;
    height: 30%;
    border: solid 4px var(--green);
    border-radius: 10px;
  }

  .reviewModal {
    width: 400px;
    height: 100px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: solid 1px white;
    border-radius: 20px;

    padding: 2rem;
  }

  input {
    padding: 10px;
  }

  button {
    width: 50px;
    height: 100px;
    background-color: var(--green);
    cursor: pointer;
    color: white;
    border-radius: 100%;
  }

  button:hover {
    background-color: var(--green);
  }
`;

export const Review = styled.div``;
