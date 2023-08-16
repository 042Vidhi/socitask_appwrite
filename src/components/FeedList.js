import React, { useState } from 'react';
import FeedListCard from './FeedListCard';
import { posts } from '../utils/dummyPosts';

function FeedList() {
  const sortedPosts = [...posts].sort((a, b) => b.time - a.time);

  return (
    <div className='h-screen overflow-y-scroll'>
      {sortedPosts.map((post) => (
        <FeedListCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default FeedList;
