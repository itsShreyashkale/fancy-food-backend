

const res = await fetch("http://localhost:5001/api/orders", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    items: [
      {
        productId: "000000000000000000000000",
        name: "Test Pizza",
        price: 100,
        quantity: 1,
        image: "test.jpg"
      }
    ],
    address: {
      name: "Test",
      phone: "9999999999",
      address: "Test Street",
      city: "Test City",
      pincode: "123456"
    },
    subtotal: 100,
    tax: 10,
    deliveryFee: 40,
    total: 150
  })
})

console.log(await res.json())
