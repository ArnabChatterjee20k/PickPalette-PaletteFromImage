import React from "react";
import CommentCard from "./CommentCard";
import Masonry from "react-masonry-css";

export default function FeedbackSection() {
  const comments = [
    {
      id: 1,
      text: "Great post!ljsdfljdlsfjlsdjfldsjlfjsdlfjlsdjflsdjazjfl;sajf;djfldj;fjdslfj",
      author: "John Doe",
    },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    { id: 2, text: "I completely agree.", author: "Jane Smith" },
    // Add more comments here...
  ];

  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };
  
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
    </Masonry>
  );
}
