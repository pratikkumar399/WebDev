import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Practiceoption = ({ title, description, imageUrl, link }) => {
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageLoaded(true);
        img.onerror = () => setImageLoaded(false);
        img.src = imageUrl;
    }, [imageUrl]);

    return (
        <div className="bg-white rounded-lg shadow-md">
            <Link to={link}>
                {imageLoaded ? (
                    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
                ) : (
                    <div className="w-full h-40 bg-gray-200 rounded-t-lg" />
                )}
            </Link>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="mt-4">
                    <Link to={link} className="text-blue-600 font-medium hover:text-blue-800">
                        Click here to Practice
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Practiceoption;
