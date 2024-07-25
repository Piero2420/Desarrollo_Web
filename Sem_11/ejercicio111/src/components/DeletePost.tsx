'use client'
import { useState } from 'react';

const DeletePost = ({ postId, onDelete }: any) => {

    const handleDelete = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
                method: 'DELETE'
            });
            const data = await response.json();
            console.log('Post eliminado:', data);
            onDelete(postId);
        } catch (error) {
            console.error('Error al eliminar el post:', error);
        }
    };

    return (
        <div>
            <a
                className="cursor-pointer text-red-600 hover:text-red-400"
                onClick={handleDelete}
            >
                Eliminar Post
            </a>
        </div>
    );
};

export default DeletePost;
