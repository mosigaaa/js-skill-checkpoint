// Question 5: Calculating Total Price in User's Cart

function calculateTotalPrice(cartobj) {
  // เริ่มเขียนโค้ดตรงนี้
  let TotalPrice = 0;
  for (let items of cartobj){
    TotalPrice = TotalPrice + (items["price"] * items["quantity"]);
  }
  return TotalPrice;
}

// ตัวอย่างการใช้งาน

const cart = [
  { name: "apple", price: 10, quantity: 2 },
  { name: "banana", price: 15, quantity: 1 },
  { name: "orange", price: 5, quantity: 3 },
];

console.log(calculateTotalPrice(cart)); // ผลลัพธ์จากการ Execute ตัว Function จะต้องได้: 50
