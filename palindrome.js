
let str = "nrupul";
let N=6;

let store1 = '';

    let store2 = '';
    
    for(let x=0; x<str.length; x++){
        store1 = store1 + str[x]
    }
    for(let y=N; y>=0; y--){
        store2 = store2 + str[x]
    }
    
    if(store1 == store2){
        console.log('Yes');
        
    }else{
        console.log('No');
    }