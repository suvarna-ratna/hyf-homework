const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
  function timeToReach(obj){
    const time = obj.destinationDistance/obj.speed
    const hours = Math.floor(time)
    const minutes = Math.floor((time%1)*60)
    return `${hours} hours and ${minutes} minutes`
  }
  const travelTime = timeToReach(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes
  