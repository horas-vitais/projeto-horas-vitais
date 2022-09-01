import styled from "styled-components";

export const Background = styled.div`
     @media(max-width: 700px){
          width: 100%;
          height: 100%;
          background-color: white;
          .title1{
             color: #16A085;
             margin-right: 10px;
          }
          .title2{
             color: black;
             margin-left: 10px;
             
          }
          .title{
               display: flex;
               justify-content: center;
          }
          svg{
               width: 300px;
               height: 300px;
          }
          p{
               color: gray;
               font-size: 16px;
          }
          p:hover{
               text-decoration: underline;
               cursor: pointer;
          }
          .voltar{
               width: 25px;
               height: 25px;
               margin-top: 14px;
          }
          .botao-voltar{
               display: flex
          }
     }
     @media(min-width: 700px){

          width: 100vw;
          height: 100vh;
          background-color: white;
          p{
               color: gray;
               font-size: 16px;
               position: absolute;
               top: 42px;
               left: 80px;
          }
          p:hover{
               text-decoration: underline;
               cursor: pointer;
          }
          .voltar{
               top: 60px;
               left: -160px;
          }
          svg{
               width: 450px;
               position: absolute;
               left: 100px;
               top: 100px;
          }
          .title1{
               color: #16A085;
               position: absolute;
               left: 535px;
          }
          .title2{
               color: black;
               position: absolute;
               left: 785px;
          }
     }
`