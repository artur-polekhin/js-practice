async function getToDo(index) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${index}`);
    const json = await response.json();
    return json;
}

async function getUser(index) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
    const json = await response.json();
    return json;
}