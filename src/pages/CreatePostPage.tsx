import { useState } from 'react';
import { createPost } from '../api/posts';
import { useNavigate } from 'react-router-dom';

function CreatePostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    if (!token) return alert('로그인이 필요합니다');

    try {
      await createPost({ title, content }, token);
      navigate('/posts');
    } catch (err) {
      alert('게시글 작성 실패');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">새 게시글 작성</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full"
        />
        <textarea
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 w-full h-40"
        />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
          작성하기
        </button>
      </form>
    </div>
  );
}

export default CreatePostPage;