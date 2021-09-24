const firstWords = ['Easy','Awesome','Corporate','Great','Cool','Adventure','Systematic','Dynamic','Logical','Practical'];
const secondWords = ['Super', 'Technology', 'Idea','Media','Information','Launched','Problems','Solutions','Team','Support'];

const randomNumber1 = Math.floor(Math.random() * firstWords.length);
const randomNumber2 = Math.floor(Math.random() * secondWords.length);
const startupName = firstWords[randomNumber1]+ " " + secondWords[randomNumber2];

console.log(`The startup: \"${startupName}\" containes ${startupName.length} characters.`);
