import styled from 'styled-components'

export const Form = styled.form`
    display: flex;
    width: 50%;
    align-items:center;
    justify-content: center;
    margin-top: 10px;
    input{
        width: 250px;
        height: 35px;
        background: #fff;
        border-radius: 14px;
        border: 2px solid #58a558ca;
        margin-right: 10px;
        outline: none;
        padding: 5px;
        cursor:pointer;
    }
    button{
        width: 100px;
        height: 35px;
        background: #fff;
        border-radius: 14px;
        border: 2px solid #58a558ca;
        outline: none;
        cursor:pointer;
    }
`;