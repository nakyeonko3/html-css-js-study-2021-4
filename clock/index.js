const clockContainer = document.querySelector(".xmasDay_clock"),
clockTitle= clockContainer.querySelector("h2");

const xmasDay = new Date("2021-12-24:00:00:00+0900");


function getTime() {
    const xmasDay = new Date("2021-12-24:00:00:00+0900");   
    const date = new Date();

    const total_milliseconds = xmasDay - date;
    const total_seconds = total_milliseconds / 1000;

    const days = set_Format(total_seconds / (60*60*24));
    const hours = set_Format(total_seconds % (60*60*24)/(60*60));
    const minutes = set_Format((total_seconds % (60*60*24)%(60*60))/60);
    const seconds = set_Format((total_seconds % (60*60*24))%(60*60)%60);

    clockTitle.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
}


function set_Format (times){
    times = Math.floor(times);    
    times = times<10 ? `0${times}` :`${times}`;
    return times;
 } // if 'times' is less than 10, set times to `0${times}`


function init() {
    getTime();
    setInterval(getTime, 1000);
}



// function set_double_digit (times){    
//     if(times < 10)
//     {
//         times =`0${times}`;
//     }
//     else
//     {
//         times = `${times}`;
//     }
//     return times;
// }


init();

