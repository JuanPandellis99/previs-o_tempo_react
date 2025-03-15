import { useState, useRef } from 'react'
import axios from 'axios'
import './App.css'
import TempoInfo from './components/TempoInfo/TempoInfo'
import TempoInfoSemana from './components/TempoInfoSemana/TempoInfoSemana'
import { Cloud } from 'lucide-react';



function App() {
  const [tempo, setTempo] = useState()
  const inputRef = useRef()
  const [tempoSemana, setTempoSemana] = useState()

  async function buscarCidade(){

    const cidade = inputRef.current.value
    const key = "6b5bf0518efdbea721521b846f6f4b3c"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang={pt_br}&units=metric`

    const urlSemana= `https://api.openweathermap.org/data/2.5/forecast?q=${cidade}&appid=${key}&lang={pt_br}&units=metric`
  

    const apiTempo = await axios.get(url)
    setTempo(apiTempo.data)

    const apiInfoSemana = await axios.get(urlSemana)

    setTempoSemana(apiInfoSemana.data)

  }

  return (
    <div className='container'>
      <h1>Previsão do tempo <Cloud size={32} /></h1>
      <input ref={inputRef} type="text" placeholder='Escreva o nome da Cidade' />
      <button onClick={buscarCidade}>Buscar</button>

      {tempo&& <TempoInfo tempo={tempo} />}
      {tempoSemana && <TempoInfoSemana tempoSemana={tempoSemana}/>}
    </div>

  )
}

export default App
