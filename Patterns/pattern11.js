let n = 5;

for(let i = 1; i <= n; i++) {
    let start;
    let newLine = "";
    if(i%2==0){
        start = 0;
    }else{
        start = 1;
    }

    for (let j=0; j<i; j++) {
        newLine += start;

        if(start == 0){
            start = 1
        }else{
            start = 0
        }
        
    }
    console.log(newLine);
}