'use client'
import { useState } from 'react';

interface AuthenticationProps {
  onAuthenticated: () => void; // Función para llamar a ReadPosts una vez autenticado
}

const Authentication = ({ onAuthenticated }: AuthenticationProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Por favor, ingrese un nombre de usuario y contraseña.');
      return;
    }

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      const user = data.find((user: any) => user.username === username && user.username === password);

      if (user) {
        onAuthenticated();
      } else {
        setError('Nombre de usuario o contraseña incorrectos.');
      }
    } catch (error) {
      console.error('Error al autenticar:', error);
      setError('Error al autenticar. Por favor, inténtelo de nuevo más tarde.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Inicio de sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          className="block w-full border border-gray-300 rounded-md shadow-sm text-sm p-2 mb-4 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          type="text"
          placeholder="Nombre de usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="block w-full border border-gray-300 rounded-md shadow-sm text-sm p-2 mb-4 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default Authentication;
