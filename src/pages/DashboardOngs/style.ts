import styled from "styled-components";

export const Doctors = styled.section`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
  }
  li {
    text-align: center;
    background: #fff;
    border-radius: 0.5rem;
    border: 0.2rem solid #16a085;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    padding: 2rem;
  }
`;
