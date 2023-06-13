import React from 'react';

const CommentCard = ({ comment }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <p className="text-gray-800 break-words">{comment.text}</p>
      <p className="text-gray-500">{comment.author}</p>
    </div>
  );
};

export default CommentCard;