let n = 5;

for(let i=1; i<=n; i++){

    let newLine = "";

     for(let j=0; j<=n-i-1; j++){
              newLine += " ";
        }
     for(let j=0; j<i*2-1; j++){
        newLine += "*";
     }
      for(let j=0; j<=n-i-1; j++){
              newLine += " ";
        }
        console.log(newLine)
      
}