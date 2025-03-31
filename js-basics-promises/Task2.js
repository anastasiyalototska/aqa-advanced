import fetch from 'node-fetch';

function fetchTodo() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(todo => resolve(todo))
        .catch(error => reject(error));
    });
  }
  
  function fetchUser() {
    return new Promise((resolve, reject) => {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(user => resolve(user))
        .catch(error => reject(error));
    });
  }

const allResults = Promise.all([fetchTodo(), fetchUser()]);
allResults
  .then(([todo, user]) => {
    console.log('All Results (Promise.all):');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch(error => {
    console.log('Error with Promise.all:', error);
  });

const raceResult = Promise.race([fetchTodo(), fetchUser()]);
raceResult
  .then(result => {
    console.log('First Result (Promise.race):', result);
  })
  .catch(error => {
    console.log('Error with Promise.race:', error);
  });