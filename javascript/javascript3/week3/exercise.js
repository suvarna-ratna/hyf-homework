class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
const user1 = new User("suvarna", "akkala");
console.log(user1);
console.log(user1.firstName);
console.log(user1.getFullName());
class CV {
    constructor(email) {
        this.jobs = [];
        this.educations = [];
        this.email = email
    }

    addJob(job) {
        this.jobs.push(job)
    }

     addEducation(education) {
        this.educations.push(education)
    }

    }
function generateId() {
    return Math.floor(Math.random() * 10000)
}
class Job{
    constructor(id,title,description,startDate,endDate){
         this.id = id;
         this.title= title;
         this.description= description;
         this.startDate= startDate;
         this.endDate= endDate;
    }
}
class Education{
    constructor(id, title, school, address, startDate, endDate){
        this.id= id;
        this.title= title;
        this.school= school;
        this.address= address;
        this.startDate= startDate;
        this.endDate=endDate;
    }
}


const edu1 = new Education('10', 'SSK High School', 'Mylavaram', '06-06-2007', '04-10-2008')
const edu2 = new Education('inter', 'sri chaitanya', 'gtr', '06-06-2008', '04-25-2010')
const edu3 = new Education('B.tech', 'SRIVANI', 'Mylavaram', '06-10-2010', '05-25-2013')

const job = new Job('Data Process Associate', 'Processing documentations for counties in USA ', '02-10-2013', '05-25-2015')

const myCV = new CV('suvarna.akkala@gmail.com')

myCV.addEducation(edu1)
myCV.addEducation(edu2)
myCV.addEducation(edu3)
myCV.addJob(job)
