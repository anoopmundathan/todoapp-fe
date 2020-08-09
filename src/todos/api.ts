
const apiUrl = process.env.API_URL || 'http://localhost:8000/api'

// GET /todos
export const getAllTodos = () => {
  return fetch(`${apiUrl}/todos`)
    .then(response => response.json())
    .then(data => data);
}

// POST /todos
export const addNewTodo = (newTodo: string) => {
  return fetch(`${apiUrl}/todos`, { 
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ name: newTodo })
  })
  .then(data => data.json())
}
