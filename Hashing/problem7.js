let arr = [4, 3, 2, 4, 1, 3, 2, 4]
let myMap = new Map();

for(let i=0; i<arr.length; i++){
    if(myMap.has(arr[i])){
     let oldValue =  myMap.get(arr[i])
     myMap.set(arr[i],oldValue + 1)
    }else{
        myMap.set(arr[i], 1)
    }
}    
console.log(myMap)

for(let [Key,value] of myMap){
    if(value == 1){
        console.log(Key)
    }
}