import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Users, Heart, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { mission, activities } from '../data/mockData';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/90 via-blue-900/80 to-green-900/90"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="mb-6 inline-block animate-fade-in">
            <img 
              src="https://customer-assets.emergentagent.com/job_regional-hub-1/artifacts/u7o58h3f_649601293_1252947783087939_7402204054617215938_n-removebg-preview.png" 
              alt="Pearl of Prespa" 
              className="h-32 w-32 mx-auto drop-shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            Pearl of Prespa
          </h1>
          <p className="text-2xl md:text-3xl text-green-100 font-light mb-8 italic">
            Preserving Nature. Empowering Youth. Reviving Prespa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50 font-semibold text-lg px-8 py-6">
              <Link to="/about">
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold text-lg px-8 py-6">
              <Link to="/contact">
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            {mission}
          </p>
        </div>
      </section>

      {/* Key Focus Areas */}
      <section className="py-20 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Focus</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building a sustainable future through community engagement and environmental stewardship
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors">
                  <Leaf className="h-8 w-8 text-green-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Environment</h3>
                <p className="text-gray-600">Protecting Lake Prespa's fragile ecosystem through sustainable practices</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600 transition-colors">
                  <Users className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Youth</h3>
                <p className="text-gray-600">Empowering young people with skills and sense of belonging</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors">
                  <Heart className="h-8 w-8 text-red-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Community</h3>
                <p className="text-gray-600">Connecting diverse ethnic communities through shared purpose</p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-none bg-white">
              <CardContent className="p-6 text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-600 transition-colors">
                  <BookOpen className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Knowledge</h3>
                <p className="text-gray-600">Sharing resources and building capacity for lasting change</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Activities Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Activities</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the programs and initiatives making a real difference in Prespa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {activities.slice(0, 3).map((activity) => {
              const Icon = require('lucide-react')[activity.icon];
              return (
                <Card key={activity.id} className="group hover:shadow-xl transition-all duration-300 border-t-4 border-green-600">
                  <CardContent className="p-6">
                    <div className="bg-green-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-600 transition-colors">
                      <Icon className="h-7 w-7 text-green-600 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{activity.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{activity.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8">
              <Link to="/activities">
                View All Activities <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1920&h=600&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-green-900/90"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Us in Protecting Prespa
          </h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Whether you're a local resident, a young person seeking purpose, or someone passionate about environmental conservation, there's a place for you in our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-green-800 hover:bg-green-50 font-semibold px-8">
              <Link to="/community">
                Explore Community Stories
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-green-800 font-semibold px-8">
              <Link to="/contact">
                Contact Us Today
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
