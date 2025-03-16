// This is a Server Component - we can use async/await here
import React from 'react';
import HomeHero from '@/components/custom/HomeHero';
import ServiceCard from '@/components/custom/ServiceCard';
import ShopPreview from '@/components/custom/ShopPreview';
import ProjectsPreview from '@/components/custom/ProjectsPreview';

// Example of how to fetch data in a server component
async function getServicesData() {
  // This would typically fetch from an API or database
  // For now, we'll use static data
  return [
    {
      title: "E-Commerce Solutions",
      description: "Custom online shops built with Wix, Squarespace and integrated with Printful for print-on-demand products.",
      icon: "shopping-bag",
    },
    {
      title: "Website Development",
      description: "Professional websites with responsive design, SEO optimization, and content management systems.",
      icon: "monitor",
    },
    {
      title: "IT Services",
      description: "Website maintenance, content updates, and technical support to keep your online presence running smoothly.",
      icon: "settings",
    }
  ];
}

async function getFeaturedProjects() {
  // This would typically fetch from an API or database
  return [
    {
      title: "School Merchandise Shops",
      description: "Custom webshops for schools featuring their logos on various merchandise items through print-on-demand services.",
      imageUrl: "/api/placeholder/800/600",
      tags: ["E-Commerce", "Print-on-Demand", "Wix", "Printful"],
      link: "/projects"
    },
    {
      title: "Company Blog & Shop",
      description: "Combined blog and e-commerce platform showcasing our products and services with integrated payment solutions.",
      imageUrl: "/api/placeholder/800/600",
      tags: ["Blog", "E-Commerce", "Squarespace"],
      link: "/projects"
    }
  ];
}

export default async function Home() {
  // Fetch data in parallel using Promise.all
  const [services, featuredProjects] = await Promise.all([
    getServicesData(),
    getFeaturedProjects()
  ]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HomeHero 
        title="Creating Digital Solutions for Your Business"
        subtitle="E-commerce development, IT services, and custom web solutions tailored to your needs"
        primaryButtonText="View Our Projects"
        primaryButtonLink="/projects"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />

      {/* Services Section */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Shop Preview Section */}
      <ShopPreview 
        title="Shop Preview"
        subtitle="Explore our upcoming online store featuring custom products and merchandise."
      />

      {/* Featured Projects */}
      <ProjectsPreview 
        title="Featured Projects"
        subtitle="Take a look at some of our recent work"
        projects={featuredProjects}
      />
    </div>
  );
}