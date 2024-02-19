//Conditional Logic
//Conditional Rendering

import React from "react";
import { useState } from "react";
import { BiSolidDownvote, BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { BiSolidUpvote } from "react-icons/bi";

const Post = (props) => {
  const [isUpvoted, setIsUpvoted] = useState(false);
  const [isDownvoted, setIsDownvoted] = useState(false);
  const { time } = props.postObj;
  const handleUpvoted = (clicked) => {
    clicked.preventDefault();
    setIsUpvoted(!isUpvoted);
  };
  const handleDownvoted = (clicked) => {
    clicked.preventDefault();
    setIsDownvoted(!isDownvoted);
  };

  return (
    <div className="justify-center hover:rounded-lg hover:bg-reddit-hover p-5">
      <div className="flex gap-x-4 w-96 justify-start">
        <img
          className="subredditProfile"
          src={props.postObj.subredditLogo}
          alt="genshin"
        ></img>
        <h1 className="postText text-sm align-middle text-reddit-category">
          r/{props.postObj.subreddit}
        </h1>
        {props.postObj.time >= 24 ? (
          <h2 className="postText text-sm align-middle text-reddit-category">
            days ago
          </h2>
        ) : (
          <h2 className="postText text-sm align-middle text-reddit-category">
            {props.postObj.time} hours ago
          </h2>
        )}
      </div>
      <div className="mt-1">
        <h1 className="text-wrap text-2xl font-semibold">
          {props.postObj.title}
        </h1>
        <img
          className="rounded-lg object-none max-h-80 w-5/6 size-fit mt-2"
          src={props.postObj.img}
          alt="post"
        ></img>
      </div>
      <div className="flex gap-5">
        <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-26 rounded-full bg-reddit-hover ">
          <button onClick={handleUpvoted}>
            {isUpvoted ? <BiUpvote /> : <BiSolidUpvote />}{" "}
          </button>
          <h1> {props.postObj.votes} </h1>
          <button onClick={handleDownvoted}>
            {isUpvoted ? <BiDownvote /> : <BiSolidDownvote />}
          </button>
        </div>
        <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-20 rounded-full bg-reddit-hover ">
          <FaRegCommentAlt /> <h1> {props.postObj.comments} </h1>
        </div>
        <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-20 rounded-full bg-reddit-hover ">
          <FiShare /> <h1> Share </h1>
        </div>
      </div>
    </div>
  );
};
export default Post;
