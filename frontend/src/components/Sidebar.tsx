import React from 'react';
import { SidebarItem } from './SidebarItem';
import { DocumentTextIcon, VideoCameraIcon, LinkIcon, HashtagIcon } from '@heroicons/react/24/outline';

interface SidebarProps {
  activePage?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage = 'notes' }) => {
  return (
    <div className="w-64 bg-white rounded-lg shadow-sm p-5 h-screen">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <svg className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5 12.5C4.5 8.91015 7.41015 6 11 6C14.5899 6 17.5 8.91015 17.5 12.5C17.5 16.0899 14.5899 19 11 19C7.41015 19 4.5 16.0899 4.5 12.5Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M15 9.5C15 7.84315 16.3431 6.5 18 6.5C19.6569 6.5 21 7.84315 21 9.5C21 11.1569 19.6569 12.5 18 12.5C16.3431 12.5 15 11.1569 15 9.5Z" stroke="currentColor" strokeWidth="2"/>
        </svg>
        <h1 className="text-slate-900 font-semibold text-xl">MindVault</h1>
      </div>
      
      {/* Navigation Items */}
      <nav className="space-y-1">
        <SidebarItem 
          icon={<DocumentTextIcon />} 
          label="Notes" 
          isActive={activePage === 'notes'} 
        />
        <SidebarItem 
          icon={<VideoCameraIcon />} 
          label="Videos" 
          isActive={activePage === 'videos'} 
        />
        <SidebarItem 
          icon={<DocumentTextIcon />} 
          label="Documents" 
          isActive={activePage === 'documents'} 
        />
        <SidebarItem 
          icon={<LinkIcon />} 
          label="Links" 
          isActive={activePage === 'links'} 
        />
        <SidebarItem 
          icon={<HashtagIcon />} 
          label="Tags" 
          isActive={activePage === 'tags'} 
        />
      </nav>
    </div>
  );
};

export default Sidebar;
