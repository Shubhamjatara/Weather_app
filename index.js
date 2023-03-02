
    //check button event handler
    document.getElementById("btn").addEventListener("click",() => {
    //setting values
    document.getElementsByClassName("details")[0].innerHTML = "Temp:";
    document.getElementsByClassName("details")[1].innerHTML = "Humidity:";
    document.getElementsByClassName("details")[2].innerHTML = "Wind:";
    document.getElementsByClassName("details")[3].innerHTML = "Condition:";

    //getting check button field value (city name)
    let city = document.getElementsByTagName("input")[0].value;
  
  if (( city ) == "" ) {//console.log("Wrong");

  document.getElementById("incorrect").innerHTML = "Invalid Input";
  return;
}
  else
    document.getElementById("incorrect").innerHTML = " ";
    
    //api key
    //Go openWeather webiste and generate your api key
    let api_key = 'ENTER YOUR API KEY HERE'; 
    //api url
    var api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    fetch(api).then(response=>response.json()).then(res=>{
        var kel = res.main.temp; // temperature data fetch
        var temp = kel-273.15; //temperature
        var Humidity = res.main.humidity; // humidity
        var wind = res.wind.speed; //speed
        var Condition =  res.weather[0].main;//cloud
        temp = temp.toString();

        
        document.getElementsByClassName("details")[0].innerHTML +=" "+ temp[0]+temp[1]+"°C";
        document.getElementsByClassName("details")[1].innerHTML +=" " +Humidity+"%";
        document.getElementsByClassName("details")[2].innerHTML +=" "+ wind+" "+"km/h";
        document.getElementsByClassName("details")[3].innerHTML +=" "+ Condition;
       
    }).catch(()=>console.log(alert("Incorrect Details"))).catch(()=>alert("server Problem"));


});

