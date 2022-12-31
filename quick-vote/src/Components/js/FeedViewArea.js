const FeedViewArea = (props) => {
  const layoutGroupModal = () => {
    return (
      <div
        className="modal fade"
        id="groupSetup"
        tabIndex="-1"
        aria-labelledby="groupSetupLabel"
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
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="my-3">
      {props.userGroups.length > 0 ? (
        <div className="p-3 feedPosts">
          {props.user ? (
            <>
              <button className="btn btn-primary" onClick={props.getUserGroups}>
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
            {layoutGroupModal()}
          </div>
        </>
      )}
    </div>
  );
};
export default FeedViewArea;
