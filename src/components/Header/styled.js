import styled from 'styled-components'

export const HeaderContainer = styled.header`
  border-bottom: lightgray solid 1px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  img{
    height: 7vh;
    margin: 8px;
  }
  h1{
    padding: 0 10%;
    color: rgb(69, 82, 91);
    justify-self: center;
  }
  
  @media screen and (max-width: 500px){
    width: 100%;
    padding: 0;
  }
`