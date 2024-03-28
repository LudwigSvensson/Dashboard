function clock(){
 var monthNames = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "October", "November", "December"]
 var today = new Date();
 document.getElementById('date').innerHTML =(today.getDate() +' '+ monthNames[today.getMonth()] +' '+today.getFullYear(
    ));

    var h = today.getHours();
    var m = today.getMinutes();    
    h =h<10? '0'+h: h;
    m =m<10? '0'+m: m;

    document.getElementById('hours').innerHTML = h;
    document.getElementById('minutes').innerHTML = m;
}var inter = setInterval(clock, 1000);