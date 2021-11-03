import video from "../data/video.js";
import Details from "./Details.js";
import Likes from "./Likes";
import Comments from "./Comments.js";

const App = () => {

  console.log(video)

  return (
    <div className="App">
      <Details src={video.embedUrl} title={video.title} views={video.views} uploadDate={video.createdAt}/>

      <Likes upvotes={video.upvotes} downvotes={video.downvotes}/>

      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;
