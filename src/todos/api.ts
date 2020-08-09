
const apiUrl = process.env.API_URL || 'http://localhost:8000/api'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

// GET /todos
export const getAllTodosApi = () => {
  return fetch(`${apiUrl}/todos`)
    .then(response => response.json())
    .then(data => data);
}

// POST /todos
export const addNewTodoApi = (newTodo: string) => {
  return fetch(`${apiUrl}/todos`, { 
    method: 'POST',
    headers: {...headers},
    body: JSON.stringify({ name: newTodo })
  })
  .then(data => data.json())
}

// PUT /todos/:id
export const updateTodoApi = (id: number) => {
  return fetch(`${apiUrl}/todos/${id}`, {
    method: 'PUT',
    headers: {...headers}
  })
    .then(response => response.json())
    .then(data => data);
}