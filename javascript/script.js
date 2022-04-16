
response.addEventListener('click',sumA);
var sum;
function sumUp(){
let sum=[...document.querySelectorAll('input[type=radio]:checked')]
.reduce(
(acc,val)=> acc + Number(val.value),0)
result.textContent=sum;
alert(sum+"/90");
return sum;
}
function sumA(){
sum=sumUp();
}
