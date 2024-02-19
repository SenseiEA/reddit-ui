import Post from "./Post";
import postData from "./postcontent.js";
export default function MainBlock() {
  const posts = postData;
  return (
    <div className="border-reddit-line mt-5">
      <hr className="border-reddit-line"></hr>
      {posts.map((post) => (
        <Post postObj={post} />
      ))}
      <hr className="border-reddit-line"></hr>
    </div>
  );
}
