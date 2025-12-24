const users = [
    {
        firstName: 'John',
        lastName: 'Smith',
        age: 30
    },
    {
        firstName: 'Konan',
        lastName: 'Varvor',
        age: 25
    },
    {
        firstName: 'Princes',
        lastName: 'leya',
        age: 19
    },
];

for (let user of users)
    console.log(user);

for (const { firstName, lastName, age } of users) {
    console.log(`${firstName} ${lastName} ${age}`);
}
