import React from 'react';

const CommentCard = ({comment,author}) => {
  return (
    <div className="p-6 border rounded-lg  bg-gray-800 border-gray-700 hover:bg-gray-700 shadow-lg min-w-fit">
      <p className="text-white">{comment}</p>
      <p className="text-gray-500">{author}</p>
    </div>
  );
};

export default CommentCard;