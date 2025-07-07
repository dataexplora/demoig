import React from 'react';
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  MoreHorizontal,
  Grid3X3,
  User,
  Users,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const InstagramProfile = () => {
  const posts = [
    { id: 1, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_httpss.mj.run5jtpWQhPGx4_replace_the_blanket_with_cbad1c20-97cf-4919-ae8b-1ab5f0dca25f_3.jpg', likes: 234, comments: 12 },
    { id: 2, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_httpss.mj.run5jtpWQhPGx4_replace_the_blanket_with_25c92856-d52d-44a0-9718-ccc747041c28_1.jpg', likes: 156, comments: 8 },
    { id: 3, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_httpss.mj.runO-jT9eBk7tw_A_beautiful_35_years_old_11132c02-9a9a-4cdd-a552-468d2e4299b2_3 (1).jpg', likes: 89, comments: 5 },
    { id: 4, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/modelokontinotzami.jpg', likes: 312, comments: 24 },
    { id: 5, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/modeloeksoparalia.jpg', likes: 198, comments: 15 },
    { id: 6, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_imagine_organic-modern_cliff-house_bedroom_carved_a92631af-6fa5-4369-933a-d4fb00848848_1.jpg', likes: 276, comments: 18 },
    { id: 7, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_Sunrise_in_an_ultra-luxury_penthouse_overlooking__46bba741-31ba-49ab-bd2c-001343a654cc_0.jpg', likes: 145, comments: 9 },
    { id: 8, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_A_young_woman_with_soft_fair_skin_natural_freckle_c37c765a-8d94-444b-885f-64339f1a34fd_2.jpg', likes: 203, comments: 11 },
    { id: 9, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_httpss.mj.runO-jT9eBk7tw_Wellness_love_life_happy_018ad51c-4309-4079-ac25-6fe96ee81468_2.jpg', likes: 167, comments: 7 },
    { id: 10, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_A_luxurious_modern_bedroom_in_a_high-end_Athenian_e78ad03d-91ce-479e-baac-7a6318457751_3.jpg', likes: 276, comments: 18 },
    { id: 11, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_httpss.mj.runL0S_n_4ZOMU_Luxury_private-jet_cabin_bf415395-3c52-460f-91e7-fa114db222fc_3.jpg', likes: 145, comments: 9 },
    { id: 12, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_imagine_organic-modern_cliff-house_bedroom_carved_a92631af-6fa5-4369-933a-d4fb00848848_3 (1).jpg', likes: 203, comments: 11 },
    { id: 13, image: 'https://cdn.aigenta.gr/prosleep/instagram/POSTS/u8736931857_Sunrise_in_an_ultra-luxury_penthouse_overlooking__01f5b50f-18f2-4e95-9ad5-72d96e8591d9_1.jpg', likes: 167, comments: 7 },
  ];

  const stories = [
    { id: 1, title: 'Reviews', image: 'https://cdn.aigenta.gr/prosleep/instagram/reviews.jpg' },
    { id: 2, title: 'Selfcare', image: 'https://cdn.aigenta.gr/prosleep/instagram/selfcare.jpg' },
    { id: 3, title: 'Community', image: 'https://cdn.aigenta.gr/prosleep/instagram/community.jpg' },
    { id: 4, title: 'Blog', image: 'https://cdn.aigenta.gr/prosleep/instagram/blog.jpg' },
    { id: 5, title: 'Sleep Polls', image: 'https://cdn.aigenta.gr/prosleep/instagram/sleeppolls.jpg' },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <h1 className="text-xl font-semibold">prosleep</h1>
          <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
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
              src="https://cdn.aigenta.gr/prosleep/instagram/profile.jpg"
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
                <div className="font-semibold text-lg">124.1K</div>
                <div className="text-gray-600 text-sm">followers</div>
              </div>
              <div>
                <div className="font-semibold text-lg">735</div>
                <div className="text-gray-600 text-sm">following</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4">
          <h2 className="font-semibold mb-1">ProSleep</h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            📍 Athens, GR<br />
            🏆 Award-Winning Weighted Blankets<br />
            🐉 Seen on Dragons' Den<br />
            🌖 30-nights trial
          </p>
          <a
            href="https://prosleep.gr"
            className="text-blue-600 text-sm font-medium"
          >
            🔗prosleep.gr
          </a>
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
            <div
              key={story.id}
              className="flex flex-col items-center space-y-1 min-w-max"
            >
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
            <div
              key={post.id}
              className="aspect-[4/5] relative group" // <- portrait 4 : 5
            >
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
                    <span className="text-sm font-semibold">
                      {post.comments}
                    </span>
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
