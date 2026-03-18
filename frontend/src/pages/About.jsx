import React from 'react';
import { AlertTriangle, TrendingDown, Users as UsersIcon, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/85 to-blue-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            About Pearl of Prespa
          </h1>
          <p className="text-xl text-green-100">
            Understanding the challenges and our vision for a sustainable future
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">A Region of Natural Beauty and Complex Challenges</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Prespa region, shared by North Macedonia, Albania, and Greece, encompasses the ancient Great and Small Prespa Lakes, majestic Baba and Galichica mountains, rich woodlands, and vital wetlands. Yet, in past decades it faces serious socio-economic challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Challenges We Face</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding these challenges is the first step toward creating meaningful solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-t-4 border-red-500 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-red-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <AlertTriangle className="h-7 w-7 text-red-600" />
                </div>
                <CardTitle className="text-xl">Environmental Degradation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Unsustainable agriculture with extensive pesticide use degrades soil quality, pollutes water springs, and harms local biodiversity. The lake's water level is threatened by increased extraction for irrigation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-orange-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <TrendingDown className="h-7 w-7 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Economic Decline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  High unemployment and limited economic opportunities force residents to seek livelihoods elsewhere, threatening the viability of traditional farming and local businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-amber-500 hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="bg-amber-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  <UsersIcon className="h-7 w-7 text-amber-600" />
                </div>
                <CardTitle className="text-xl">Youth Migration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  Aging population and significant youth immigration threaten community resilience and cultural heritage. The departure of young generations leaves villages empty and endangers the region's legacy.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Aim to Do</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?w=800&h=600&fit=crop"
                alt="Youth engagement"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <Card className="border-none shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
                <CardHeader>
                  <div className="bg-green-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-gray-900">Our Challenge</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    The challenge we aim to tackle is to <strong>raise the awareness of youth</strong> about the environmental degradation around Prespa Lake and to <strong>restore their sense of belonging</strong> to the homeland.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    By promoting eco-friendly apple cultivation and raising community awareness about preserving the lake's fragile ecosystem, we aim to empower the community to protect their environment and build a <strong>greener and economically prosperous future</strong> at home.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Youth Matter */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Youth Matter</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=600&fit=crop"
                  alt="Young people"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Youth represent the <strong className="text-green-700">future of the Prespa region</strong>. Many young people are leaving due to limited opportunities, which threatens the vitality of local communities and the preservation of cultural and environmental heritage.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  By engaging youth through education, sustainable farming, creative activities, and environmental action, we aim to empower them with <strong className="text-blue-700">skills, knowledge, and a sense of belonging</strong>.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Their involvement can bring <strong className="text-green-700">new energy, innovation, and responsibility</strong> to protecting Lake Prespa and revitalizing the local economy, helping ensure a sustainable future for the region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Diversity */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">A Region of Diversity</h2>
            <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
            <p className="text-xl leading-relaxed text-center">
              The region's diverse ethnic communities—<strong>Macedonians, Greeks, Albanians, Turks</strong>—live and work together to ensure livelihood and to preserve their traditions. This rich cultural tapestry is one of Prespa's greatest strengths, and together we can build a future that honors all our heritages while protecting the natural world we share.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
