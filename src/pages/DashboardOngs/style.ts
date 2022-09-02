import styled from "styled-components";

export const Doctors = styled.section`
  height: 65vh;
  margin-top: 8rem;
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 2rem;
    margin-left: 5%;
  }
  li {
    list-style: none;
    width: 150px;
    text-align: center;
    background: #fff;
    border-radius: 0.5rem;
    border: 0.2rem solid #16a085;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    padding: 2rem;

    img {
      width: 60px;
      height: 60px;
    }
  }
  h2 {
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    font-size: 2.5rem;
    color: #16a085;
    margin-left: 5%;
  }
`;

export const DivClientReview = styled.div`
  margin-left: 5%;
  display: flex;
  flex-direction: row;

  h2 {
    font-size: 2.5rem;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }

  #colorVerde {
    color: green;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    font-size: 2.5rem;
    color: #16a085;
  }
`;
