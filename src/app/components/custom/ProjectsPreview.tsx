// No client-side features used, so no 'use client' directive needed
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/custom/ProjectCard';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  link?: string;
}

interface ProjectsPreviewProps {
  title: string;
  subtitle: string;
  projects: Project[];
}

const ProjectsPreview: React.FC<ProjectsPreviewProps> = ({ title, subtitle, projects }) => {
  return (
    <section className="py-16 bg-slate-800/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">{title}</h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          {subtitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              link={project.link}
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;