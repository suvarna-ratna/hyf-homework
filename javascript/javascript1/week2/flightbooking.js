//fullname
function getFullName(firstname,surname){
    return firstname+' '+surname;
}
const fullName = getFullName('Elon','Musk');
console.log(fullName);

// formalname 
function getFullName(firstname,surname,useFormalName,gender){    
    if (useFormalName == true){
        if(gender == 'male'){
            return `Lord ${firstname} ${surname}`
        }
           
    } else if (gender == 'female'){
        return `Lordess ${firstname} ${surname}`
    }
        else
        return `${firstname} ${surname}`
 
}
const fullName1= getFullName('Frederick','King', true,'male');
const fullName2= getFullName('Margrethe', 'Queen',true,'female');
console.log(fullName1);
console.log(fullName2);
