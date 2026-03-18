import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { artGallery, poems } from '../data/mockData';

const Art = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1920&h=800&fit=crop)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 to-blue-900/85"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Art & Culture
          </h1>
          <p className="text-xl text-purple-100">
            Celebrating Prespa through creative expression
          </p>
        </div>
      </section>

      {/* Art Tabs */}
      <section className="py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="gallery" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="gallery" className="text-lg">Photo Gallery</TabsTrigger>
              <TabsTrigger value="poetry" className="text-lg">Poetry</TabsTrigger>
            </TabsList>

            {/* Photo Gallery */}
            <TabsContent value="gallery" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Visual Stories of Prespa</h2>
                <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Photography and eco-art capturing the beauty and spirit of our region
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {artGallery.map((art) => (
                  <Card 
                    key={art.id} 
                    className="overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-300"
                    onClick={() => setSelectedImage(art)}
                  >
                    <CardContent className="p-0">
                      <div className="relative overflow-hidden">
                        <img 
                          src={art.image}
                          alt={art.title}
                          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 text-white w-full">
                            <p className="text-sm font-medium text-purple-200">{art.type}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{art.title}</h3>
                        <p className="text-sm text-gray-600">by {art.artist}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Poetry */}
            <TabsContent value="poetry" className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Poetry Inspired by Prespa</h2>
                <div className="w-24 h-1 bg-purple-600 mx-auto mb-8"></div>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Words that capture the essence of our homeland
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-8">
                {poems.map((poem) => (
                  <Card key={poem.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                    <CardContent className="p-8 md:p-12 bg-gradient-to-br from-purple-50 to-blue-50">
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">{poem.title}</h3>
                      <p className="text-purple-600 font-medium mb-6">by {poem.author}</p>
                      <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg italic border-l-4 border-purple-600 pl-6">
                        {poem.text}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-12">
                <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Share Your Poetry</h3>
                  <p className="text-gray-600 mb-6">
                    Have you written poetry inspired by Prespa? We'd love to feature your work in our collection.
                  </p>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-lg text-gray-300">by {selectedImage.artist}</p>
              <p className="text-sm text-purple-300 mt-1">{selectedImage.type}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Art;
