import styled from 'styled-components'

export const TelaExibeMatch = styled.div`
    overflow-y: scroll;
    height: 100%;
    width: 100%;
    grid-row: 2/4;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: none;
    }
    ::-webkit-scrollbar-thumb {
      background-color: white;
      border-radius: 20px;
      border: 3px solid #a8bac5;
    }
    
@media screen and (max-device-width: 1060px){
    ::-webkit-scrollbar {
        width: 10px;
    }
}
`

export const CardMatch = styled.section`
    display: flex;
    padding: 8px;
    align-items: center;
    :hover{
        background-color: lightgray;
    }
    :active{
        background-color: darkgray;
    }
`
export const ImagemMatch = styled.img`
    height: 64px;
    width: 64px;
    border-radius: 50px;
    margin-right: 16px;
    object-fit: cover;
`