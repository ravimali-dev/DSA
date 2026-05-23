let n = 5;

for(let i=0; i<n; i++){

    let newLine = "";

     for(let j=0; j<i; j++){
              newLine += " ";
    }
    for(let j=0; j<n*2-2*i-1; j++){
        newLine += "*";
    }  
    for(let j=0; j<i; j++){
              newLine += " ";
    }  
     
      console.log(newLine)
}