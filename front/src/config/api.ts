import axios from 'axios'

const api = axios.create({
  baseURL: 'https://dsconsulta.herokuapp.com'
})

export default api
