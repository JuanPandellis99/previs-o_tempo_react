import './TempoInfoSemana.css'

function TempoInfoSemana({ tempoSemana }) {
    console.log(tempoSemana)

    let previsaoDiaria = {

    }

    for (let diaria of tempoSemana.list) {
        const data = new Date(diaria.dt * 1000).toLocaleDateString()


        if (!previsaoDiaria[data]) {
            previsaoDiaria[data] = diaria
        }

    }

    const proximos5Dias = Object.values(previsaoDiaria).slice(1, 6)


    function convertDate(data) {
        const newDate = new Date(data.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: '2-digit' })

        return newDate
    }



    return (

        <div className='container-tempo'>
            <h3>Previsão da semana</h3>
            <div className='lista-tempo'>
                {proximos5Dias.map(diaria => (
                    <div className='itens-tempo'>
                        <p className='dias'>{convertDate(diaria)} </p>
                        <img src={`http://openweathermap.org/img/wn/${diaria.weather[0].icon}.png`} />
                        <p>{diaria.weather[0].description} </p>
                        <p>{Math.round(diaria.main.temp_min)}°C Mín / {Math.round(diaria.main.temp_max)}°C Máx </p>
                    </div>
                ))}
            </div>
        </div>

    )


}

export default TempoInfoSemana