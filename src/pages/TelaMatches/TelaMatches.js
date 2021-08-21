import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { TelaExibeMatch, CardMatch, ImagemMatch } from './styled.js'
import { BASE_URL } from '../../constants/BASE_URL.js'

export default function TelaMatches() {
  const [matches, setMatches] = useState([])
  useEffect(() => {
    axios.get(`${BASE_URL}/matches`)
      .then((resposta) => {
        setMatches(resposta.data.matches)
      }).catch(() => {
        window.alert("ocorreu um erro, atualize a página")
      })
  }, [])

  const exibeMatches = matches.map((match) => {
    return (
      <CardMatch key={match.id}>
        <ImagemMatch src={match.photo} />
        <p>{match.name}</p>
      </CardMatch>
    )
  })
  return (
    <TelaExibeMatch>
      {exibeMatches}
    </TelaExibeMatch>
  );
}