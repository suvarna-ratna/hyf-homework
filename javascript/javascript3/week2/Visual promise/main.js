function translateAllAtOnce() {
  Promise.all([
    moveElement(document.getElementById("red"), { x: 20, y: 300 }),
    moveElement(document.getElementById("blue"), { x: 400, y: 300 }),
    moveElement(document.getElementById("green"), { x: 400, y: 20 }),
  ]).then(() => {
    console.log("All moved");
  });
}
function translateOneByOne() {
  moveElement(document.getElementById("red"), { x: 20, y: 300 })
    .then(() => {
      console.log("Red moved");
      moveElement(document.getElementById("blue"), { x: 400, y: 300 }).then(
        () => {
          console.log("Blue moved");
          moveElement(document.getElementById("green"), { x: 400, y: 20 }).then(
            () => {
              console.log("Green moved");
            }
          );
        }
      );
    })
    .catch((err) => console.log(err));
}
//translateOneByOne()

translateAllAtOnce();
