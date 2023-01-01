import { useRef, useState } from "react";
import "../css/FeedViewArea.css";

const FeedViewArea = (props) => {

  

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
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-post"
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
