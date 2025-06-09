import { useState } from 'react';
import axios from 'axios';

export default function RegisterPage() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    nickname: '',
  });
  const [message, setMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/auth/register', form);
      const token = response.data.access_token;
      localStorage.setItem('token', token); // 토큰 저장
      setMessage('회원가입 성공! 로그인되었습니다.');
    } catch (err: any) {
      setMessage(err.response?.data?.message || '회원가입 실패');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded shadow">
      <h2 className="text-2xl font-bold mb-4">회원가입</h2>
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="이메일"
          value={form.email}
          onChange={onChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={form.password}
          onChange={onChange}
          className="border p-2 rounded"
          required
        />
        <input
          type="text"
          name="nickname"
          placeholder="닉네임"
          value={form.nickname}
          onChange={onChange}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          회원가입
        </button>
        {message && <p className="text-sm text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}
