const endDate = "31 January 2025 11:59 PM"

document.getElementById('end-date').innerText=endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    const end = new Date(endDate);
    const now = new Date();

    //converted the time from milliseconds to seconds
    const diff = (end-now)/1000;

    if(diff<0) //if time is negative then stop
    {
        return;
    }

    //converting into days
    inputs[0].value= Math.floor(diff/3600/24);
    //converting into hours
    inputs[1].value= Math.floor(diff/3600)%24;
    //converting into minutes
    inputs[2].value= Math.floor(diff/60)%60;
    //converting into seconds
    inputs[3].value= Math.floor(diff)%60;

}

clock();

setInterval(
    ()=>{
        clock()
    },
    1000
)