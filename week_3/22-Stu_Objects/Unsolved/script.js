//WRITE YOUR CODE BELOW
var customerOrder = {
name: "coffee",
sugars: 3,
order:true
}

console.log(customerOrder.name);
console.log(customerOrder.sugars);

if (customerOrder[2]){
    console.log("ready for pick up");
}else {
    console.log("Still in queue")
}