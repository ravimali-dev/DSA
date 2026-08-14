let arr = [10, 20, 10, 30, 20, 10];

let myMap = new Map();

for(let i=0; i<arr.length; i++){
    console.log(myMap.has(arr[i]))
    if(myMap.has(arr[i])){
      let oldValue =  myMap.get(arr[i])
       myMap.set(arr[i], oldValue+1)
       
    }else{
        myMap.set(arr[i], 1)
    }
}
console.log(myMap)