import React, { useState,useEffect } from 'react';
import FeedListCard from './FeedListCard';
import { database,DATABASE_ID,COLLECTION_ID_POSTS } from '../appwriteConfig'; 
import { Query } from 'appwrite';

function FeedList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await database.listDocuments(DATABASE_ID, COLLECTION_ID_POSTS,
          [
          Query.orderDesc('$createdAt')
        ]);
        setPosts(response.documents);
      }
      catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);



  return (
    <div className='h-screen bg-primaryBackground overflow-y-scroll'>
      {posts.map((post) => (
        <FeedListCard key={post.$id} post={post} />
      ))}
    </div>
  );
}

export default FeedList;
