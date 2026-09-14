const API_BASE_URL = window.location.hostname === 'localhost' 
  ? 'http://localhost:5001' 
  : 'https://fitness-sbu2.onrender.com';

export default API_BASE_URL;