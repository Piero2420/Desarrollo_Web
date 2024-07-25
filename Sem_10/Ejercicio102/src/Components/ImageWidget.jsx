/* eslint-disable no-unused-vars */
import React from 'react'
import useRandomImage from './useRandomImage'
import './ImageWidget.css';

const images = [
    '/src/assets/imagen1.jpg',
    '/src/assets/imagen2.jpg',
    '/src/assets/imagen3.jpg',
    '/src/assets/imagen4.jpg',
    '/src/assets/imagen5.jpg',
]

const ImageWidget = () => {
    const currentImage = useRandomImage(images)

    return (
        <div className="image-widget">
            <img src={currentImage} alt="Imágenes" />
        </div>
    )
}

export default ImageWidget