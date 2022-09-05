import styled from "styled-components";

export const Formulario = styled.div`
    @media(max-width: 700px){
        margin: 0px auto;
        max-width: 500px;
        height: 400px;
        border: 3px solid #16A085;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        h1{
            color: black;
            text-shadow: 3px 3px 5px gray;
            font-size: 40px;
            margin-top: 40px;
            margin: 40px auto;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        input{
            width: 350px;
            height: 45px;
            border-radius: 10px;
            border: 2px solid #16A085;
            margin-bottom: 10px;
            padding: 0px 16px 0px 16px;
            font-size: 16px;
        }
        label{
            color: black;
            font-size: 16px;
            font-weight: 700;
            margin-right: 300px;
            margin-bottom: 10px;
        }
        button{
            width: 150px;
            height: 50px;
            border: 3px solid #16A085;
            color: #16A085;
            background-color: white;
            font-weight: 600;
            font-size: 20px;
            margin-top: 15px;
        }       
        button:hover{
            background-color: #16A085;
            color: white;
            border: white;
        }
    }
    @media(min-width: 700px){
        position: absolute;
        width: 800px;
        height: 400px;
        border: 3px solid #16A085;
        border-radius: 20px;
        top: 220px;
        right: 100px;
        display: flex;
        flex-direction: column;
        h1{
            color: black;
            text-shadow: 3px 3px 5px gray;
            font-size: 40px;
            margin-top: 40px;
            margin-left: 335px;
        }
        form{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        input{
            width: 600px;
            height: 45px;
            border-radius: 10px;
            border: 2px solid #16A085;
            margin-bottom: 10px;
            padding: 0px 16px 0px 16px;
            font-size: 16px;
        }
        label{
            color: black;
            font-size: 16px;
            font-weight: 700;
            margin-right: 580px;
            margin-bottom: 10px;
        }
        button{
            width: 150px;
            height: 50px;
            border: 3px solid #16A085;
            color: #16A085;
            background-color: white;
            font-weight: 600;
            font-size: 20px;
            margin-top: 15px;
        }       
        button:hover{
            background-color: #16A085;
            color: white;
            border: white;
        }
    }
    
`