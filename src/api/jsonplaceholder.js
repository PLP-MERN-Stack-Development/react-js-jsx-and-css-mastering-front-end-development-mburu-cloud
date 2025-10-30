export async function fetchPosts(page = 1, limit = 10, search = '') {
  let url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
  if (search) url += `&q=${encodeURIComponent(search)}`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Failed to fetch posts');
  const data = await response.json();
  // JSONPlaceholder does not provide total count in standard headers
  // So we'll just return the page data
  return data;
}
