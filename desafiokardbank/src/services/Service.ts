import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080'
})

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
  const resposta = await api.post(url, dados)
  setDado(resposta.data)
}
