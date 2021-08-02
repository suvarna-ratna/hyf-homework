let vname = '';
const toDo = [];
function getReply(command) {
  const arrayOfStrings = command.split(" ");
  
  if (command.startsWith("Hello my name is")) {
    vname = arrayOfStrings[4];
    return `Nice to meet you ${vname}.` ;
  }
  if (command =="What is my name?") {
    return `Your name is ${vname}.`;
  }
  if (command == "Add fishing to my todo") {
    toDo.push(command);
    return "fishing added to my todo";
  }
  if (command =="Add singing in the shower to my todo") {
    toDo.push(command);
    return "singing in the shower";
  }
  if (command =="Add dancing to my todo") {
    toDo.push(command);
    console.log(toDo)
    return "dancing added to your todo";
  }
  if (command =="remove fishing from my todo") {
    toDo.shift();
    return "Removed fishing from my todo";
  }
  if (command =="What is on my todo?") {
    if(toDo.length>0){
        return toDo;
    } 
    else {
        return "no work";
    }
  }
  if (command =="What day is it today?") {
    let dateArr = new Date().toDateString().split(" ");
    return `${dateArr[2]}. of ${dateArr[1]} ${dateArr[3]}`;
  }
  if (command === "Set a timer for 4 minutes") {
    const timeInMinutes = arrayOfStrings[4];
    const timeInMilliseconds = timeInMinutes * 60 * 1000;
    setTimeout(()=>{console.log(timeInMinutes)}, timeInMilliseconds);
    return `timer set for ${timeInMinutes} minutes`;
  }

  if (command.startsWith("what is")) {
    const firstNumber = Number(arrayOfStrings[2]);
    const secondNumber = Number(arrayOfStrings[4]);
    if (arrayOfStrings[3] === "+") {
      const sum = firstNumber + secondNumber;
      return sum;
    }
    if (arrayOfStrings[3] === "*") {
      const multiplication = firstNumber * secondNumber;
      return multiplication;
    }
    if (arrayOfStrings[3] === "/") {
      const division = firstNumber / secondNumber;
      return division;
    }
    if (arrayOfStrings[3] === "-") {
      const difference = firstNumber - secondNumber;
      return difference;
    }
  }
  if (command === "Is your task is finished?") {
    return "Yes, my task is finished ";
  }
}
console.log(getReply("Hello my name is Benjamin")); // "Nice to meet you benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower"
console.log(getReply("Add dancing to my todo")); // "dancing added to your todo"
console.log(getReply("remove fishing from my todo")); // "Removed fishing from my todo"
console.log(getReply("What is on my todo?")); // "Respond with current todo"
console.log(getReply("What day is it today?")); // "Respond with current date like 02. of Aug 2021"
console.log(getReply("Set a timer for 4 minutes")); // "timer set for 4 minutes"
console.log(getReply('what is 3 + 2'));//5
console.log(getReply('what is 3 - 2'));//1
console.log(getReply('what is 3 * 2'));//6
console.log(getReply('what is 3 / 2'));//1.5
console.log(getReply("Is your task is finished?")); // "Yes ,my task is finished "
