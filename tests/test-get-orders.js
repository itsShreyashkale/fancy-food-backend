const TOKEN = "PASTE_TOKEN_HERE"

const res = await fetch("http://localhost:5001/api/orders", {
  headers: {
    "Authorization": `Bearer ${TOKEN}`,
  },
})

console.log(await res.json())
