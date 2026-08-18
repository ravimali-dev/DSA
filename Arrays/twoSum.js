let arr = [3, 3];
let target = 6;
let map = new Map()

for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];

    if(map.has(complement)){
        console.log(map.get(complement), i)
    }
    map.set(arr[i], i)
    
}