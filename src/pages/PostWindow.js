import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import UsersChat from '../components/UsersChat';
import { useParams } from 'react-router-dom';
import FeedListCard from '../components/FeedListCard';
import CommentCard from '../components/CommentCard';
import { useState,useEffect } from 'react';
import { database,DATABASE_ID,COLLECTION_ID_POSTS } from '../appwriteConfig';
import { Query } from 'appwrite';

function PostWindow() {
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
  
  const { postId } = useParams();
  const Id = postId;

  const post = posts.find((post) => post.$id === Id);

  return (
    <div>
      <div className='h-screen'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='h-screen grid grid-cols-3 md:grid-cols-6'>
          <div className='sidebar col-span-1 bg-primaryBackground hidden md:block'>
            <SideBar />
          </div>
          <div className='post-section col-span-3 bg-primaryBackground'>
            {/* was giving error due to undefined post */}
            {post && <FeedListCard key={post.$id} post={post} />}

            {
              post && post.comments &&
              post.comments.map((comment,i) => (
                <CommentCard key={i} comment={comment} />
              ))
            }
          </div>
          <div className='users-window col-span-2 bg-primaryBackground hidden md:block overflow-y-scroll'>
            <UsersChat />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostWindow;
