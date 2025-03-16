// This is a Server Component - we can use async/await here directly
import React from 'react';
import ProjectCard from '@/components/custom/ProjectCard';

interface Project {
    title: string;
    description: string;
    tags: string[];
    link: string;
    imageUrl?: string; // Make it optional with the question mark
}

// Server-side data fetching function
async function getProjects(): Promise<Project[]> {
    // In a real app, this would fetch from a database or API
    // For now, we'll return static sample data
    return [
        {
            title: "School Merchandise Shops",
            description: "Custom webshops for schools featuring their logos on various merchandise items. Schools submit their logo, and we create a complete online store with t-shirts, hoodies, bags, and more - all customized with their design through Printful's print-on-demand service.",
            tags: ["E-Commerce", "Print-on-Demand", "Wix", "Printful"],
            link: "#"
        },
        {
            title: "Company Blog & Shop",
            description: "A combined blog and e-commerce platform for our own brand. Features articles about web development and e-commerce alongside our selection of products. Built with Squarespace for easy content management.",
            tags: ["Blog", "E-Commerce", "Squarespace", "Content Marketing"],
            link: "#"
        },
        {
            title: "Local Bakery Website",
            description: "Website redesign for a traditional bakery, featuring their product catalog, location information, and contact details. Includes online ordering functionality and integration with local delivery services.",
            tags: ["Website Redesign", "Local Business", "E-Commerce"],
            link: "#"
        },
        {
            title: "Fitness Trainer Portfolio",
            description: "Professional portfolio website for a fitness trainer, showcasing their services, testimonials, and booking system. Features responsive design and integration with scheduling software.",
            tags: ["Portfolio", "Booking System", "Responsive Design"],
            link: "#"
        },
        {
            title: "Online Art Gallery",
            description: "E-commerce platform for an artist to sell their artwork online. Includes high-quality image galleries, secure payment processing, and shipping integration.",
            tags: ["E-Commerce", "Art", "Payment Processing"],
            link: "#"
        },
        {
            title: "Non-Profit Organization Website",
            description: "Informational website for a local non-profit with donation capabilities, event calendar, and volunteer signup forms. Built with accessibility in mind.",
            tags: ["Non-Profit", "Donations", "Accessibility"],
            link: "#"
        }
    ];
}

export default async function Projects() {
    // Fetch projects data
    const projects = await getProjects();

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="py-16 bg-slate-900">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-6 text-center">Our Projects</h1>
                    <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto">
                        Explore our portfolio of custom e-commerce solutions and website development projects
                    </p>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 bg-slate-800/50">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Have a Project in Mind?</h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        Let's discuss how we can help bring your ideas to life with our e-commerce and web development expertise.
                    </p>
                    <a href="mailto:contact@yourcompany.com" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                        Contact Us
                    </a>
                </div>
            </section>
        </div>
    );
}