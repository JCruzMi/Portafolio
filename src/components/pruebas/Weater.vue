<template>
    <div class="weather">
        <div class="wrap">
            <span id="location"></span>
            <span id="country"></span>
            <span id="date"></span>
            <span id="temperature"></span>
            <div class="box1">
                <span ><img id="img"></span>
                <span id="desc"></span>
            </div>
            <span id="description"></span>
            <div class="hi-low">
                <div class="box1">
                    <span>Temperatuda <br> Minima</span>
                    <span id="temperature_min"></span>
                </div>
                <div class="box1">
                    <span> Temperatuda <br> Maxima</span>
                    <span id="temperature_max"></span>
                </div>
            </div>
            <div class="hi-low">
                <div class="box1">
                    <span> Humedad </span>
                    <span id="humidity"></span>
                </div>
                <div class="box1">
                    <span> Presión </span>
                    <span id="pressure"></span>
                </div>
            </div>
            
            
        </div>
    </div>


</template>

<script>

import { computed, watchEffect } from 'vue'
import { useGeolocation } from '../../logic/useGeolocation'

export default {
    setup(){
        

        const { coords } = useGeolocation()
        const currPos = computed (() => ({
            lat: coords.value.latitude,
            lng: coords.value.longitude
        }))
        
        
        const { API_KEY } = useGeolocation() 

        const getData = () =>{
            if (currPos.value.lat != 0){
                fetch("http://api.openweathermap.org/data/2.5/weather?units=metric&lat="+currPos.value.lat+"&lon="+currPos.value.lng+"&appid="+API_KEY)
                .then(response=> response.json())
                .then(data => setWeatherData(data))
            }
        }

        const setWeatherData = data =>{
            
            const weatherData = {
                location: data.name,
                desc : data.weather[0].main,
                description : data.weather[0].description,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                temperature: data.main.temp + " °C",
                temperature_max: data.main.temp_max + " °C",
                temperature_min: data.main.temp_min + " °C",
                date: getDate(),
                country: data.sys.country,
            }
            Object.keys(weatherData).forEach( key => {
                document.getElementById(key).textContent = weatherData[key]
            })
            pic("http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png",)
        }

        const getDate = () =>{
            let date= new Date()
            return `${date.getDate()}-${ ( '0' + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`
        }

        const pic = img =>{
            
            
            /*
            locate.style.backgroundImage  = "url("+img+")"
            locate.style.backgroundRepeat = "no-repeat"
            */
            let imgElement = document.getElementById("img")
            imgElement.src = img
            
            
            
            
        }

        watchEffect(() => 
            getData()
        )


        return {
            
            currPos,
            getData

        }
        
    }
} 
</script>

<style>

.weather{
    margin: 0;
    padding: 0;
    width: 45%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

}

.weather .wrap{
    display: flex;
    flex-direction: column;
    width: 90%;
    max-height: 100%;
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2.6px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    color: var(--bg-black-900);
}

.weather .wrap #location{
    font-size: 32px;
    font-weight: 500;
    margin-bottom: 5px;
    margin-top: 1rem;
}

.weather .wrap #date{
    font-size: 16px;
}

.weather .wrap #temperature{
    font-size: 9vw;
    font-weight: 900;
    margin: .5rem 0px;
    text-shadow: 1px 1px 0 var(--text-black-600),
    2px 2px 0 var(--text-black-600),
    3px 3px 0 var(--text-black-600),
    4px 4px 0 var(--text-black-600),
    5px 5px 0 var(--text-black-600),
    6px 6px 0 var(--text-black-600),
    1px 1px 0 rgba(0, 0, 0, 0.1)
    ;    
}

.weather .wrap #desc{
    font-size: 32px;
    font-weight: 700;
}

.weather .wrap .hi-low{
    font-size: 24px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.weather .wrap .hi-low .box1:nth-child(1){
    margin-right: 1rem;
    justify-content: space-between;
}
.weather .wrap .hi-low .box1:nth-child(2){
    margin-left: 1rem;
    justify-content: space-between;
}

.weather .wrap .hi-low span:nth-child(odd){
    font-size: 12px;
    padding-right: 3px;
}

.weather .wrap .box1{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    margin-bottom: 1rem;
}

.weather .wrap .box1:nth-child(n){
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
    backdrop-filter: blur(2.6px);
    box-shadow: 0 25px 45px rgba(0,0,0,0.1);
    border: 1px solid rgba(255,255,255,0.5);
    border-right: 1px solid rgba(255,255,255,0.2);
    border-bottom: 1px solid rgba(255,255,255,0.2);
    padding: 0.5rem 1rem;
}


</style>