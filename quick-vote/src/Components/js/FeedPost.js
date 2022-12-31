import { useContext, useState } from "react";
import { WalletContext } from "../../Context/WalletProvider";
import useOrbisClient from "../../hooks/useOrbisClient";
import "../css/FeedPost.css";
import "../css/Sidebar.css";
import FeedViewArea from "./FeedViewArea";
import SidePanel from "./SidePanel";

const FeedPost = (props) => {
  const walletContext = useContext(WalletContext);
  const hookOrbisClient = useOrbisClient();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleViewSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div className="feedArea">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Sidebar
            </button>
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

        {/* <Sidebar isOpen={sidebarOpen} /> */}

        {walletContext.isLoading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row position-relative" id="wrapper">
            <div className="col-3" id="side-nav">
              <SidePanel />
            </div>
            <div className="col-9" id="content-wrapper">
              <FeedViewArea hookOrbisClient={hookOrbisClient} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FeedPost;
