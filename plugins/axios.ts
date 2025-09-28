import axios from 'axios';

export default defineNuxtPlugin(() => {
  const api = axios.create({
    baseURL: '/api',
    timeout: 5000
  });

  return {
    provide: {
      axios: api
    }
  };
});
