function getClothesToWear(temperature){
    if(temperature<=0){
        return "winter jacket,thermals,gloves,cap"
    }else if (temperature<=10){
        return "winter jacket,thermals"
    }else if (temperature<=20){
        return "Sweater and jeans"
    }else if (temperature<=25){
        return "hoodie,jeans"
    }else{
        return "t-shirts,skirts "
    }
}
const clothesToWear = getClothesToWear(18);
console.log(`Based on the temperature the clothes we have to wear are: ${clothesToWear}.`)
