import { useRef, useState } from "react";
import "../css/FeedViewArea.css";

const FeedViewArea = (props) => {
  const postRef = useRef();
  const [buttonFunction, setButtonFunction] = useState("Post");

  const handleButtonFunction = () => {
    if (buttonFunction == "Post") {
      props.hookOrbisClient.sendFeedPost(postRef.current?.value, props.selectedChannel?.content.group_id);
    } else if (buttonFunction == "Vote") {
      console.log("This is a voting call");
    }
  }

  return (
    <div className="my-3 position-relative feedPostsArea">
      {props.hookOrbisClient.userGroups.length > 0 ? (
        <div className="px-3 feedPosts">
          {props.hookOrbisClient.user ? (
            <>
              <p>Posts</p>
            </>
          ) : (
            <>
              <p>Login to connect to Orbis</p>
            </>
          )}

          <div className="input-group mb-3 position-absolute bottom-0">
            <input
              type="text"
              className="form-control"
              placeholder="Write your Post"
              aria-label="Write your Post"
              aria-describedby="button-post"
              ref={postRef}
            />
            {/* <button
              className="btn btn-outline-primary"
              type="button"
              id="button-post"
              onClick={() => {
                props.hookOrbisClient.sendFeedPost(postRef.current?.value, props.selectedChannel?.content.group_id)
              }}
            >
              Post
            </button> */}
            <div className="btn-group dropstart">
              <button
                type="button"
                className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="visually-hidden">Toggle Dropstart</span>
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setButtonFunction("Vote")}>
                    Vote
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setButtonFunction("Post")}>
                    Post
                  </a>
                </li>
              </ul>
              <button
                type="button"
                className="btn btn-outline-primary"
                id="button-post"
                onClick={() => handleButtonFunction()}
              >
                {buttonFunction}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default FeedViewArea;
