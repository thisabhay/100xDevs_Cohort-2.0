function calculationArithmatic(a,b,typeoperation){
    const val=typeoperation(a,b);
    return val;
}
function sum(a,b){
    return a+b;
}
const val=calculationArithmatic(2,3,sum);
console.log(val);