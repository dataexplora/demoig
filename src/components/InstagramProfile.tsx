
import React from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Grid3X3, User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramProfile = () => {
  const posts = [
    { id: 1, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1649972904349-6e44c42644a7?', likes: 234, comments: 12 },
    { id: 2, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1488590528505-98d2b5aba04b', likes: 156, comments: 8 },
    { id: 3, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1581091226825-a6a2a5aee158?', likes: 89, comments: 5 },
    { id: 4, image: 'https://cdn.aigenta.gr/prosleep/instagram/modelokontinotzami.png?', likes: 312, comments: 24 },
    { id: 5, image: 'https://cdn.aigenta.gr/prosleep/instagram/modeloeksoparalia.png?w=400&h=400&fit=crop', likes: 198, comments: 15 },
    { id: 6, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop', likes: 276, comments: 18 },
    { id: 7, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1721322800607-8c38375eef04?w=400&h=400&fit=crop', likes: 145, comments: 9 },
    { id: 8, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop', likes: 203, comments: 11 },
    { id: 9, image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1488590528505-98d2b5aba04b?w=400&h=400&fit=crop', likes: 167, comments: 7 }
  ];

  const stories = [
    { id: 1, title: 'Travel', image: 'https://instagram.fath2-1.fna.fbcdn.net/v/t51.2885-15/352770013_311828967840339_3209074074427907536_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fath2-1.fna.fbcdn.net&_nc_cat=103&_nc_oc=Q6cZ2QFXcZwbEx1b13Gd5Yas4onuT2azKTdktrsBmgc6o2DBv1MpokABliP45ycezQqqDsxSypt7zHH4xjRTUzaPkOCy&_nc_ohc=2lfOnZvj51kQ7kNvwEELYgP&_nc_gid=fvY0la7r7K2EGtyhr-ti2w&edm=AGFyKLkBAAAA&ccb=7-5&oh=00_AfPyYBWyKsaJ5CyKAsr8cColhFhSJBciAgWSl0lksVJ3Fg&oe=686C4D40&_nc_sid=5a0a6d' },
    { id: 2, title: 'Food', image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1488590528505-98d2b5aba04b?w=100&h=100&fit=crop' },
    { id: 3, title: 'Work', image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop' },
    { id: 4, title: 'Friends', image: 'https://cdn.aigenta.gr/prosleep/instagram/photo-1526374965328-7f61d4dc18c5?w=100&h=100&fit=crop' }
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">prosleep</h1>
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <MoreHorizontal className="w-6 h-6" />
      </div>

      {/* Profile Info */}
      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-0.5">
            <img
              src="https://instagram.fath2-1.fna.fbcdn.net/v/t51.2885-19/120233419_797594231000059_2578888167780984570_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fath2-1.fna.fbcdn.net&_nc_cat=107&_nc_oc=Q6cZ2QF7o0p4CGv4fgCyhhMsgGqrT5Em5ubJLivakapDS6ne1UTSCXE1_-UFZqPXeDJDAemeIGc9DkaSFhgeeoh0SfIt&_nc_ohc=BX4DrGh7aCYQ7kNvwF7H3y6&_nc_gid=pGI73_OZ3r-JIp3Ou4-SiA&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AfNJY_zeZ9rI1P8T3Qh_C7PUtkGYzLX7DNn4BMt7ngq3MQ&oe=686C58C1&_nc_sid=7a9f4b"
              alt="Profile"
              className="w-full h-full rounded-full object-cover border-2 border-white"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-around text-center">
              <div>
                <div className="font-semibold text-lg">847</div>
                <div className="text-gray-600 text-sm">posts</div>
              </div>
              <div>
                <div className="font-semibold text-lg">2.1K</div>
                <div className="text-gray-600 text-sm">followers</div>
              </div>
              <div>
                <div className="font-semibold text-lg">1.8K</div>
                <div className="text-gray-600 text-sm">following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <h2 className="font-semibold mb-1">ProSleep</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            📍 Athens, GR<br/>
            ✨ Content Creator & Photographer<br/>
            🌟 Living life one adventure at a time<br/>
            👇 Check out my latest work
          </p>
          <a href="https://prosleep.gr" className="text-blue-600 text-sm font-medium">prosleep.gr</a>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2 mb-4">
          <Button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white">
            Follow
          </Button>
          <Button variant="outline" className="flex-1">
            Message
          </Button>
          <Button variant="outline" className="px-3">
            <User className="w-4 h-4" />
          </Button>
        </div>

        {/* Story Highlights */}
        <div className="flex space-x-4 mb-6 overflow-x-auto pb-2">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-1 min-w-max">
              <div className="w-16 h-16 rounded-full bg-gray-200 p-0.5">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <span className="text-xs text-gray-600">{story.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="border-t">
        <div className="flex">
          <div className="flex-1 py-3 text-center border-b-2 border-gray-900">
            <Grid3X3 className="w-6 h-6 mx-auto" />
          </div>
          <div className="flex-1 py-3 text-center text-gray-400">
            <Users className="w-6 h-6 mx-auto" />
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-0.5 bg-gray-100">
          {posts.map((post) => (
            <div key={post.id} className="aspect-square relative group">
              <img
                src={post.image}
                alt={`Post ${post.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-active:opacity-100 transition-opacity flex items-center justify-center">
                <div className="flex items-center space-x-4 text-white">
                  <div className="flex items-center space-x-1">
                    <Heart className="w-5 h-5 fill-current" />
                    <span className="text-sm font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageCircle className="w-5 h-5 fill-current" />
                    <span className="text-sm font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;
