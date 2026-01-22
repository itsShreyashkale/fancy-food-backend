const res = await fetch("http://localhost:5001/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    email: "shrey@test.com",
    password: "123456",
  }),
})

const data = await res.json()
console.log(data)
