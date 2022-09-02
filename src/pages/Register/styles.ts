import styled from "styled-components";

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;

    width: 100vw;
    min-height: 100vh;
`

const HeaderRegister = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 2.5rem;

    h1 {
        text-align: center;
    }

    em {
        color: var(--green);
    }

    button {
        position: absolute;
        left: 1.5rem;
        top: 1.5rem;
    }
`

const DivFlexDirection = styled.div`
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: center;
    
    @media (min-width: 769px){
        flex-direction: row;
    }

    img {
        width: 95vw;
    }
    
    @media (min-width: 769px){
        img {
            width: 40vw;
        }
    }
`

export { HeaderRegister, RegisterContainer, DivFlexDirection }