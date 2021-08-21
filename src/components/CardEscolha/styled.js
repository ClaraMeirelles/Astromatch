import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  border: 1px solid black;
  height: 100%;
  width: 90%;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  justify-self: center;
  border-radius: 10px;
  margin-top: 8px;
  color: white;

  animation: ${props => {
    if (props.animation === "direita") {
      return "direita 0.8s  0s"
    } else if (props.animation === "esquerda") {
      return "esquerda 0.8s 0s"
    } else {
      return ""
    }
  }};
  @keyframes direita {
    from{
      transform: translate(0) rotate(0);
    }
    to {
      transform: translate(200px) rotate(45deg);
    }
  }
  @keyframes esquerda {
    from{
      transform: translate(0) rotate(0);
    }
    to {
      transform: translate(-200px) rotate(-45deg);
    }
  }
`
export const ImgPerfil = styled.img`
  width: 100%;
  z-index:1;
  object-fit: cover;
`

export const BackGroundBlur = styled.img`
  position:absolute;
  height: 100%;
  width: 100%;
  filter: blur(10px);
`

export const DadosPerfil = styled.section`
  position: absolute;
  width: 100%;
  height: fit-content;
  bottom: 0;
  padding: 8px;
  box-sizing: border-box;
  z-index: 2;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
  left:0;
`