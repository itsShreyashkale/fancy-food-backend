const TOKEN = "PASTE_TOKEN_HERE"

const res = await fetch("http://localhost:5001/api/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${TOKEN}`,
  },
  body: JSON.stringify({
    items: [
      {
        productId: "000000000000000000000000",
        name: "Auth Pizza",
        price: 120,
        quantity: 1,
        image: "test.jpg"
      }
    ],
    address: {
      name: "Shreyash",
      phone: "9999999999",
      address: "MG Road",
      city: "Pune",
      pincode: "411001"
    },
    subtotal: 120,
    tax: 12,
    deliveryFee: 40,
    total: 172
  })
})

console.log(await res.json())
