import React from "react";

export default function FeedbackForm() {
  return (
    <form className="mb-6 w-96 max-w-[80%]">
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <textarea
          id="comment"
          rows="3"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          placeholder="Write a comment..."
          required
        ></textarea>
      </div>
      <button
        type="submit"
        className="flex items-center justify-center w-full text-center py-2.5 px-4 text-xs font-medium text-black bg-[#F7C04A] hover:bg-[#ffae00] focus:ring-4 focus:ring-yellow-500 rounded" 
      >
        Post comment
      </button>
    </form>
  );
}
