'use client'
import { useState } from 'react';

const CreatePost = ({ onPostCreated }: any) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleCreate = async () => {
        const postData = {
            title: title,
            body: body,
            userId: 1
        };

        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            });
            const data = await response.json();
            console.log('Post creado:', data);
            onPostCreated(data);
            setTitle('');
            setBody('');
        } catch (error) {
            console.error('Error al crear el post:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Crear Nuevo Post</h2>
            <input
                className="block w-full border border-gray-300 rounded-md shadow-sm text-sm p-2 mb-4 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                type="text"
                placeholder="Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="block w-full border border-gray-300 rounded-md shadow-sm text-sm p-2 mb-4 focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="Cuerpo del post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 px-4 rounded focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                onClick={handleCreate}
            >
                Crear Post
            </button>
        </div>
    );
};

export default CreatePost;
