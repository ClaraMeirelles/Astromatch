import styled from 'styled-components'

export const FundoPagina = styled.main`
  background-color: aliceblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  button{
      position:fixed;
      bottom:10px;
      border-radius: 8px;
  }
  @media screen and (max-width: 500px){
      width: 100vw;
      max-height: 100vh;
      justify-content: flex-start;
      button{
        bottom: 0;
        margin-top: 16px;
        height: 9vh;
        width: 100%;
        border-top-left-radius: 0px;
        border-top-right-radius: 0px;
      }
  }
`

export const AstroMatch = styled.section`
   background-color: white;
   height: 80vh;
   width: 25vw;
   max-width: 100vw;
   border-radius: 10px;
   border: 1px solid black;
   display: grid;
   grid-template-rows: 10vh 1fr 15vh;
   overflow: hidden;
  @media screen and (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 99%;
    height: 90vh;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px; 
  }
  @media screen and (min-width: 501px)  and (max-width: 1060px){
    min-width: 99vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`
