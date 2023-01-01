import { useRef } from "react";
import "../css/FeedViewArea.css";

const FeedViewArea = (props) => {
  const postRef = useRef();

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
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-post"
              onClick={() => {
                props.hookOrbisClient.sendFeedPost(postRef.current?.value, props.selectedChannel?.content.group_id)
              }}
            >
              Post
            </button>
          </div>
        </div>
      ) : (
        <>
          
        </>
      )}
    </div>
  );
};
export default FeedViewArea;
