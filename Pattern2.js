let n = 5;
let s = '';
for(let line = 1;line<=n;line++){
    let stars = line;
    let spaces = n - line;
    for(j = 1;j<=spaces;j++){
        s += " "
    }
    for(let j = 1; j<=stars;j++){
        s += "*"
    }
    s += "\n"
}
console.log(s);