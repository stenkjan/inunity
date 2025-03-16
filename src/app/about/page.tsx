import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-slate-900">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-xl text-center text-gray-300 mb-8 max-w-3xl mx-auto">
            Creating innovative e-commerce solutions and IT services
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2025, our company began with a simple vision: to make e-commerce accessible to businesses of all sizes. What started as a small IT services operation has grown into a versatile company offering comprehensive web solutions.
                </p>
                <p>
                  Our initial focus was on creating custom websites for local businesses. As we grew, we identified a gap in the market for affordable, high-quality e-commerce solutions. This led us to develop our expertise in platforms like Wix and Squarespace, combined with print-on-demand services through Printful.
                </p>
                <p>
                  Today, we're proud to offer a range of services from custom webshops for schools and businesses to comprehensive IT support and website maintenance.
                </p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-lg overflow-hidden">
              <img 
                src="/api/placeholder/800/600" 
                alt="Our team at work" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To empower businesses with accessible, scalable e-commerce solutions that drive growth and success in the digital marketplace. We believe that every organization, regardless of size, deserves a professional online presence that effectively represents their brand and connects with their audience.
              </p>
            </div>
            <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To become the leading provider of integrated e-commerce and IT solutions in Austria, known for our innovative approach, quality service, and commitment to client success. We aim to continuously evolve our offerings to meet the changing needs of the digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Understand</h3>
              <p className="text-gray-300">
                We begin by thoroughly understanding your business, goals, and unique requirements to create a tailored solution.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Create</h3>
              <p className="text-gray-300">
                We design and develop your e-commerce solution or website with a focus on user experience, functionality, and scalability.
              </p>
            </div>
            <div className="bg-slate-800 p-6 rounded-lg shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Support</h3>
              <p className="text-gray-300">
                We provide ongoing support and maintenance to ensure your online presence continues to evolve and perform optimally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Looking to the Future</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-gray-300 mb-6">
              As we continue to grow, we're excited about expanding our services and reaching new markets. Our future plans include:
            </p>
            <ul className="text-left text-gray-300 space-y-2 mb-8">
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Developing specialized e-commerce solutions for different industry sectors</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Expanding our range of print-on-demand products and customization options</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Building partnerships with additional platform providers and service integrations</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Creating educational resources to help businesses maximize their online presence</span>
              </li>
            </ul>
            <p className="text-gray-300">
              We're committed to staying at the forefront of e-commerce and web development trends to provide our clients with the most effective solutions for their digital needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}