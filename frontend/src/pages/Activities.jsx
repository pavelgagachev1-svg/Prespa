import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { activities } from '../data/mockData';

const Activities = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-blue-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Our Activities
          </h1>
          <p className="text-xl text-green-100">
            Programs and initiatives creating real change in Prespa
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => {
              const Icon = require('lucide-react')[activity.icon];
              const colors = [
                { bg: 'bg-green-100', icon: 'text-green-600', border: 'border-green-600', hover: 'group-hover:bg-green-600' },
                { bg: 'bg-blue-100', icon: 'text-blue-600', border: 'border-blue-600', hover: 'group-hover:bg-blue-600' },
                { bg: 'bg-purple-100', icon: 'text-purple-600', border: 'border-purple-600', hover: 'group-hover:bg-purple-600' },
                { bg: 'bg-teal-100', icon: 'text-teal-600', border: 'border-teal-600', hover: 'group-hover:bg-teal-600' },
                { bg: 'bg-amber-100', icon: 'text-amber-600', border: 'border-amber-600', hover: 'group-hover:bg-amber-600' },
              ];
              const color = colors[index % colors.length];

              return (
                <Card key={activity.id} className={`group hover:shadow-2xl transition-all duration-300 border-l-4 ${color.border}`}>
                  <CardHeader>
                    <div className={`${color.bg} w-16 h-16 rounded-lg flex items-center justify-center mb-4 ${color.hover} transition-colors`}>
                      <Icon className={`h-8 w-8 ${color.icon} group-hover:text-white transition-colors`} />
                    </div>
                    <CardTitle className="text-2xl">{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed text-lg">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Activity Highlights</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
                alt="Workshop"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Hands-On Workshops</h3>
                  <p className="text-green-100">Practical training in sustainable methods</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop"
                alt="Community gathering"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Community Events</h3>
                  <p className="text-blue-100">Bringing people together for shared goals</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop"
                alt="Lake conservation"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Conservation Action</h3>
                  <p className="text-teal-100">Direct impact on lake and ecosystem health</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-gradient-to-b from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact So Far</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">250+</div>
              <div className="text-xl text-green-100">Youth Engaged</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">45</div>
              <div className="text-xl text-green-100">Workshops Held</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">120</div>
              <div className="text-xl text-green-100">Farmers Trained</div>
            </div>
            <div className="text-center text-white">
              <div className="text-5xl font-bold mb-2">15ha</div>
              <div className="text-xl text-green-100">Organic Orchards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
