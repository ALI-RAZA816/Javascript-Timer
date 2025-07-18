
// intilize function
function get_time(){

    // format date after two digits
    const formate=(time)=>{
        if(time<10){
            return `0${time}`; 
        }else{
            return time;
        }
    }

    // control AM/PM
    const formate_hour = (time)=>{
        if(time>12){
            return `${time-12}`;
        }else{
            return time;
        }
    }

    // date mathod
    let system_date = new Date();

    // get date into string
    let new_date= system_date.toLocaleDateString();
    let system_hour =formate(formate_hour(system_date.getHours()));
    let system_minutes = formate(system_date.getMinutes());
    let system_seconds = formate(system_date.getSeconds());
    let time = document.getElementById('time');
    time.textContent = `${system_hour}:${system_minutes}:${system_seconds}`;
    let date = document.getElementById('date');
    date.textContent = new_date;
    
    // name of week days
    let week_name = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
    let days = document.querySelectorAll('.day');
    let current_week_day = system_date.getDay();
    for(var i = 0 ; i<days.length; i++){
        days[i].textContent = week_name[i];
        days[current_week_day].style.color = 'red';
    }
  
}

// update function call after every 1s
setInterval(get_time,1000);
