import React, { useState, useEffect } from 'react';

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
            <a href={link}>
                {imageLoaded ? (
                    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
                ) : (
                    <div className="w-full h-40 bg-gray-200 rounded-t-lg" />
                )}
            </a>
            <div className="p-4">
                <h2 className="text-lg font-bold mb-2">{title}</h2>
                <p className="text-sm text-gray-600">{description}</p>
                <div className="mt-4">
                    <a href={link} className="text-blue-600 font-medium hover:text-blue-800">
                        Learn More
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Practiceoption;
