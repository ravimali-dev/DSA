let arr = [10, 5, 10, 15, 5, 10, 20];


let myMap = new Map();

for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])){
        let oldValue = myMap.get(arr[i]);
        myMap.set(arr[i], oldValue+1)
    }else{
        myMap.set(arr[i], 1)
    }
}

let highestValue = 0;
let highestKey = 0;
let lowestValue  = Infinity;
let lowestKey = 0;

for(let [Key, value] of myMap){
    if(highestValue < value){
        highestValue = value;
        highestKey = Key;
    }
    if(lowestValue > value){
        lowestValue = value;
        lowestKey = Key;
    }
}
console.log(highestValue)
console.log(highestKey)
console.log(lowestValue)
console.log(lowestKey)