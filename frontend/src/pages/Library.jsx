import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { FileText, Video, Archive, Droplets, Mic, Download } from 'lucide-react';
import { libraryResources } from '../data/mockData';

const Library = () => {
  const iconMap = {
    FileText,
    Video,
    Archive,
    Droplets,
    Mic
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/85 to-purple-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Library Hub
          </h1>
          <p className="text-xl text-indigo-100">
            Knowledge and resources for a sustainable future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Empowering Through Knowledge</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our Library Hub provides access to learning materials, digital resources, and workshop recordings that empower community members with the knowledge and skills needed to protect our environment and build sustainable livelihoods.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-gradient-to-b from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Available Resources</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our collection of educational materials and recordings
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {libraryResources.map((resource, index) => {
              const Icon = iconMap[resource.icon];
              const colors = [
                { bg: 'bg-indigo-100', icon: 'text-indigo-600', border: 'border-indigo-600', hover: 'group-hover:bg-indigo-600' },
                { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-600', hover: 'group-hover:bg-purple-600' },
                { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-600', hover: 'group-hover:bg-blue-600' },
                { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-600', hover: 'group-hover:bg-teal-600' },
                { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-600', hover: 'group-hover:bg-green-600' },
                { bg: 'bg-pink-100', icon: 'text-pink-600', border: 'border-pink-600', hover: 'group-hover:bg-pink-600' },
              ];
              const color = colors[index % colors.length];

              return (
                <Card key={resource.id} className={`group hover:shadow-2xl transition-all duration-300 border-t-4 ${color.border} cursor-pointer`}>
                  <CardHeader>
                    <div className={`${color.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${color.hover} transition-colors`}>
                      <Icon className={`h-8 w-8 ${color.icon} group-hover:text-white transition-colors`} />
                    </div>
                    <CardTitle className="text-xl">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm font-medium text-gray-500 mb-3">{resource.type}</p>
                    <p className="text-gray-600 leading-relaxed mb-4">{resource.description}</p>
                    <button className="flex items-center gap-2 text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                      <Download className="h-4 w-4" />
                      Access Resource
                    </button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Resource Categories</h2>
            <div className="w-24 h-1 bg-indigo-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Agriculture</h3>
              <p className="text-sm text-gray-700">Sustainable farming guides</p>
            </div>

            <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">💧</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Conservation</h3>
              <p className="text-sm text-gray-700">Environmental protection</p>
            </div>

            <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Leadership</h3>
              <p className="text-sm text-gray-700">Youth development programs</p>
            </div>

            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">🏛️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Heritage</h3>
              <p className="text-sm text-gray-700">Cultural preservation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Request Additional Resources
          </h2>
          <p className="text-xl text-indigo-100 mb-8 leading-relaxed">
            Looking for specific information or materials? Let us know what resources would be most helpful for your learning and development.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Library;
