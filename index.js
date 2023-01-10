let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

function lucky_seven(arr){
    if(arr.length<3){
        return "false";
    }
    for(let i=0;i<arr.length-2;i++){
        let first=arr[i];
        if(parseInt(first)+parseInt(arr[i+1])+parseInt(arr[i+2])===7){
           return "true";
        }
    }
    return "false";
}

let arr=readLine().split(" ").map(Number);
console.log(lucky_seven(arr));
