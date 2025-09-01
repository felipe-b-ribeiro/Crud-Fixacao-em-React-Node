import styled from "styled-components";

const Titulo = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
    `;

const Input = styled.input`
    padding: 0.5rem;
    font-family: 'Courier New', Courier, monospace;
    border: 1px solid #ccc;
    border-radius: 4px;
    height: 25px;
    width: calc(fit-content + 20%);
`;

const Texto = styled.p`
    font-size: 15px;
    border-radius: 5px;
    line-height: 1.5;
    background-color: #666;
    color: white;
    padding: 0.5rem;
    width: fit-content;
    `;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 3px;
    align-items: center;
    justify-content: center;
`;

export {
    Titulo,
    Input,
    Texto,
    Form
};