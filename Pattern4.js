let n = 7;
let stars = 1;
let spaces = Math.floor(n/2)
let s = ""
for(let line = 1;line<=n;line++){
    
    for(let j = 1;j<=spaces;j++){
        s += " "
    }
    for(let j = 1;j<=stars;j++){
        s += "*"
    }
    s += "\n"
    if(line<=Math.floor(n/2)){
        stars += 2
        spaces += -1
    }
    else{
        stars -=2
        spaces +=1
    }


    console.log(s);
}
