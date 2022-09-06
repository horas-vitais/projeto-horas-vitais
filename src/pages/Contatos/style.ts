import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;

  h1 {
    color: red;
  }
`;

export const Li = styled.li`
  list-style-type: none;
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const Ul = styled.ul`
  height: 90vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
export const Imagem = styled.img`
  width: 60%;
  height: 20%;

  border-radius: 50%;
`;
