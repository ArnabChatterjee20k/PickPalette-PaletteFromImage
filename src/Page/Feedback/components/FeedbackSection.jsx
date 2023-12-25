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

export default function FeedbackSection() {
  const {data:comments,isLoading,isFetched,isError} = useFeedbacks()
  if(isLoading) return <ScrollLoader/>
  else if(isFetched && !isError){
    // console.log(comments);
    return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid px-5"
      columnClassName="my-masonry-grid_column"
    >
      {comments?.map(({id,feedback}) => (
        <CommentCard key={id} comment={feedback}/>
      ))}
    </Masonry>
  );}
}
