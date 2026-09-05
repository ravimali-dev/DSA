let arr = [2, 7, 6, 10, 8];
let target = 9;

let map = new Map();

for (let i = 0; i < arr.length; i++) {

    let x = target - arr[i];

    if (map.has(x)) {
        console.log(map.get(x), i);
        break;
    }

    map.set(arr[i], i);
}