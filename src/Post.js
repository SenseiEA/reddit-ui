import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

export default function Post(){
    return(
      <div className="hover:rounded-lg hover:bg-reddit-hover p-5">
        <div className="flex gap-x-4 w-96 justify-start">
          <img className='subredditProfile' src='./images/genshin.webp' alt="genshin"></img>      
          <h1 className="postText text-sm align-middle text-reddit-category"> r/Genshin_Impact</h1>
          <h2 className="postText text-sm align-middle text-reddit-category">13hrs ago</h2>
        </div>
        <div className="mt-1">
          <h1 className="text-wrap text-2xl font-semibold">Do you think this year's anniversary rewards are bad?</h1>
          <img className="rounded-lg object-none h-80 w-full mt-2" src='./images/genshinPost.webp' alt='genshinPost'></img>
        </div>
        <div className="flex gap-5">
            <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-26 rounded-full bg-reddit-hover ">      
            <BiUpvote /><h1> 41.6k </h1> <BiDownvote /> 
            </div>
            <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-20 rounded-full bg-reddit-hover ">  
            <FaRegCommentAlt/> <h1> 296 </h1>
            </div>
            <div className="flex gap-2 items-center justify-items-center mt-2 p-1 w-20 rounded-full bg-reddit-hover ">  
            <FiShare /> <h1> Share </h1>
            </div>
        </div>
  
  
      </div>
    );
  }