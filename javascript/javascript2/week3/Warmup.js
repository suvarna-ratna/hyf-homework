//Log out the text Called after 2.5 seconds 2.5 seconds after the script is loaded.
window.addEventListener("load", function () {
    setTimeout(() => console.log("Called after 2.5 seconds"), 2500)
  });
  
  //Create a function that takes 2 parameters: delay and stringToLog. 
  //Calling this function should log out the stringToLog after delay seconds. 
  //Call the function you have created with some different arguments.
  function delayStringToLog(delay, stringToLog) {
    setTimeout(() => console.log(stringToLog), delay * 1000)
  }
  
  delayStringToLog(5, "This string logged after 5 seconds");
  delayStringToLog(3, "This string logged after 3 seconds");
  
  //Create a button in html. When clicking this button, 
  //use the function you created in the previous task to log out the text: 
  //Called after 5 seconds 5 seconds after the button is clicked.
  const bt1 = document.getElementById("btn")
  bt1.addEventListener('click', () => { delayStringToLog(5, "Called after 5 seconds") })
  
  /*Create two functions and assign them to two different variables. 
  One function logs out Earth, the other function logs out Saturn. 
  Now create a new third function that has one parameter: planetLogFunction. 
  The only thing the third function should do is call the provided parameter function. 
  Try call the third function once with the Earth function and once with the Saturn function.*/
  function logsEarth() { console.log("Earth") }
  function logsSaturn() { console.log("Saturn") }
  function logsPlanet(planetLogFunction) { planetLogFunction(); }
  logsPlanet(logsEarth);
  logsPlanet(logsSaturn);
  
  /*Create a button with the text called "Log location". When this button is clicked 
  the location (latitude, longitude) of the user should be logged out using this browser api */
  
  function geoFindMe() {
  
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
  
    mapLink.href = '';
    mapLink.textContent = '';
  
    function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
  
      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }
  
    function error() {
      status.textContent = 'Unable to retrieve your location';
    }
  
    if (!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
  
  document.querySelector('#btn2').addEventListener('click', geoFindMe);
  
  //Optional Now show that location on a map using fx the Google maps api
  let map;
  
  function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }
  
  //Create a function called runAfterDelay. It has two parameters: delay and callback. 
  //When called the function should wait delay seconds and then call the provided callback function. 
  //Try and call this function with different delays and different callback functions
  function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000)
  }
  
  runAfterDelay(3, function () {
    console.log("logged after 3 seconds");
  });
  
  /*Check if we have double clicked on the page. 
  A double click is defined by two clicks within 0.5 seconds. 
  If a double click has been detected, log out the text: "double click!"*/
  window.addEventListener('dblclick', () => {
    console.log("double click!")
  })
  
  /*Create a function called jokeCreator that has three parameters: 
  shouldTellFunnyJoke - boolean, logFunnyJoke - function and logBadJoke - function. 
  If you set shouldTellFunnyJoke to true it should call the logFunnyJoke function 
  that should log out a funny joke. And vice versa.*/
  function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
    (shouldTellFunnyJoke === true) ? logFunnyJoke() : logBadJoke();
  }
  function funnyJokeFunc() {
    console.log("its funny joke")
  }
  function badJokeFunc() {
    console.log("its bad joke")
  }
  jokeCreator(true, funnyJokeFunc, badJokeFunc)
  jokeCreator(false, funnyJokeFunc, badJokeFunc)
  