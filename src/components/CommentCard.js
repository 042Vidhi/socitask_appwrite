import React from 'react';
import { Avatar } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';


function CommentCard({ comment }) {
  const user = {
    name: 'dummyUser',
    username: 'username',
    profilePic: 'https://i.pinimg.com/736x/ae/fb/32/aefb32e7f7812102cf2e5756169b13db.jpg'
  };

  return (
    <div className="flex items-start p-2 border border-quaternaryTextLightest bg-primaryBackground transition duration-300">
      <Avatar className="w-8 h-8 rounded-full" src={user.profilePic}/>
      <div className="ml-3">
        <p className="font-medium text-secondaryText">{user.name}</p>
        <p className="text-tertiaryTextLight text-xs">@{user.username}</p>
        <p className="text-secondaryText">{comment}</p>
        <div className="flex items-center mt-1">
          <p className="text-xs flex gap-2 items-center justify-center text-tertiaryTextLight"><FavoriteBorderIcon/>{comment.likes}</p>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
