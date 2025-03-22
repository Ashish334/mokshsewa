import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  onClick: () => void;
}

export default function ServiceCard({ title, description, Icon, onClick }: ServiceCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-lg transition-all hover:shadow-xl hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 text-blue-600 font-medium hover:text-blue-800 flex items-center">
        Learn More <span className="ml-1">→</span>
      </button>
    </div>
  );
}