import React, { useState } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Avatar, MenuItem } from '@mui/material';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { dummyChatUsers } from '../utils/dummyUsers';
import CommentModal from './CommentModal';
import Menu from '@mui/material/Menu';


function FeedListCard({ post }) {
  const { userId, postId, time, text, likes } = post;
  const user = dummyChatUsers.find((user) => user.userId === userId);

  const [showDeleteMenu, setShowDeleteMenu] = useState(null);
  const [showCommentModal, setShowCommentModal] = useState(false);

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

  const handleDeletePost = () => {
    console.log('Post deleted:', postId);
    handleDeleteClose();
  };

  return (
    <div>
      <div className='bg-primaryBackground border-spacing-1 p-4 border border-quaternaryTextLightest '>
        {/* Header */}
        <div className='flex flex-row justify-between'>
          <div className='flex flex-row space-x-1'>
            <Avatar className='w-10 h-10 rounded-full' src={user.profilePic} />
            <div className='flex flex-col items-start'>
              <p className='text-secondaryText text-sm font-medium'>{user.name}</p>
              <p className='text-tertiaryTextLight text-xs'>@{user.username}</p>
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
                      onClick={handleDeletePost}
                    >
                      Delete
                    </MenuItem>
                  </Menu>
              </div>
            </div>

          </div>


        {/* Body */}
        {/*on clicking body text of the post takes you to the post page where you can see your and others comments*/}
        <a href={`/posts/${postId}`} >
        <div className='flex items-start justify-start'>
          <p className='text-secondaryText text-start pl-10 max-w-full break-words'>
            {text}
          </p>
        </div>
        </a>


        {/* Footer */}
        <div className='flex flex-row items-center gap-10 px-10 pt-3'>
          <button className='flex flex-row items-center gap-2'>
            <FavoriteBorderIcon className='text-secondaryText' />
            <p className='text-xs text-tertiaryTextLight'>{likes}</p>
          </button>
          <button
            className='flex flex-row items-center gap-2'
            onClick={openCommentModal}
          >
            <ModeCommentIcon className='text-secondaryText' />
            <p className='text-xs text-tertiaryTextLight'>Comment</p>
          </button>
          <p className='text-xs text-tertiaryTextLight'>{time}</p>
        </div>
      </div>


      {/* Comment Modal */}
      <CommentModal
        showCommentModal={showCommentModal}
        closeCommentModal={closeCommentModal}
      />


    </div>
  );
}

export default FeedListCard;
