let widthOfHouse = [8,5];
let depthOfHouse = [10,11];
let heightOfHouse = [10,8];
let gardenSizeInM2 = [100,70];

//Peters house price
let volumeInMeters1 = widthOfHouse[0]*heightOfHouse[0]*depthOfHouse[0];
const costPayingByPeter = 2500000;

 let priceOfPetersHouse = volumeInMeters1 * 2.5 * 1000 + gardenSizeInM2[0] * 300;
 if (priceOfPetersHouse < costPayingByPeter){
    console.log('Peter is paying too much for house -BAD');
 }
 else if (priceOfPetersHouse > costPayingByPeter){
     console.log('Peter is paying too little for house-LUCKY');
 }
 else{
     console.log('Peter is paying exact amount for house-OKOK')
 }
 
 //Julia house price
let volumeInMeters2 = widthOfHouse[1]*heightOfHouse[1]*depthOfHouse[1];
const costPayingByJulia = 1000000;

 let priceOfJuliaHouse = volumeInMeters2 * 2.5 * 1000 + gardenSizeInM2[1] * 300;
 if (priceOfJuliaHouse < costPayingByJulia){
    console.log('Julia is paying too much for house -BAD');
 }
 else if (priceOfJuliaHouse > costPayingByJulia){
     console.log('Julia is paying too little for house-LUCKY');
 }
 else{
     console.log('Julia is paying exact amount for house-OKOK')
 }