import React from 'react';

interface CardProps {
  title: string;
  content?: string;
  tags: string[];
  date: string;
  icon: React.ReactNode;
  type: 'text' | 'youtube' | 'tweet' | 'drive';
  link?: string; 
}

const Card: React.FC<CardProps> = ({ title, content, tags, date, icon, type, link }) => {
  return (
    <div className="bg-slate-100 rounded-lg shadow-sm hover:shadow-md transition-shadow p-5 relative group">
      {/* Card Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="text-purple-500">{icon}</span>
          <h3 className="font-medium text-slate-900">{title}</h3>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="mb-4">
        {type === 'text' && content && <p className="text-slate-500 text-sm">{content}</p>}

        {type === 'youtube' && link && (
          <iframe
            className="w-full rounded-md"
            height="200"
            src={`https://www.youtube.com/embed/${getYouTubeID(link)}`}
            allowFullScreen
          ></iframe>
        )}

        {type === 'tweet' && link && (
          <blockquote className="twitter-tweet">
            <a href={link.replace("x.com" , "twitter.com")} target="_blank" rel="noopener noreferrer">View Tweet</a>
          </blockquote>
        )}

        {type === 'drive' && link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            Open Google Drive File
          </a>
        )}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-3">
        {tags.map((tag, index) => (
          <span key={index} className="text-xs bg-purple-300 text-purple-500 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>

      {/* Date */}
      <div className="text-xs text-slate-500 mt-2">Added on {date}</div>
    </div>
  );
};

// Extract YouTube ID from URL
const getYouTubeID = (url: string) => {
  const match = url.match(/(?:youtube\.com\/(?:[^/]+\/[^/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/);
  return match ? match[1] : '';
};

export default Card;
