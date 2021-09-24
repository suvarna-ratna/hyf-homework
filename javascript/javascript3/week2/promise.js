//Promise that resolves after set time:
function promiseResolveAfterSetTime(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfter * 1000);
  });
}

promiseResolveAfterSetTime(5).then(() => {
  console.log("I am called asynchronously"); // logged out after 5 seconds
});
//using async await function

async function usingAsyncAwait() {
  try {
    await promiseResolveAfterSetTime(5);
    console.log("I am called asynchronously using async and await function");
  } catch (error) {
    console.log(error);
  }
}
usingAsyncAwait();

//Rewrite time:
function setTimeoutPromise(resolveAfetr) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, resolveAfetr);
  });
}

setTimeoutPromise(3000).then(() => {
  console.log("Called after 3 seconds");
});

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition((position) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const location = { lat: latitude, lon: longitude };
      resolve(location);
    }),
      (error) => reject(error);
  });
}

getCurrentLocation()
  .then((position) => {
    // called when the users position is found
    console.log(position);
  })
  .catch((error) => {
    // called if there was an error getting the users location
    console.log(error);
  });

//Fetching and waiting:
//Wait 3 seconds
//After 3 seconds fetch some data from any api you like
//Log out the data from the api
const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve();
  }, 3000);
}).then(() => {
  fetch("https://foodish-api.herokuapp.com/api/")
    .then((response) => response.json())
    .then((data) => console.log("promise", data.image));
});

async function usingAsync() {
  try {
    await promise;
    await fetch("https://foodish-api.herokuapp.com/api/")
      .then((response) => response.json())
      .then((data) => {
        console.log("async func", data.image);
      });
  } catch (error) {
    console.log(error);
  }
}
usingAsync();
