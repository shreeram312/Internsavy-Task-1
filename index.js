const apikey="c8c010191eb5ed857f1aa4fcfad309d2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let searchBox = document.getElementById("box")
let searchBtn = document.getElementById("button");
let weathericon = document.getElementById("mainimg");



async function checkweather(city){

    const response = await fetch(apiurl + city + `&appid=${apikey}`)
  
    let data =await response.json();
    console.log(data)
    if(response.status==404){
        alert("City not found")


        document.querySelector(".city").innerHTML=" City Not found"
document.querySelector(".temp").innerHTML="0"+"°C"
document.querySelector(".humidity").innerHTML="0"
document.querySelector(".wind").innerHTML="0"
document.querySelector(".desc").innerHTML="0"
document.querySelector(".weather").innerHTML=" "





    }


document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp + "°C";
document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
document.querySelector(".wind").innerHTML=data.wind.speed + " km/hr";
document.querySelector(".desc").innerHTML=data.weather[0].description;



if(data.weather[0].main =="Clouds"){
    weathericon.src="clouds.png";
    

}
else if(data.weather[0].main =="Clear"){
    weathericon.src="clear.png";
}
else if(data.weather[0].main =="Rain"){
    weathericon.src="rain.png";
}
else if(data.weather[0].main =="Drizzle"){
    weathericon.src="drizzle.png";
}
else if(data.weather[0].main =="Mist"){
    weathericon.src="mist.png";
}



}



searchBtn.addEventListener("click", ()=>{
    checkweather(searchBox.value);

})