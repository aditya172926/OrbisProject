import "../css/FeedPost.css";
import useOrbisClient from "../../hooks/useOrbisClient";

const FeedPost = (props) => {
  const hookOrbisClient = useOrbisClient();

  return (
    <>
      <div className="mt-5 feedArea">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <a className="navbar-brand">QuickVote</a>
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
        </div>
      </div>
    </>
  );
};
export default FeedPost;
