import React, { useState, useEffect } from 'react'
import Like from '../../img/like.svg'
import Dislike from '../../img/dislike.svg'
import axios from 'axios'
import { BASE_URL } from '../../constants/BASE_URL'
import { FooterContainer } from './styled.js'

export default function Footer(props) {
    const [like, setLike] = useState(null)

    useEffect(() => {
        const body = {
            id: props.id,
            choice: like
        }
        if (like !== null) {
            axios.post(`${BASE_URL}/choose-person`, body, {})
                .then(() => {
                    setLike(null)
                }).catch(() => {
                    alert('Ocorreu um erro inesperado! Atualize a página ou tente novamente mais tarde.')
                })
        }
    }, [like, props.id])

    const darLike = () => {
        setLike(true)
        props.curtirPerfil()
    }

    const darDislike = () => {
        setLike(false)
        props.descurtirPerfil()
    }

    return (
        <FooterContainer>
            <img src={Dislike} alt='descurtir' onClick={darDislike} />
            <img src={Like} alt='curtir' onClick={darLike} />
        </FooterContainer>
    );
}