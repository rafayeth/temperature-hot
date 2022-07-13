
const  API_KEY = `4e6e412b05d6d61b2fe3dbb5a7deb066`

const searchTemperature =() =>{

const searchtext = document.getElementById('city-name')
const city = searchtext.value
searchtext.value = ''

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

fetch(url)
.then(res =>res.json())
.then(data=>displayData(data))


}


const displayresult = (id,text)=>{

    document.getElementById(id).innerText = text
}

const displayData = temperature =>{
console.log(temperature)
 

// const name = document.getElementById('city')
// name.innerText = temperature.name
displayresult('city',temperature.name)
displayresult('temp',temperature.main.temp)
displayresult('cloud',temperature.weather[0].main)


const url =`http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`


const image = document.getElementById('weather-icon')
image.setAttribute('src' , url)


}