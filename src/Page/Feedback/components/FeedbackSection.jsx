import React from "react";
import CommentCard from "./CommentCard";
import Masonry from "react-masonry-css";
import useFeedbacks from "../../../services/useFeedbacks";
import ScrollLoader from "../../../loaders/ScrollLoader";

const breakpointColumnsObj = {
  default: 5,
  1100: 3,
  700: 2,
  500: 1
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
  { id: 10, feedback: "I didn't quite understand the message. Can you clarify?" },
];


export default function FeedbackSection() {
  const {data,isLoading,isFetched,isError} = useFeedbacks()
  if(isLoading) return <ScrollLoader/>
  else if(isFetched && !isError){
    // console.log(comments);
    return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid px-5 my-5 flex-1"
      columnClassName="my-masonry-grid_column"
    >
      {comments?.map(({id,feedback}) => (
        <CommentCard key={id} comment={feedback}/>
      ))}
    </Masonry>
  );}
}
