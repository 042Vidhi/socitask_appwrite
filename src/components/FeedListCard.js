import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Avatar, MenuItem } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CommentModal from './CommentModal';
import Menu from '@mui/material/Menu';
import { database ,DATABASE_ID,COLLECTION_ID_POSTS } from '../appwriteConfig';


function FeedListCard({ post }) {

  const timestamp = post?.time;
  const timeString = new Date(timestamp).toLocaleTimeString([], { day: 'numeric', month: 'short',hour: '2-digit', minute: '2-digit' });
  const defaultAvatarURL = 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg';
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const [showDeleteMenu, setShowDeleteMenu] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);

  const user = {
    name: 'dummyUser',
    username: 'username',
    profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
  };

  const toggleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const openCommentModal = () => {
      setShowCommentModal(true);
  };

  const closeCommentModal = () => {
    setShowCommentModal(false);

  };

  const handleDeleteClick = (event) => {
    setShowDeleteMenu(event.currentTarget);
  };

  const handleDeleteClose = () => {
    setShowDeleteMenu(null);
  };



  const handleDeletePost = async (postId) => {
    try {
      await database.deleteDocument(DATABASE_ID, COLLECTION_ID_POSTS, postId);
      handleDeleteClose();
      window.location.reload();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  

  return (
    <div>
      <div className='bg-primaryBackground border-spacing-1 p-4 border border-quaternaryTextLightest '>
        {/* Header */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-1'>
            <Avatar className='w-10 h-10 rounded-full' src={user?.profilePic || defaultAvatarURL} />
            <div className='flex flex-col items-start'>
              <p className='text-secondaryText text-sm font-medium'>{user?.name || "dummyUser"}</p>
              <p className='text-tertiaryTextLight text-xs'>@{user?.username || "username"}</p>
            </div>
          </div>

            <div className='flex flex-row '>
              {/* Top Right Dropdown */}
              <div className='flex justify-end'>
                  <button onClick={handleDeleteClick}>
                    <MoreHorizIcon className='text-secondaryText hover:bg-senaryHover hover:rounded-full' />
                  </button>
                  <Menu
                    anchorEl={showDeleteMenu}
                    open={Boolean(showDeleteMenu)}
                    onClose={handleDeleteClose}
                  >
                    <MenuItem
                      className='text-secondaryText hover:bg-senaryHover hover:rounded-full'
                      onClick={()=>handleDeletePost(post.$id)}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
              </div>
            </div>

          </div>


        {/* Body */}
        {/*on clicking body text of the post takes you to the post page where you can see your and others comments*/}
        <a href={`/posts/${post.$id}`} >
        <div className='flex items-start justify-start'>
          <p className='text-secondaryText text-start pl-10 max-w-full break-words'>
            {post.text}
          </p>
        </div>
        </a>


        {/* Footer */}
        <div className='flex flex-row items-center gap-10 px-10 pt-3'>
          <button className='flex flex-row items-center gap-2'
          onClick={toggleLike}
        >
          {isLiked ? (
            <FavoriteIcon className='text-red-500' />
          ) : (
            <FavoriteBorderIcon className='text-secondaryText' />
          )}
            <p className='text-xs text-tertiaryTextLight'>{likes}</p>
          </button>
          <button
            className='flex flex-row items-center gap-2'
            onClick={openCommentModal}
          >
            <ModeCommentIcon className='text-secondaryText' />
            <p className='text-xs text-tertiaryTextLight'>Comment</p>
          </button>
          <p className='text-xs text-tertiaryTextLight'>{timeString}</p>
        </div>
      </div>


      {/* Comment Modal */}
      <CommentModal
        showCommentModal={showCommentModal}
        closeCommentModal={closeCommentModal}
        parentPostId={post.$id}
      />


    </div>
  );
}

export default FeedListCard;