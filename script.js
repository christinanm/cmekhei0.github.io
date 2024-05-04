function toggleMenu () {
    const menu = document.querySelector(".mobile-links");
    const icon = document.querySelector(".mobile-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

//execute the function to run and display the countdown clock; 
runClock();
setInterval("runClock()", 1000); //example of running a command at a set interval


//example of a JavaScript function that keeps track of current day and time as well as a countdown function
function runClock () {
    //store current date and time
    var currentDay = new Date();
    var dateStr = currentDay.toLocaleDateString();
    var timeStr = currentDay.toLocaleTimeString();

    //displays current date and time
    document.getElementById("dateNow").innerHTML = 
    dateStr + "<br />" + timeStr;
        
        
    //calculate days until May 11, nunu's birthday
    var newYear = new Date("May 11, 2023");
    var nextYear = currentDay.getFullYear();
    newYear.setFullYear(nextYear);
    var daysLeft = (newYear - currentDay)/(1000*60*60*24);

    //calculate hours left in current day 
    var hrsLeft = (daysLeft - Math.floor(daysLeft))*24; //example of using a Math method

    //calculate minutes and seconds left in the current hour 
    var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
    var secsLeft = (minsLeft - Math.floor(minsLeft))*60;
    
    //display time left until nunu's birthday
    document.getElementById("days").textContent = Math.floor(daysLeft);
    document.getElementById("hrs").textContent = Math.floor(hrsLeft);
    document.getElementById("mins").textContent = Math.floor(minsLeft);
    document.getElementById("secs").textContent = Math.floor(secsLeft);

}
//example of converting between a number and text 
var nunuNewAge = 3;
nunuNewAgeString = nunuNewAge + "!";

