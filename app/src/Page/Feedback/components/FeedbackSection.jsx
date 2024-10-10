import React from "react";
import CommentCard from "./CommentCard";
import Masonry from "react-masonry-css";
import useFeedbacks from "../../../services/useFeedbacks";
import ScrollLoader from "../../../loaders/ScrollLoader";

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const comments = [
  { id: 1, feedback: "Great job!" },
  { id: 2, feedback: "I really enjoyed this. Keep it up!" },
  { id: 3, feedback: "Needs improvement. Try harder next time." },
  { id: 4, feedback: "Excellent work! I'm impressed." },
  { id: 5, feedback: "Not bad, but there's room for improvement." },
  { id: 6, feedback: "Amazing! I can't wait to see more from you." },
  { id: 7, feedback: "Good effort, but some parts were confusing." },
  { id: 8, feedback: "You've got talent! Keep refining your skills." },
  { id: 9, feedback: "Interesting concept, but execution could be better." },
  {
    id: 10,
    feedback: "I didn't quite understand the message. Can you clarify?",
  },
];

export default function FeedbackSection({ reviews }) {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid px-5 my-5 flex-1"
      columnClassName="my-masonry-grid_column"
    >
      {reviews?.map(({ id, feedback }) => (
        <CommentCard key={id} comment={feedback} />
      ))}
    </Masonry>
  );
}
export function SkeletonFeedbackSection() {
  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid px-5 my-5 flex-1"
        columnClassName="my-masonry-grid_column"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonCommentCard key={index} />
        ))}
      </Masonry>
    </>
  );
}

// Skeleton for individual CommentCard with random heights
const SkeletonCommentCard = () => {
  // Generate random heights for simulating different content sizes
  const randomHeight1 = Math.floor(Math.random() * 40) + 40; // height between 40px and 80px
  const randomHeight2 = Math.floor(Math.random() * 20) + 20; // height between 20px and 40px

  return (
    <div className="p-6 border rounded-lg bg-[#0D1117] border-gray-700 shadow-lg min-w-[14rem] animate-pulse">
      <div
        className="bg-gray-600 rounded mb-4"
        style={{ height: `${randomHeight1}px`, width: "100%" }}
      ></div>
      <div
        className="bg-gray-600 rounded"
        style={{ height: `${randomHeight2}px`, width: "50%" }}
      ></div>
    </div>
  );
};
