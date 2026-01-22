const res = await fetch("http://localhost:5001/api/auth/register", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Shreyash",
    email: "shrey@test.com",
    password: "123456",
  }),
})

console.log(await res.json())
