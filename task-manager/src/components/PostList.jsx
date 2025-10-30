import { useState, useEffect } from 'react';
import { fetchPosts } from '../api/fetchPosts';
import Card from './Card';
import Button from './Button';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    setLoading(true);
    fetchPosts()
      .then(data => setPosts(data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const start = (page - 1) * postsPerPage;
  const paginated = filtered.slice(start, start + postsPerPage);
  const totalPages = Math.ceil(filtered.length / postsPerPage);

  if (loading) return <p>Loading posts…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="border p-2 mb-4 w-full"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {paginated.map(post => (
          <Card key={post.id} title={post.title} content={post.body} />
        ))}
      </div>

      <div className="flex justify-center mt-4 space-x-2">
        <Button variant="secondary" onClick={() => setPage(p => Math.max(p-1,1))}>
          Prev
        </Button>
        <span className="flex items‑center px‑2">
          Page {page} of {totalPages}
        </span>
        <Button variant="secondary" onClick={() => setPage(p => Math.min(p+1, totalPages))}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default PostList;
