console.log("Hello World");
const a=2;
let b=3;
console.log(a);
console.log(b);
let firstname="Abhay";
let age=20;
console.log(`This person name is ${firstname}, age ${age}`);
let isMad=false;
if(isMad){
    console.log("He is mad");
}
else{
    console.log("He is not mad")
}
let sum=0;
for(let i=0;i<=1000;i++){
    sum+=i;
}
console.log(sum);
let personArray = ["Abhay", "Hena"];
console.log(personArray[1]);

let num=[0,1,2,3,4,5,6];
for(let i=0;i<num.length;i++){
    if(num[i]%2==0){
        console.log(num[i]);
    }
}