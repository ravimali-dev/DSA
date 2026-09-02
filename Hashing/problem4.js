let arr = [1, 2, 3, 4, 2, 5];
let mySet = new Set();
let isDublicate = false;

for(let i=0; i<arr.length; i++){
    if(mySet.has(arr[i])){
        isDublicate = true;
        break;
    }else{
        mySet.add(arr[i])
        
    }

}
console.log(isDublicate)