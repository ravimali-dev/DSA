let n = 5;

for(let i=0; i < 5; i++){
     let newLine = "";
        for(let j=0; j<n-i; j++){
              newLine += " *";
        }
        console.log(newLine)
}