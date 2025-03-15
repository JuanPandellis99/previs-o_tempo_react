import './TempoInfo.css'

function TempoInfo({tempo}){
 


    return(

        <div className='container-tempo'>
            <h2>{tempo.name}</h2>

            <div className='info-tempo'>
                <img src={`http://openweathermap.org/img/wn/${tempo.weather[0].icon}.png`} />
                <p className='temp'>{Math.round(tempo.main.temp)}°C</p>

            </div>
            <p className='descrição-tempo'>{tempo.weather[0].description}</p>
            <div className='mais-info'>
                <p>Sensação Térmica: {Math.round(tempo.main.feels_like)}°C</p>
                <p>Umidade: {tempo.main.humidity}%</p>
                <p>Pressão: {tempo.main.pressure}</p>
            </div>
        </div>

    )


}



export default TempoInfo