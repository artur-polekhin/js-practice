function getToDo(index) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${index}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

function getUser(index) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${index}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

const getToDo_1 = getToDo(1);
const getUser_1 = getUser(1);


const resultPromiseAll = Promise.all([getToDo_1, getUser_1]);
const resultPromiseRace = Promise.race([getToDo_1, getUser_1]);

