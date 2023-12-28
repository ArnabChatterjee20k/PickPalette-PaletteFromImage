import React from "react";

const CommentCard = ({ comment, author }) => {
  const avatar =
    "https://lh3.googleusercontent.com/a/ACg8ocJgNXLMe-q4CUi68WJVmeFnSu1gRZ-7oXQWqRtA7UzlIg=s96-c";
  const name = "Arnab Chatterjee";
  return (
    <div className="p-6 border rounded-lg bg-[#0D1117] border-gray-700 hover:bg-gray-700 shadow-lg min-w-[10rem]">
      <div className="flex justify-start items-center gap-4 mb-3">
        <img
          class="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
          src={avatar}
          alt="Bordered avatar"
        />
        <h4>{name}</h4>
      </div>
      <p className="text-white">{comment}</p>
      <p className="text-gray-500">{author}</p>
    </div>
  );
};

export default CommentCard;
