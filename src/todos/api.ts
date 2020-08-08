const apiUrl = process.env.API_URL || 'http://localhost:8000/api'

// GET /todos
export const getAllTodos = () => {
  return fetch(`${apiUrl}/todos`)
    .then(response => response.json())
    .then(data => data);
}
