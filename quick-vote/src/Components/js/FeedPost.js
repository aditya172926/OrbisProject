import { useContext, useRef, useState } from "react";
import { WalletContext } from "../../Context/WalletProvider";
import useOrbisClient from "../../hooks/useOrbisClient";
import "../css/FeedPost.css";
import "../css/Sidebar.css";
import ChannelList from "./ChannelList";
import FeedViewArea from "./FeedViewArea";
import SidePanel from "./SidePanel";

const FeedPost = (props) => {
  const walletContext = useContext(WalletContext);
  const hookOrbisClient = useOrbisClient();
  const [selectedChannel, setSelectedChannel] = useState();

  const groupName = useRef();
  const groupDescription = useRef();

  const setupGroupModal = () => {
    return (
      <div
        className="modal fade"
        id="groupSetup"
        tabIndex="-1"
        aria-labelledby="groupSetupLabel"
        data-bs-backdrop="static"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="groupSetupLabel">
                Setup Group
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="text-start">
                <div className="mb-3">
                  <label htmlFor="groupName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="groupName"
                    placeholder="gaming"
                    ref={groupName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="groupDescription" className="form-label">
                    About
                  </label>
                  <textarea
                    className="form-control"
                    id="groupDescription"
                    rows="3"
                    ref={groupDescription}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  props.hookOrbisClient.setUpGroup(
                    groupName.current?.value,
                    groupDescription.current?.value
                  )
                }
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  return (
    <>
      <div className="feedArea">
        <nav className="navbar bg-light">
          <div className="container-fluid">
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              Sidebar
            </button>
            <a className="navbar-brand">QV</a>
            {hookOrbisClient.user ? (
              <>
                <div className="dropstart">
                  <a
                    className="btn btn-primary-outline dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More
                  </a>

                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item btn btn-primary-outline"
                        href="#"
                        role="button"
                        data-bs-toggle="modal"
                        data-bs-target="#groupSetup"
                      >
                        Create Group
                      </a>
                    </li>
                    <li>
                      <a
                        className="dropdown-item"
                        href="#"
                        onClick={hookOrbisClient.disconnectOrbis}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </div>
                {setupGroupModal()}
              </>
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

        <SidePanel hookOrbisClient={hookOrbisClient} />

        {walletContext.isLoading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <div className="row" id="wrapper">
            <div className="col-3" id="side-nav">
              <ChannelList hookOrbisClient={hookOrbisClient} setSelectedChannel={setSelectedChannel} />
            </div>
            <div className="col-9" id="content-wrapper">
              <FeedViewArea hookOrbisClient={hookOrbisClient} selectedChannel={selectedChannel} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default FeedPost;
