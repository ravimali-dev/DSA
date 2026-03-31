//Question 1️⃣ Find length of string
// let str = "Hellow World";
// console.log(str.length);

//Question 2️⃣ Reverse string
// let str = "Hellow World";
// let reverseString = ""
// for(let i=str.length-1; i>=0; i--){
//     reverseString += str[i]
// }
// console.log(reverseString);

//Question 3️⃣ Check palindrome string
// let str = "ravi";
// let reverseString = ""
// for(let i=str.length-1; i>=0; i--){
//      reverseString += str[i]
// }
//  if(str == reverseString){
//     console.log("isPalindrome");
//  }else{
//     console.log("notPalindrome");
//  }

//Question 4️⃣ Count vowels
// let str = "javascript";
// let count = 0;
// for(let i=0; i<str.length; i++){
//     if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
//         count++
//     }
// }
// console.log(count);

//Question 5️⃣ Count consonants
// let str = "javascript";
//  let count = 0;
//  for(let i=0; i<str.length; i++){
//      if(str[i]!="a"&& str[i]!="e"&& str[i]!="i"&& str[i]!="o" && str[i]!="u"){
//         count++
//      }
// }
// console.log(count);

//Question 6️⃣ Count characters frequency
// let str = "banana";
// let obj = {};
// for(let i=0; i<str.length; i++){
// let char = str[i];
//     if(obj[char]){
//         obj[char]++
//     }else{
//         obj[char] = 1
//     }
// }
// console.log(obj)

//Question 7️⃣ Convert uppercase → lowercase
// let str = "JAVASCRIPT";
// console.log(str.toLocaleLowerCase());

//Question 8️⃣ Find First Repeating Character
// let str = "swiss";
// let obj = {};

// for(let i=0; i<str.length;i++){
//    let  char = str[i];
//     if(obj[char]){
//         console.log(char)
//         break;
        
//     } else{
//         obj[char] = true
//     }
    
// }
//Question 🔟 Check Anagram

let str = "listen";
let str2 = "silent";
let IsAnagram = false;
let obj = {};

for(let i=0;i<str.length; i++){
    let char = str[i];
   if(str.length == str2.length){
        IsAnagram = true;
   }
   if(obj[char]){
    obj[char]++
   }else{
    obj[char] = 1;
   }
}
console.log(isEquil);
