import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchPost } from '../api/posts';

function PostDetailPage() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    if (id) fetchPost(parseInt(id)).then(setPost);
  }, [id]);

  if (!post) return <div>로딩 중...</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default PostDetailPage;