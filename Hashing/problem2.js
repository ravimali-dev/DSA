let arr = [10, 5, 10, 15, 10, 5];

let myMap = new Map();

for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])){
      let oldValue =  myMap.get(arr[i])
       myMap.set(arr[i], oldValue+1)
       
    }else{
        myMap.set(arr[i], 1)
    }
}
let highest = myMap.get(arr[i])
console.log(highest)

 for(let [key, value] of myMap){
    
    
}