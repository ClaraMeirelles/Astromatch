import React, { useState, useEffect } from 'react'
import axios from 'axios'
import GlobalStyle from './GlobalStyle.js'
import CardEscolha from './components/CardEscolha/CardEscolha.js'
import TelaMatches from './pages/TelaMatches/TelaMatches.js'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import { FundoPagina, AstroMatch } from './styled.js'
import { BASE_URL } from './constants/BASE_URL'

export default function App() {

  const [perfil, setPerfil] = useState("")
  const [proximo, setProximo] = useState(0)
  const [tela, setTela] = useState("card escolha")
  const [perfisNovos, setPerfisNovos] = useState(true)
  const [like, setLike] = useState(0)
  const [matches, setMatches] = useState([])

  useEffect(() => {
    axios.get(`${BASE_URL}/matches`)
      .then((resposta) => {
        if (resposta.data.matches !== matches.length) {
          setMatches(resposta.data.matches)
        }
        if (resposta.data.matches.length > matches.length) {
          const match = resposta.data.matches[resposta.data.matches.length - 1]
          window.alert(`você tem um novo Match com ${match.name}!`)
        }
      }).catch(() => {
        alert("ocorreu um erro, atualize a página")
      })
  }, [like])

  useEffect(() => {
    if (perfisNovos) {
      axios.get(`${BASE_URL}/person`)
        .then((resposta) => {
          setPerfil(resposta.data.profile)
        }).catch(() => {
          window.confirm("Acabaram os perfis, deseja reiniciar?")
          if (window.confirm) {
            reiniciarApp()
          } else {
            setPerfisNovos(false)
            setTela("ver matches")
          }
        })
    }
  }, [proximo]
  )

  //Timeouts necessários para a animação e mudança de perfil
  const proximoPerfil = () => {
    setTimeout(function () {
      setLike(0);
    }, 800)
    setTimeout(function () {
      setProximo(proximo + 1)
    }, 500)
  }

  const curtirPerfil = () => {
    setLike(1)
    proximoPerfil()
  }

  const descurtirPerfil = () => {
    setLike(-1)
    proximoPerfil()
  }

  const trocaTela = () => {
    (tela === "card escolha" ?
      setTela("matches") :
      setTela("card escolha"));
  }

  const reiniciarApp = () => {
    axios.put(`${BASE_URL}/clear`)
      .then(() => {
        setTela("card escolha")
        proximoPerfil()
      })
      .catch(() => {
        alert("um erro ocorreu, recarregue a página")
      })
  }

  return (
    <FundoPagina>
      <GlobalStyle />
      <AstroMatch>
        <Header trocaTela={trocaTela}
          tela={tela} />
        {(tela === "card escolha" && perfil) ?
          <>
            <CardEscolha perfil={perfil} like={like} />
            <Footer curtirPerfil={curtirPerfil} descurtirPerfil={descurtirPerfil} id={perfil.id} tela={tela} />
          </> :
          <TelaMatches />
        }
      </AstroMatch>
      <button onClick={reiniciarApp}>Reiniciar App</button>
    </FundoPagina>
  );
}