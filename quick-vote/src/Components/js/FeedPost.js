import { useContext } from "react";
import { WalletContext } from "../../Context/WalletProvider";
import useOrbisClient from "../../hooks/useOrbisClient";
import "../css/FeedPost.css";
import FeedViewArea from "./FeedViewArea";

const FeedPost = (props) => {
  const walletContext = useContext(WalletContext);
  const hookOrbisClient = useOrbisClient();

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
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          <FeedViewArea
            user={hookOrbisClient.user}
            getUserGroups={hookOrbisClient.getUserGroups}
            userGroups={hookOrbisClient.userGroups}
          />
        )}
      </div>
    </>
  );
};
export default FeedPost;
