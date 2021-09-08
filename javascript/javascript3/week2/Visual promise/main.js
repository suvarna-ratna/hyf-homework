//One by one
const red = document.querySelector("ul.marks li:nth-child(1)");
const blue = document.querySelector("ul.marks li:nth-child(2)");
const green = document.querySelector("ul.marks li:nth-child(3)");

function translateOneByOne() {
  moveElement(red, { x: 20, y: 300 })
    .then(() => {
      console.log("Red Element has been moved");
      moveElement(blue, { x: 400, y: 300 }).then(() => {
        console.log("Blue Element has beenmoved");
        moveElement(green, { x: 400, y: 20 }).then(() => {
          console.log("Green Element has been moved");
        });
      });
    })

    .catch((err) => console.log(err));
}

//All at once
function translateAllAtOnce() {
  Promise.all([
    moveElement(red, { x: 20, y: 300 }),
    moveElement(blue, { x: 400, y: 300 }),
    moveElement(green, { x: 400, y: 20 }),
  ]).then(() => {
    console.log("All moved");
  });
}
