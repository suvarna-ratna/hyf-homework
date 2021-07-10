const class07Students = [];
function addStudentToClass(studentName) {  
if(studentName.trim() === "") {
    console.log(' cannot add an empty string to the class');
}else if (class07Students.includes(studentName.trim())){
    console.log(`Student ${studentName} is already in the class.`)
}else if (class07Students.length<6){
  class07Students.push(studentName.trim());
}
else if(class07Students.length>=6){
    if(studentName.trim() === "Queen Margrethe II" || class07Students.includes('Queen Margrethe II')){
        class07Students.push(studentName.trim()); 
      }
         else{
      console.log('Cannot add more students to class 07')
        }
}      
  return class07Students;
  
}

function getNumberOfStudents() {  
    console.log(`Class 07 has ${class07Students.length} students`);
}


addStudentToClass("sitara");//Add some students to the class.
addStudentToClass("suvarna");
addStudentToClass("simon");
addStudentToClass("stalin");
addStudentToClass("suvarna"); //Add a student that is already in the class
addStudentToClass("Srujan");
addStudentToClass("sahit");
addStudentToClass(""); //Add empty string
addStudentToClass("sri"); //Add more students than there is space for
addStudentToClass("Queen Margrethe II"); //Add the Queen to a full class


console.log(class07Students)
getNumberOfStudents();