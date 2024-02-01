import Post from "./Post";

export default function MainBlock(){
    return(
      <div className="border-reddit-line mt-5">
        <Post/>
        <hr className="border-reddit-line"></hr>
        <Post/>
        <hr className="border-reddit-line"></hr>
        <Post/>
        <hr className="border-reddit-line"></hr>
        <Post/>
        <hr className="border-reddit-line"></hr>
        <Post/>
      </div>
    );
  }