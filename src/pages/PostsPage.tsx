import { useEffect, useState } from 'react';
import { fetchPosts } from '../api/posts';
import { Link } from 'react-router-dom';

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts().then(setPosts);
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">게시글 목록</h1>
      {posts.map((post: any) => (
        <div key={post.id} className="border-b py-2">
          <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
            {post.title}
          </Link>
        </div>
      ))}
      <Link to="/posts/create" className="mt-4 inline-block text-green-600 hover:underline">
        ➕ 새 게시글 작성
      </Link>
    </div>
  );
}

export default PostsPage;