import { useRef } from "react";

const ChannelList = (props) => {
  const channelName = useRef();
  const channelDescription = useRef();

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
                Setup Channel in{" "}
                {props.hookOrbisClient.selectedGroupData?.content?.name}
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
                    Channel Name
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
              <button
                type="button"
                className="btn btn-primary"
                onClick={() =>
                  props.hookOrbisClient.setUpChannel(
                    props.hookOrbisClient.selectedGroupData?.group_id,
                    channelName.current?.value,
                    "feed",
                    channelDescription.current?.value
                  )
                }
              >
                Create Channel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="text-center channelPosts">
        {props.hookOrbisClient.selectedGroupData?.channels.length > 0 ? (
          <>
            <ul class="list-group">
              {props.hookOrbisClient.selectedGroupData?.channels.map(
                (channel, index) => {
                  // return <p key={index}>{channel?.content?.name}</p>;
                  return (
                    <li key={index} class="list-group-item">
                      <div class="d-grid gap-2">
                        <button
                          className="btn btn-primary"
                        >
                          {channel?.content?.name}
                        </button>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
          </>
        ) : (
          <>
            <p>Create your first channel</p>
            <button
              className="btn btn-primary"
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#channelSetup"
            >
              Create Channel
            </button>
            {setupChannelModal()}
          </>
        )}
      </div>
    </>
  );
};
export default ChannelList;
