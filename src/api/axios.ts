import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000', // NestJS 백엔드 주소
  headers: {
    'Content-Type': 'application/json',
  },
});