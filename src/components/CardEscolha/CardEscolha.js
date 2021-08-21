import React, { useState, useEffect } from 'react'
import { CardContainer, ImgPerfil, BackGroundBlur, DadosPerfil } from './styled.js'

export default function CardEscolha(props) {

  const [animacao, setAnimacao] = useState('')
  useEffect(() => {
    if (props.like === 1) {
      setAnimacao('direita')
    } else if (props.like < 0) {
      setAnimacao('esquerda')
    } else {
      setAnimacao(false)
    }
  }, [props.like])

  return (
    <CardContainer animation={animacao}>
      <BackGroundBlur src={props.perfil.photo} />
      <ImgPerfil src={props.perfil.photo} />
      <DadosPerfil>
        <h3>{props.perfil.name}, {props.perfil.age}</h3>
        <p>{props.perfil.bio}</p>
      </DadosPerfil>
    </CardContainer>
  );
}