import React from 'react'
import Logo from '../../img/logo.png'
import Chat from '../../img/chat.svg'
import { HeaderContainer } from './styled.js'

export default function Header(props) {
    const verMatches = () => {
        props.trocaTela()
    }

    const iconeChat = () => {
        if (props.tela !== 'matches') {
            return <img src={Chat} alt='chats' onClick={verMatches} />
        }
    }
    
    return (
        <HeaderContainer>
            <img src={Logo} alt='logo' onClick={verMatches} />
            <h1>AstroMatch</h1>
            {iconeChat()}
        </HeaderContainer>
    );
}