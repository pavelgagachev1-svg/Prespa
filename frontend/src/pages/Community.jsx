import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Quote } from 'lucide-react';
import { communityStories } from '../data/mockData';

const Community = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-blue-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our Community
          </h1>
          <p className="text-xl text-green-100">
            Stories from the heart of Prespa - farmers, youth, elders, and entrepreneurs
          </p>
        </div>
      </section>

      {/* Community Stories */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Voices from Prespa</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the people who are making a difference in our region
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communityStories.map((story) => (
              <Card key={story.id} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                      <img 
                        src={story.image}
                        alt={story.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6 relative">
                      <Quote className="absolute top-4 right-4 h-12 w-12 text-green-200" />
                      <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{story.name}</h3>
                        <p className="text-green-600 font-medium mb-4">{story.role}</p>
                        <p className="text-gray-700 leading-relaxed italic text-lg">
                          "{story.quote}"
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Unites Us</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-green-100 to-green-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                Working together across ethnic and generational divides to achieve common goals
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">💚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Respect for Nature</h3>
              <p className="text-gray-600 leading-relaxed">
                A shared commitment to protecting the environment that sustains us all
              </p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-purple-100 to-purple-200 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">🌟</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Hope for Future</h3>
              <p className="text-gray-600 leading-relaxed">
                Belief that together we can build a prosperous, sustainable future for generations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Story Matters
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Are you part of the Prespa community? We'd love to hear your story and share it with others. Together, we're writing a new chapter for our region.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Community;
