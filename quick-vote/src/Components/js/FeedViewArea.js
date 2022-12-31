import { useRef } from "react";

const FeedViewArea = (props) => {
  const groupName = useRef();
  const groupDescription = useRef();
  const channelName = useRef();
  const channelDescription = useRef();

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
                onClick={() => props.hookOrbisClient.setUpGroup(
                  groupName.current?.value,
                  groupDescription.current?.value
                )}
              >
                Create Group
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const setupChannelModal = () => {
    return (
      <div
        className="modal fade"
        id="channelSetup"
        tabIndex="-1"
        aria-labelledby="channelSetupLabel"
        data-bs-backdrop="static"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="channelSetupLabel">
                Setup Channel
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
                  <label htmlFor="channelName" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="channelName"
                    placeholder="gaming"
                    ref={channelName}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="channelDescription" className="form-label">
                    About
                  </label>
                  <textarea
                    className="form-control"
                    id="channelDescription"
                    rows="3"
                    ref={channelDescription}
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
              <button type="button" className="btn btn-primary">
                Create Channel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-3">
      {props.hookOrbisClient.userGroups.length > 0 ? (
        <div className="p-3 feedPosts">
          {props.hookOrbisClient.user ? (
            <>
              <button className="btn btn-primary" onClick={props.hookOrbisClient.getUserGroups}>
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
      ) : (
        <>
          <div className="text-center">
            <p>You don't have any groups yet</p>
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#groupSetup"
            >
              Set up Group
            </button>
            {setupGroupModal()}
          </div>
        </>
      )}
    </div>
  );
};
export default FeedViewArea;
