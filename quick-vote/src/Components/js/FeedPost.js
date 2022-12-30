import "../css/FeedPost.css";
import useOrbisClient from "../../hooks/useOrbisClient";
import { useRef } from "react";

const FeedPost = (props) => {
  const hookOrbisClient = useOrbisClient();

  const textRef = useRef();

  return (
    <>
      <div className="mt-5 feedArea">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">QV</a>
            {hookOrbisClient.user ? (
              <button
                class="btn btn-outline-primary"
                onClick={hookOrbisClient.disconnectOrbis}
              >
                Logout
              </button>
            ) : (
              <></>
            )}
          </div>
        </nav>

        <div className="p-3 feedPosts">
          {hookOrbisClient.user ? (
            <>
              <button
                className="btn btn-primary"
                onClick={hookOrbisClient.getUserGroups}
              >
                Get User groups
              </button>
            </>
          ) : (
            <button
              className="btn btn-primary"
              onClick={hookOrbisClient.connectOrbis}
            >
              Connect to Orbis
            </button>
          )}
          <p>The connect wallet is {props.address}</p>

          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Write your Post"
              aria-label="Write your Post"
              aria-describedby="button-post"
            />
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-post"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeedPost;
