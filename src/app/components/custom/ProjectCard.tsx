'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  tags,
  link
}) => {
  return (
    <Card className="bg-slate-800 border-none shadow-xl overflow-hidden h-full flex flex-col">
      <div className="relative w-full aspect-video bg-slate-700 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-slate-700 text-blue-300 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-slate-300">
          {description}
        </CardDescription>
      </CardContent>
      {link && (
        <CardFooter>
          <Button
            variant="outline"
            className="w-full border-slate-600 hover:bg-slate-700 hover:text-white"
            onClick={() => window.open(link, '_blank')}
          >
            View Project
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default ProjectCard;