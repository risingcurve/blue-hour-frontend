import axios from 'axios';

const API_URL = 'http://localhost:3000/posts';

export const fetchPosts = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const fetchPost = async (id: number) => {
  const res = await axios.get(`${API_URL}/${id}`);
  return res.data;
};

export const createPost = async (data: { title: string; content: string }, token: string) => {
  const res = await axios.post(API_URL, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};