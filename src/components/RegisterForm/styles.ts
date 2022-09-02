import styled from "styled-components";

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    width: 95vw;
    max-width: 650px;

    padding: 2rem 4rem;

    box-shadow: 0px 4px 35px rgba(41, 82, 144, 0.25);

    border: 2px solid var(--green);

    p {
        color: var(--grey-1);
    }
`
export { FormContainer }