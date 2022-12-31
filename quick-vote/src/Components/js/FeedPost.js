import "../css/FeedPost.css";
import useOrbisClient from "../../hooks/useOrbisClient";
import { useRef, useContext } from "react";
import { WalletContext } from "../../Context/WalletProvider";

const FeedPost = (props) => {
  const hookOrbisClient = useOrbisClient();
  const walletContext = useContext(WalletContext);

  const textRef = useRef();

  return (
    <>
      <div className="mt-5 feedArea">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">QV</a>
            {hookOrbisClient.user ? (
              <button
                className="btn btn-outline-primary"
                onClick={hookOrbisClient.disconnectOrbis}
              >
                Logout
              </button>
            ) : (
              <button
                className="btn btn-primary"
                onClick={hookOrbisClient.connectOrbis}
              >
                Login
              </button>
            )}
          </div>
        </nav>

        {walletContext.isLoading ? (
          <p>Loading ...</p>
        ) : (
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
              <>
                <p>The user is not Connected to orbis client</p>
              </>
            )}

            <div className="input-group mb-3">
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
        )}
      </div>
    </>
  );
};
export default FeedPost;
