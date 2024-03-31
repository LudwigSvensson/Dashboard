    const aplvikenlat = 57.08222311559232;
    const aplvikenlng = 12.252328339174356;

    const läjetlat = 57.06100596656547;
    const läjetlng = 12.268936577196913;

    function degreesToDirection(degrees) {
        // Mappa vinklar till väderstreck
        const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
        
        // Beräkna indexet för väderstrecket baserat på graderna
        const index = Math.round(degrees / 22.5) % 16;
    
        // Returnera motsvarande väderstreck
        return directions[index];
    }
    

    function läjetSurf(){
        fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${läjetlat}&longitude=${läjetlng}&current=wave_height&timezone=Europe%2FBerlin&forecast_days=1`
        ).then((response) => response.json())
            .then((jsonData) => {           

            document.querySelector(".waveheight").innerHTML = jsonData.current.wave_height +'m';            
        });
    }
    addEventListener("load", ()=>{
        läjetSurf();
    })
    
    function läjetVind(){
        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${läjetlat}&longitude=${läjetlng}&current=wind_speed_10m,wind_direction_10m&wind_speed_unit=ms&forecast_days=1`
        ).then((response) => response.json())
            .then((jsonData) => {

            // Hämta vindhastigheten och vindriktningen från JSON-data
            const windSpeed = jsonData.current.wind_speed_10m + 'm/s';
            const windDirectionDegrees = jsonData.current.wind_direction_10m;
            
            // Konvertera vindriktningen från grader till väderstreck
            const windDirection = degreesToDirection(windDirectionDegrees);

            document.querySelector(".wind2").innerHTML = windSpeed;
            document.querySelector(".wind-direction").innerHTML = windDirection;
            
        });
    }
    addEventListener("load", ()=>{
        läjetVind();
    })

    /*fetch(`https://api.stormglass.io/v2/weather/point?lat=${aplvikenlat}&lng=${aplvikenlng}&params=${params}`, {
        headers: {
    'Authorization': '6527a8aae-ef42-11ee-b3ba-0242ac130002-527a8b1c-ef42-11ee-b3ba-0242ac130002'
        }
    }).then((response) => response.json()).then((jsonData) => {
        console.log(jsonData)
        
    });*/




    