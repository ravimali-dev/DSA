let n = 5;

for(let i=0; i < 5; i++){
     let newLine = "";
        for(let j=1; j<n-i+1; j++){
              newLine += j;
        }
        console.log(newLine)
}