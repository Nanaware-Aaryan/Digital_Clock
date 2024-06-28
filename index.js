 /**
  * @file :-Index.js
  * @brief :-this code is logic of digital clock
  * @author :-Aaryan Nanaware (aaryannanaware2105@gmail.com)
  * @date :- 18/06/2024 17:21:42 PM
  */


 var hourElement = document.getElementById("hour");
 var minuteElement = document.getElementById("minute");
 var secondElement = document.getElementById("second");
 var sessionElement = document.getElementById("session");
 
 function updateClock() {
     var now = new Date();
     var hours = now.getHours();
     var minutes = now.getMinutes();
     var seconds = now.getSeconds();
 
     var formattedHours = hours % 12 || 12; // Convert 24-hour time to 12-hour time
     var formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
     var formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
     var session = hours >= 12 ? "PM" : "AM";
 
     hourElement.textContent = formattedHours;
     minuteElement.textContent = formattedMinutes;
     secondElement.textContent = formattedSeconds;
     sessionElement.textContent = session;
 }
 
 updateClock(); // Initial call to display time immediately
 
 setInterval(updateClock, 1000); // Update time every second
 