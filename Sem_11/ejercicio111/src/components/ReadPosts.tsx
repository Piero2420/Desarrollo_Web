'use client'
import { useEffect, useState } from 'react';
import CreatePost from './CreatePost';
import DeletePost from './DeletePost';
import UpdatePost from './UpdatePost';
import Authentication from './Authentication';
import Modal from './Modal';

const url = 'https://jsonplaceholder.typicode.com/posts';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

const ReadPosts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [sortedPosts, setSortedPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [authenticated, setAuthenticated] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  useEffect(() => {
    if (authenticated) {
      fetchPosts();
    }
  }, [authenticated]);

  const handleAuthenticated = () => {
    setAuthenticated(true);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log('Posts obtenidos:', data);
      setPosts(data);
    } catch (error) {
      console.error('Error al obtener los posts:', error);
    }
  };

  useEffect(() => {
    let filteredPosts = posts.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortField) {
      filteredPosts.sort((a, b) => {
        const fieldA = a[sortField as keyof Post];
        const fieldB = b[sortField as keyof Post];
        if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
        if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
    }
    setSortedPosts(filteredPosts);
  }, [posts, searchTerm, sortField, sortOrder]);

  const handleDelete = (postIdToDelete: number) => {
    const updatedPosts = posts.filter(post => post.id !== postIdToDelete);
    setPosts(updatedPosts);
  };

  const handleUpdate = (updatedPost: Post) => {
    const updatedPosts = posts.map(post => (post.id === updatedPost.id ? updatedPost : post));
    setPosts(updatedPosts);
  };

  const handleSort = (field: string) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  const openModal = (post: Post) => {
    setCurrentPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentPost(null);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  if (!authenticated) {
    return <Authentication onAuthenticated={handleAuthenticated} />;
  }

  return (
    <div className="container mx-auto px-4">
      <CreatePost onPostCreated={(newPost: Post) => setPosts([...posts, newPost])} />
      <h2 className="text-2xl font-bold my-4">Listado de Posts</h2>

      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4 p-2 border border-gray-300 rounded"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border-b border-gray-300 px-3 py-2 cursor-pointer" onClick={() => handleSort('id')}>
                Id {sortField === 'id' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="border-b border-gray-300 px-3 py-2 cursor-pointer" onClick={() => handleSort('title')}>
                Título {sortField === 'title' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="border-b border-gray-300 px-3 py-2 cursor-pointer" onClick={() => handleSort('body')}>
                Contenido {sortField === 'body' && (sortOrder === 'asc' ? '↑' : '↓')}
              </th>
              <th className="border-b border-gray-300 px-3 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map(post => (
              <tr key={post.id}>
                <td className="border-b border-gray-300 px-7 py-2">{post.id}</td>
                <td className="border-b border-gray-300 px-3 py-2">{post.title}</td>
                <td className="border-b border-gray-300 px-3 py-2">{post.body}</td>
                <td className="border-b border-gray-300 px-10 py-2">
                  <a
                    className="cursor-pointer text-blue-700 hover:text-blue-400"
                    onClick={() => openModal(post)}
                  >
                    Actualizar Post
                  </a>
                  <DeletePost postId={post.id} onDelete={handleDelete} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-center">
        {Array.from({ length: Math.ceil(sortedPosts.length / postsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {currentPost !== null && (
          <UpdatePost post={currentPost} onUpdate={handleUpdate} onClose={closeModal} />
        )}
      </Modal>
    </div>
  );
};

export default ReadPosts;
