import React from 'react';

const ProjectPlaceholder = ({ title, type = 'default' }) => {
  const getGradientAndIcon = (type) => {
    switch (type) {
      case 'ai':
        return {
          gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          icon: '🤖',
          bgPattern: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%)'
        };
      case 'education':
        return {
          gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
          icon: '📚',
          bgPattern: 'radial-gradient(circle at 80% 20%, rgba(240, 147, 251, 0.3) 0%, transparent 50%)'
        };
      case 'scraper':
        return {
          gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
          icon: '🔧',
          bgPattern: 'radial-gradient(circle at 50% 50%, rgba(79, 172, 254, 0.3) 0%, transparent 50%)'
        };
      default:
        return {
          gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
          icon: '💻',
          bgPattern: 'radial-gradient(circle at 30% 70%, rgba(168, 237, 234, 0.3) 0%, transparent 50%)'
        };
    }
  };

  const { gradient, icon, bgPattern } = getGradientAndIcon(type);

  return (
    <div 
      className="w-full h-48 rounded-lg flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{ 
        background: gradient,
        backgroundImage: bgPattern
      }}
    >
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-lg font-semibold text-center px-4 leading-tight">
        {title}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
    </div>
  );
};

export default ProjectPlaceholder;