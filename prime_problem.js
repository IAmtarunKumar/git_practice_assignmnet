    let prime = true;
    let num=13;
    for(let x=2; x<num; x++){
        
        if(num % x == 1){
            
            prime = false
        }
    }
    
    if(prime == false){
        console.log("Nhi");
        
    }else{
        console.log("No");
    }