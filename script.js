/*
Please, use the endpoint api.openweathermap.org for your API calls
- Example of API call:
api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=cde68296c50e2b4f8233aedcc9065030&units=imperial
*/

let cityName = document.getElementById('cityName')
let cityInput = document.getElementById('city')
let temp = document.getElementById('temp')
let description =document.getElementById('description')
let sunrise = document.getElementById('sunrise')
let sunset = document.getElementById('sunset')

function getCity(){
    
    let appRequest =`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=cde68296c50e2b4f8233aedcc9065030&units=imperial`
    fetch(appRequest,{mode: 'cors'})
    
    .then(function(response){
       return response.json();
    })
    
    .then(function(response){
        
        console.log(response)
        let sunrise1 = new Date((response.sys.sunrise)*1000)
        let temp1 = response.main.temp
        let description1 = response.weather[0].description
        let sunset1 =  new Date((response.sys.sunset)*1000)
        
        function time(va){
            return `Time ${va.getHours()} :${va.getMinutes()}`
            
        }
        console.log('temp:', temp1, 'sunrise:',sunrise1, "sunset:", sunset1 ,'description:',description1)    
        
        sunrise.innerHTML =""
        sunset.innerHTML =""
        temp.innerHTML=""
        description.innerHTML=""

        sunrise.append(time(sunrise1))
        sunset.append(time(sunset1))
        temp.append(temp1)
        description.append(description1)

    })

}

cityInput.addEventListener("click", function(){
    
    cityName.append("cityName", document.getElementById("cityName").value);
    getCity()
    
});