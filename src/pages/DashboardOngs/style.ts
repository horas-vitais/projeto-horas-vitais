import styled from "styled-components";

export const Doctors = styled.section`
  margin-top: 8rem;
  ul {
    width: 100%;
    display: flex;
    gap: 1rem;
    overflow: auto;
    padding: 2rem;
  }
  li {
    list-style: none;
    width: 332px;
    height: 420px;
    text-align: center;
    background: #fff;
    border-radius: 10px;
    border: 2px solid #16a085;
    box-shadow: 0.8rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    padding: 2rem;
    .informacoesDoProfissional {
      display: flex;
      flex-direction: column;
    }

    a:hover {
      text-decoration: underline 2.3px;
      text-decoration-color: red;
    }

    h3 {
      font-size: 2.5rem;
      color: #444;
    }

    h3:hover {
      color: red;
    }

    img {
      width: 200px;
      height: 200px;
      border: 3px solid #16a085;
      border-radius: 8px;
    }
  }
  h2 {
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    font-size: 50px;
    color: #16a085;
    margin-left: 5%;
  }

  button {
    height: 40px;
    width: 200px;
    font-size: 18px;
    font-weight: 600;
    background-color: #fff;
    color: #16a085;
    border-radius: 8px;
    border: 2px solid #16a085;
    cursor: pointer;
  }

  button:hover {
    color: white;
    background-color: #16a085;
    border: 2px solid #777;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
  }

  h4 {
    font-size: 15px;
    font-weight: 650;
    padding: 0.5rem;
  }
  span {
    color: #16a085;
    font-size: 18px;
    font-weight: 800;
    padding: 0.5rem;
  }

  p {
    color: red;
    font-size: 15px;
  }
`;

export const DivClientReview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  align-items: center;

  h2 {
    font-size: 60px;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
  }

  #colorVerde {
    color: green;
    text-shadow: 0.4rem 0.4rem 0 rgba(0, 0, 0, 0.2);
    font-size: 60px;
    color: #16a085;
  }

  ul {
    width: 100vw;
    display: flex;
    gap: 1rem;
    overflow: auto;
    padding: 2rem;
  }
  li {
    width: 300px;
    height: 480px;
    border: 2px solid #16a085;
    box-shadow: 0.5rem 0.5rem 0 rgba(22, 160, 133, 0.2);
    border-radius: 10px;
    padding: 2.5rem;
    background: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 0;

    h3 {
      color: white;
      font-size: 25px;
      padding: 0.5rem;
    }

    img {
      height: 80px;
      width: 80px;
      border-radius: 50%;
      object-fit: cover;
      border: 0.4rem solid #fff;
    }

    p {
      color: #777;
      line-height: 1.5;
      font-size: 0.9rem;
      padding-top: 5rem;
    }

    ::before {
      content: "";
      position: absolute;
      top: -4rem;
      left: 50%;
      transform: translateX(-50%);
      background: #16a085;
      border-bottom-left-radius: 50%;
      border-bottom-right-radius: 50%;
      height: 300px;
      width: 120%;
      z-index: -1;
    }
  }
`;
