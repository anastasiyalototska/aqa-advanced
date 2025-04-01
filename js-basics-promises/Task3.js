import fetch from 'node-fetch';

async function getTodo() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const todo = await response.json(); 
      return todo;
    } catch (error) {
      console.error('Error fetching todo:', error);
    }
  }
  
  async function getUser() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      const user = await response.json(); 
      return user;
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }
  

  async function fetchDataWithAll() {
    try {
      const [todo, user] = await Promise.all([getTodo(), getUser()]); 
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.error('Error in Promise.all:', error);
    }
  }
  
  async function fetchDataWithRace() {
    try {
      const result = await Promise.race([getTodo(), getUser()]); 
      console.log('First resolved:', result);
    } catch (error) {
      console.error('Error in Promise.race:', error);
    }
  }
  
  fetchDataWithAll();   
  fetchDataWithRace();