import React from 'react';
import Navbar from '../components/Navbar';
import SideBar from '../components/SideBar';
import UsersChat from '../components/UsersChat';
import { useParams } from 'react-router-dom';
import { posts } from '../utils/dummyPosts';
import FeedListCard from '../components/FeedListCard';
import CommentCard from '../components/CommentCard';

function PostWindow() {
  const { postId } = useParams();
  const Id = parseInt(postId); // Convert the id to an integer

  const post = posts.find((post) => post.postId === Id);

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
            <FeedListCard post={post} />
            {
              post.comments.map((comment) => (
                <CommentCard comment={comment} />
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
