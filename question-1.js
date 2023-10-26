// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity += 100 ;
const orange =  {price: 20, quantity: 300};
inventory["orange"] = orange; 
let totalvalue = 0;
for (let item in inventory){
  totalvalue = totalvalue + (inventory[item].quantity * inventory[item].price)
};
console.log("Total inventory value: " + totalvalue + " baht");
