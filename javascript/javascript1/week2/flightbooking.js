//fullname
function getFullname(firstname,surname){
    return firstname+' '+surname;
}
const fullname = getFullname('Elon','Musk');
console.log(fullname);

// formalname 
function getFullname(firstname,surname,useFormalName){    
    if (useFormalName == true){
        useFormalName = 'Lord';    
    } else { 
        useFormalName = 'Lordess';
    }
 return useFormalName+' '+firstname+' '+surname;
}
const fullname1= getFullname('Frederick','King', true);
const fullname2= getFullname('Margrethe', 'Queen',false);
console.log(fullname1);
console.log(fullname2);
