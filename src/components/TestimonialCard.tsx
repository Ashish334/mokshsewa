import React from 'react';

interface TestimonialCardProps {
  name: string;
  text: string;
  image: string;
}

export default function TestimonialCard({ name, text, image }: TestimonialCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="ml-4">
          <h4 className="font-semibold">{name}</h4>
        </div>
      </div>
      <p className="text-gray-600 italic">{text}</p>
    </div>
  );
}