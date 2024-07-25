'use client'
import { useState, useEffect } from 'react';

const UpdatePost = ({ post, onUpdate, onClose }: any) => {
    const [title, setTitle] = useState(post.title);
    const [body, setBody] = useState(post.body);

    useEffect(() => {
        setTitle(post.title);
        setBody(post.body);
    }, [post]);

    const handleUpdate = async () => {
        const updatedData = {
            title: title,
            body: body,
            userId: post.userId
        };

        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedData)
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el post: ' + response.statusText);
            }
            const data = await response.json();
            console.log('Post actualizado:', data);
            onUpdate(data);
            onClose();
        } catch (error) {
            console.error('Error al actualizar el post:', error);
        }
    };

    return (
        <div>
            <input
                className="block w-full border border-gray-300 rounded-md text-sm p-2 mb-2"
                type="text"
                placeholder="Nuevo Título"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="block w-full border border-gray-300 rounded-md text-sm p-2 mb-2"
                placeholder="Nuevo Cuerpo del post"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-1 px-3 rounded"
                onClick={handleUpdate}
            >
                Actualizar Post
            </button>
        </div>
    );
};

export default UpdatePost;
