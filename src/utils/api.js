// 1. Automatically detect environment and set Base URL
const BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5001' 
  : 'https://fitness-sbu2.onrender.com'; // Tumhara Render ka live backend URL

const endpoint = '/api/submit';         // Variable name ko 'endpoint' rakha

// 2. Dono ko combine karke fetch mein use karo
fetch(`${BASE_URL}${endpoint}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));