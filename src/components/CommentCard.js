import React from 'react';
import { Avatar } from '@mui/material';
import { dummyChatUsers } from '../utils/dummyUsers';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function CommentCard({ comment }) {
  const user = dummyChatUsers.find((user) => user.userId === comment.userId);

  return (
    <div className="flex items-start p-2 border border-quaternaryTextLightest bg-primaryBackground transition duration-300">
      <Avatar className="w-8 h-8 rounded-full" src={user.profilePic}/>
      <div className="ml-3">
        <p className="font-medium text-secondaryText">{user.name}</p>
        <p className="text-tertiaryTextLight text-xs">@{user.username}</p>
        <p className="text-secondaryText">{comment.text}</p>
        <div className="flex items-center mt-1">
          <p className="text-xs flex gap-2 items-center justify-center text-tertiaryTextLight"><FavoriteBorderIcon/>{comment.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
