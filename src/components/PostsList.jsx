import React, { useState, useEffect } from 'react';
import { fetchPosts } from '../api/jsonplaceholder';

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchPosts(page, 6, search)
      .then(setPosts)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [page, search]);

  return (
    <div>
      <h2 className="text-2xl font-extrabold mb-8 text-center text-green-700 dark:text-green-200 tracking-tight">API Data (Posts)</h2>
      <div className="flex gap-2 mb-6 justify-center">
        <input
          className="border rounded-l px-4 py-2 flex-grow max-w-sm bg-white dark:bg-gray-800 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-sm"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          autoFocus
          placeholder="Filter posts by title..."
        />
        <button className="bg-green-600 text-white px-4 py-2 rounded-r hover:bg-green-700 transition" onClick={() => setPage(1)}>
          Search
        </button>
      </div>
      {loading && (
        <div className="py-12 flex flex-col items-center justify-center">
          <span className="text-4xl animate-spin mb-2">🌀</span>
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      {error && <p className="text-red-500 text-center py-8">{error}</p>}
      {!loading && posts.length === 0 && (
        <div className="flex flex-col gap-2 items-center py-16 text-gray-400 select-none">
          <span className="text-5xl">🔍</span>
          <span>No posts match your query.</span>
        </div>
      )}
      <ul className="grid md:grid-cols-2 gap-4">
        {posts.map(post => (
          <li key={post.id} className="border-l-4 border-green-500 dark:border-green-600 bg-green-50 dark:bg-gray-700 p-5 rounded-lg shadow group hover:bg-green-100 dark:hover:bg-green-800 transition-all animate-fade-in">
            <div className="font-bold text-lg mb-1 text-green-900 dark:text-green-200 ">{post.title}</div>
            <div className="text-gray-700 dark:text-gray-300 text-sm">{post.body}</div>
          </li>
        ))}
      </ul>
      <div className="flex gap-2 mt-8 justify-center">
        <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-md disabled:opacity-50" aria-label="Previous Page">Prev</button>
        <button onClick={() => setPage(p => p + 1)} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-md" aria-label="Next Page">Next</button>
      </div>
    </div>
  );
}
