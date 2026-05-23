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
for(let i=0; i<n; i++){

    let newLine = "";

     for(let j=0; j<i; j++){
              newLine += " ";
    }
    for(let j=0; j<2*(n-i) - 1; j++){
        newLine += "*";
    }  
    for(let j=0; j<i; j++){
              newLine += " ";
    }  
     
      console.log(newLine)
}
