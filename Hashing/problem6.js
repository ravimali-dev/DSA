let str = "programming";
let myMap = new Map();

// yahan se tu likh - loop lagake har character ka count Map me daal

for(let i=0; i<str.length; i++){
    if(myMap.has(str[i])){
     let oldValue =  myMap.get(str[i])
     myMap.set(str[i],oldValue + 1)
    }else{
        myMap.set(str[i], 1)
    }
}
let maxKey = 0;
let maxvalue = 0;
for([Key,value] of myMap){
    if(maxvalue < value){
        maxvalue = value;
        maxKey = Key
    }
}
console.log(maxKey)