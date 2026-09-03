let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 3, 4, 5, 6, 7];
let result = new Set();

let mySet = new Set();

for(let i=0; i<arr1.length; i++){
    mySet.add(arr1[i])
}
console.log(mySet)

for(let i=0; i<arr2.length; i++){
    if(mySet.has(arr2[i])){
        result.add(arr2[i])
    }

}
let resultArray = [...result];
console.log(resultArray)