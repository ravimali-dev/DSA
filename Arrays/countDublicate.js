const arr = [1, 2, 3, 2, 1, 3, 3];

let myMap = new Map();

for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])){
        myMap.set(arr[i],myMap.get(arr[i]) + 1);
    }else{
        myMap.set(arr[i], 1)
    }
}
console.log(myMap)