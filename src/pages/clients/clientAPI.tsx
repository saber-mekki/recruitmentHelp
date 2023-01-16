import axios from 'axios';

const clientAPI = {
  getClients: (search: string, page: number, perPage: number) => {
    return axios.get(`https://api.example.com/clients`, {
      params: {
        search,
        page,
        perPage
        
      }
    })
    .then((response) => response.data)
    .catch((error) => {
        throw error;
    });
  },
  getClient: (id: number) => {
    return axios.get(`https://api.example.com/clients/${id}`)
    .then((response) => response.data)
    .catch((error) => {
        throw error;
    });
  },
  createClient: (client: object) => {
    return axios.post(`https://api.example.com/clients`, client)
    .then((response) => response.data)
    .catch((error) => {
        throw error;
    });
  },
  updateClient: (id: number, client: object) => {
    return axios.put(`https://api.example.com/clients/${id}, client`) 
    .then((response) => response.data) .catch((error) => { throw error; }); }, deleteClient: (id: number) => { return axios.delete(`https://api.example.com/clients/${id}`)
    .then((response) => response.data)
    .catch((error) => {
    throw error;
    });
    }
    };
    
    export { clientAPI };
