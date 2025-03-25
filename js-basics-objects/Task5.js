const users = [
    { name: "John Doe", email: 'john.doe@gmail.com', age: 29 },
    { name: "Jane Doe", email: 'jane.doe@gmail.com', age: 31 }
]

for (const {name, age, email} of users) {
    console.log(`${name}, ${age}, ${email}`);
  }

for (const user of users) {
    console.log(`${user.name}, ${user.age}, ${user.email}`);
  }
