// No client-side functionality, so 'use client' is not needed
import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  className?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width, 
  height, 
  text = 'Project Image', 
  className = '' 
}) => {
  // Generate a unique-ish color based on the text
  const getColor = (text: string) => {
    let hash = 0;
    for (let i = 0; i < text.length; i++) {
      hash = text.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const hue = hash % 360;
    return `hsl(${hue}, 60%, 30%)`;
  };

  const backgroundColor = getColor(text);
  
  return (
    <div 
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ 
        width: '100%', 
        height: 'auto',
        aspectRatio: `${width} / ${height}`,
        backgroundColor 
      }}
    >
      <span className="text-white text-lg font-medium">{text}</span>
    </div>
  );
};

export default PlaceholderImage;